import { Link, usePage } from "@inertiajs/react";
import { Menu } from "lucide-react";
import { useState } from "react";

// Daftar menu sidebar untuk admin
const menus = [
  { href: "/admin/beranda", label: "Dashboard" },
  { href: "/admin/daftar/user", label: "User" },
  { href: "/admin/daftar/guru", label: "Guru" },
  { href: "/admin/daftar/siswa", label: "Siswa" },
  { href: "/admin/daftar/ekstrakurikuler", label: "Ekstrakurikuler" },
  { href: "/admin/daftar/berita", label: "Berita" },
  { href: "/admin/daftar/galeri", label: "Galeri" },
  { href: "/admin/show/profil/sekolah", label: "Profil Sekolah" },
];

// Layout utama untuk halaman admin
export default function LayoutAdmin({ children }) {
  // Mengambil data user dari props Inertia
  const { props } = usePage();
  const user = props.auth?.user;

  // State untuk mengontrol buka/tutup sidebar di mobile
  const [sidebarOpen, setsidebarOpen] = useState(false);

  // Warna tema yang nyaman di mata (Soft Blue Theme)
  const headerBg = "bg-blue-800 text-white";
  const sidebarBg = "bg-blue-700 text-white";
  const mainBg = "bg-blue-50";
  const footerBg = "bg-blue-800 text-white";

  return (
    <div className="min-h-screen">
        {/* Header Section - Fixed di atas */}
        <header className={`${headerBg} fixed top-0 left-0 w-full z-50 h-16 flex items-center px-6 shadow-sm`}>
          <h1 className="text-xl md:text-2xl font-semibold flex-1">
            Admin SDN 1 Salawu
          </h1>

          {/* Tombol Login/Logout berdasarkan status user */}
          {user ? (
            <>
                <Link
                href="/logout"
                method="post"
                as="button"
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                Logout
                </Link>
                {/* Memunculkan Icon Burger Jika Sudah Login */}
                <button
                    className="md:hidden p-2 rounded hover:bg-blue-700 ml-3 transition-colors"
                    onClick={() => setsidebarOpen(!sidebarOpen)}
                >
                    <Menu></Menu>
                </button>
            </>
          ) : (
              <Link
                href="/login"
                className="hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                  Login
              </Link>
          )}

        </header>

        {/* Conditional rendering berdasarkan status login user */}
        {user ? (
            <>
                {/* Sidebar Navigation - Fixed di kiri */}
                <aside className={`
                  z-40 fixed top-16 left-0 w-64 h-full ${sidebarBg}
                  transform transition-transform duration-300 md:translate-x-0
                  ${sidebarOpen ? "translate-0" : "-translate-x-full"}
                  shadow-lg
                `}>
                    {/* Navigasi Menu */}
                    <nav className="mt-8 flex-1">
                      <ul className="flex flex-col gap-1 px-4">
                        {menus.map((menu, i) => (
                          <li key={i}>
                            <Link
                              href={menu.href}
                              className="block py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-blue-100 hover:text-white"
                            >
                              {menu.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* User Info Section di bagian bawah sidebar */}
                    <div className="p-4 border-t border-blue-600 mt-auto">
                      <div className="text-blue-200 text-sm">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-blue-300 text-xs">{user?.email}</p>
                      </div>
                    </div>
                </aside>

                {/* Overlay untuk mobile saat sidebar terbuka */}
                {sidebarOpen && (
                  <div
                    className="fixed inset-0 bg-black/30 bg-opacity-30 z-30 md:hidden"
                    onClick={() => setsidebarOpen(false)}
                  />
                )}

                {/* Main Content Area */}
                <main className={`${mainBg} ml-0 md:ml-64 mt-11 p-6 min-h-screen transition-all duration-300`}>
                    <div className="max-w-7xl mx-auto">
                      {children}
                    </div>
                </main>
            </>
        ):(
            /* Main Content untuk user belum login */
            <main className={`${mainBg} p-6 min-h-screen`}>
                <div className="max-w-4xl mx-auto">
                  {children}
                </div>
            </main>
        )}

      {/* Footer Section */}
      <footer className={`${footerBg} text-center py-4 ml-0 md:ml-64`}>
        <div className="text-blue-200">
          &copy; {new Date().getFullYear()} SDN 1 Salawu. Admin Panel.
        </div>
      </footer>
    </div>
  );
}
