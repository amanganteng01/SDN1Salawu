import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

const menus = [
  { href: "/admin/beranda", label: "Dashboard" },
  { href: "/admin/daftar/user", label: "User" },
  { href: "/admin/daftar/guru", label: "Guru" },
  { href: "/admin/daftar/siswa", label: "Siswa" },
  { href: "/admin/daftar/ekstrakurikuler", label: "Ekstrakurikuler" },
  { href: "/admin/daftar/berita", label: "Berita" },
  { href: "/admin/daftar/galeri", label: "Galeri" },
  { href: "/admin/daftar/profil/sekolah", label: "Profil Sekolah" },
];

export default function LayoutAdmin({ children }) {
  const { props } = usePage();
  const user = props.auth?.user;

  const [sidebarOpen, setsidebarOpen] = useState(false);

  const gradient = `bg-gradient-to-r from-[#E52020] to-[#FBA518] text-white`;
  const gradientMain = `bg-gradient-to-r from-[#E52020]/30 to-[#FBA518]/30`;

  return (
    <div>
        {/* Header atas */}
        <header className={`${gradient} fixed top-0 left-0 w-full z-200 h-16 flex items-center px-6 shadow-md`}>
        <h1 className="text-xl md:text-2xl font-extrabold flex-1">
          Admin SDN 1 Salawu
        </h1>
        {user ? (
            <Link
            href="/logout"
            method="post"
            as="button"
            className="hover:underline text-sm md:text-base"
            >
                Logout
            </Link>
        ) : (
            <Link
                href="/login"
                className="hover:underline text-sm md:text-base"
            >
                Login
            </Link>
        )}
        <button
            className="md:hidden p-2 rounded hover:bg-white/20 ml-3"
            onClick={() => setsidebarOpen(!sidebarOpen)}
        >
            ☰
        </button>
        </header>

        {user ? (
            <>
                {/* Sidebar kiri */}
                <aside className={`z-100 fixed top-11 left-0 w-64 h-full ${gradient} transform transition-transform duration-300 md:translate-x-0
                    ${sidebarOpen ? "translate-0" : "-translate-x-full"}
                `}>
                    {/* Menu */}
                    <nav className="mt-6 flex-1">
                    <ul className="flex flex-col gap-2 px-6 text-sm md:text-base">
                        {menus.map((menu, i) => (
                        <li key={i}>
                            <Link
                            href={menu.href}
                            className="block py-2 px-3 rounded hover:bg-white/20"
                            >
                            {menu.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </nav>
                </aside>

                {/* Main content */}
                <main
                    className={`${gradientMain} ml-0 md:ml-64 mt-11 p-6 min-h-screen`}
                >
                    {children}
                </main>
            </>
        ):(
            <>
                {/* Main content */}
                <main
                    className={`${gradientMain} p-6 min-h-screen`}
                >
                    {children}
                </main>
            </>
        )}

      {/* Footer */}
      <footer className={`${gradient} text-center py-4 ml-0 md:ml-64`}>
        <div className="text-xs sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} SDN 1 Salawu. Admin Panel.
        </div>
      </footer>
    </div>
  );
}
