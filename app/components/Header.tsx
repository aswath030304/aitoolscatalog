"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/40 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO / BRAND */}
        <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          AICatalog
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition relative
                  ${isActive ? "text-purple-400" : "text-slate-300 hover:text-purple-400"}
                `}
              >
                {item.name}

                {/* Neon underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
