export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-slate-800 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Branding */}
        <div className="text-slate-300 text-sm">
          © {new Date().getFullYear()} AI Tools Catalog · Built with Next.js
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-slate-300">
          <a
            href="https://github.com/aswath030304"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aswath-n"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:aswath030304@gmail.com"
            className="hover:text-purple-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
