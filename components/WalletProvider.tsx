'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WalletContextType {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  chainId: string | null;
  balance: string;
  balanceWei: bigint;
  connect: () => Promise<void>;
  disconnect: () => void;
  shortAddress: string;
  refreshBalance: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Robinhood Chain mainnet (L2) — chain ID 4663
const ROBINHOOD_CHAIN_ID = '0x1237';
const ROBINHOOD_CHAIN_NAME = 'Robinhood Chain';
const ROBINHOOD_RPC_URL = 'https://rpc.mainnet.chain.robinhood.com';
const ROBINHOOD_EXPLORER_URL = 'https://explorer.mainnet.chain.robinhood.com';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
      isMetaMask?: boolean;
    };
  }
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [chainId, setChainId] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [balanceWei, setBalanceWei] = useState<bigint>(BigInt(0));

  // Check if already connected on mount
  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (typeof window === 'undefined' || !window.ethereum) return;

    try {
      const accounts = (await window.ethereum.request({
        method: 'eth_accounts',
      })) as string[];

      if (accounts.length > 0) {
        setAddress(accounts[0]);
        const currentChainId = (await window.ethereum.request({
          method: 'eth_chainId',
        })) as string;
        setChainId(currentChainId);
        await fetchBalance(accounts[0]);
      }
    } catch (error) {
      console.error('Error checking connection:', error);
    }
  };

  const fetchBalance = async (addr: string) => {
    if (typeof window === 'undefined' || !window.ethereum) return;

    try {
      const balanceHex = (await window.ethereum.request({
        method: 'eth_getBalance',
        params: [addr, 'latest'],
      })) as string;

      const wei = BigInt(balanceHex);
      setBalanceWei(wei);
      // Convert to ETH (18 decimals)
      const eth = Number(wei) / 1e18;
      setBalance(eth.toFixed(4));
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const refreshBalance = async () => {
    if (address) {
      await fetchBalance(address);
    }
  };

  const connect = async () => {
    if (typeof window === 'undefined') return;

    if (!window.ethereum) {
      alert('Please install MetaMask or a Web3 wallet to use this feature.');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);

    try {
      // Request account access
      const accounts = (await window.ethereum.request({
        method: 'eth_requestAccounts',
      })) as string[];

      if (accounts.length > 0) {
        setAddress(accounts[0]);

        // Get current chain ID
        const currentChainId = (await window.ethereum.request({
          method: 'eth_chainId',
        })) as string;
        setChainId(currentChainId);

        // Fetch balance
        await fetchBalance(accounts[0]);

        // Switch to Robinhood Chain if not on it
        if (currentChainId !== ROBINHOOD_CHAIN_ID) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: ROBINHOOD_CHAIN_ID }],
            });
          } catch (switchError: unknown) {
            const error = switchError as { code?: number };
            if (error.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: ROBINHOOD_CHAIN_ID,
                  chainName: ROBINHOOD_CHAIN_NAME,
                  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                  rpcUrls: [ROBINHOOD_RPC_URL],
                  blockExplorerUrls: [ROBINHOOD_EXPLORER_URL],
                }],
              });
            }
          }
          setChainId(ROBINHOOD_CHAIN_ID);
          await fetchBalance(accounts[0]);
        }
      }
    } catch (error: unknown) {
      const err = error as { code?: number; message?: string };
      if (err.code === 4001) {
        console.log('User rejected connection');
      } else {
        console.error('Error connecting:', error);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setAddress(null);
    setChainId(null);
    setBalance('0');
    setBalanceWei(BigInt(0));
  };

  // Listen for account changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.ethereum) return;

    const handleAccountsChanged = (...args: unknown[]) => {
      const accounts = args[0] as string[];
      if (accounts.length === 0) {
        disconnect();
      } else {
        setAddress(accounts[0]);
        fetchBalance(accounts[0]);
      }
    };

    const handleChainChanged = (...args: unknown[]) => {
      const newChainId = args[0] as string;
      setChainId(newChainId);
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum?.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnected: !!address,
        isConnecting,
        chainId,
        balance,
        balanceWei,
        connect,
        disconnect,
        shortAddress,
        refreshBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
