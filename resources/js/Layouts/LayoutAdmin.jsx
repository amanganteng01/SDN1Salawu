import { Link, usePage } from "@inertiajs/react";

const menus = [
    { href: "/admin/beranda", label: "Dashboard" },
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

    const gradient = `
        bg-gradient-to-r
        from-[#E52020]
        to-[#FBA518]
        text-white
    `;

    const gradientmain = `
        bg-gradient-to-r
        from-[#E52020]/30
        to-[#FBA518]/30
    `;

    return (
        <>
            {/* Header */}
            <header className={`${gradient} shadow-md fixed w-full top-0 z-50`}>
                <div className="max-w-7xl mx-auto px-6 py-3">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl md:text-2xl font-extrabold">
                            Admin SDN 1 Salawu
                        </h1>

                        <div>
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
                        </div>
                    </div>

                    {/* Navbar di bawah judul */}
                    <nav className="mt-2">
                        <ul className="flex border-t gap-4 text-sm md:text-base">
                            {menus.map((menu, i) => (
                                <li key={i}>
                                    <Link
                                        href={menu.href}
                                        className="hover:underline border-r border-white/40 pr-4"
                                    >
                                        {menu.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>


            {/* Main */}
            <main
                className={`${gradientmain} max-w-[1920px] mx-auto px-6 py-6 min-h-screen mt-15 md:mt-17`}
            >
                {children}
            </main>

            {/* Footer */}
            <footer className={`${gradient} text-center py-4`}>
                <div className="text-xs sm:text-sm md:text-base">
                    &copy; {new Date().getFullYear()} SDN 1 Salawu. Admin Panel.
                </div>
            </footer>
        </>
    );
}
