import { Link, router } from "@inertiajs/react"
import { Menu, X } from "lucide-react";
import { useState } from "react";

//Layout utama untuk halaman publik website SDN 1 Salawu
export default function Layout({ children }) {
    // State untuk mengontrol buka/tutup menu mobile
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Variabel className untuk background gradient (biru theme)
    const gradient = `
        bg-gradient-to-r
        from-blue-600
        to-blue-700
        text-white
    `;

    // Variabel className untuk background utama
    const mainBg = `bg-blue-50`;

    // Daftar menu navigasi
    const menuItems = [
        { href: "/", label: "Beranda" },
        { href: "/berita", label: "Berita" },
        { href: "/guru", label: "Guru" },
        { href: "/galeri", label: "Galeri" },
        { href: "/ekstrakurikuler", label: "Ekstrakurikuler" },
        { href: "/tentang/kami", label: "Tentang Kami" },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className={`${gradient} shadow-lg fixed w-full top-0 z-50`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo dan Nama Sekolah */}
                        <div className="flex items-center">
                            <h1 className="text-xl md:text-2xl font-bold">SDN 1 Salawu</h1>
                        </div>

                        {/* Navigation Desktop */}
                        <nav className="hidden md:flex space-x-8">
                            {menuItems.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.href} 
                                    className="text-white hover:text-blue-100 font-medium transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Tombol Menu Mobile */}
                        <button 
                            className="md:hidden p-2 rounded-lg hover:bg-blue-500 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-blue-500 pt-4">
                            <nav className="flex flex-col space-y-4">
                                {menuItems.map((item, index) => (
                                    <a 
                                        key={index}
                                        href={item.href} 
                                        className="text-white hover:text-blue-100 font-medium py-2 transition-colors duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className={`${mainBg} pt-11 min-h-screen`}>
                {children}
            </main>

            {/* Footer */}
            <footer className={`${gradient}`}>
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Info Sekolah */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">SDN 1 Salawu</h4>
                        <div className="space-y-2 text-blue-100">
                            <p className="text-sm">
                                Jalan Raya Salawu No. 123
                            </p>
                            <p className="text-sm">
                                Kecamatan Salawu, Kabupaten Tasikmalaya
                            </p>
                            <p className="text-sm">
                                Jawa Barat, Indonesia 46475
                            </p>
                        </div>
                    </div>

                    {/* Navigasi Footer */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold">Navigasi Cepat</h4>
                        <ul className="space-y-2 text-blue-100">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href} 
                                        className="text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sub Footer */}
                <div className="border-t border-blue-500">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="text-center text-blue-100 text-sm">
                            © {new Date().getFullYear()} SDN 1 Salawu. Semua Hak Dilindungi Undang-Undang.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}