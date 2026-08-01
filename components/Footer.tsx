export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 px-6 py-8">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Klanko
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a
            href="https://x.com/klankofun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-200 transition"
          >
            X
          </a>
          <a
            href="https://github.com/golputin/goonabe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-200 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
