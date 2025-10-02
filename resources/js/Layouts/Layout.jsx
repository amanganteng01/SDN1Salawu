import { Link, router } from "@inertiajs/react"
import { Facebook, Instagram, Mail } from "lucide-react";

// Komponen utama Layout untuk membungkus seluruh halaman
// Menerima 'children' sebagai konten dinamis yang akan ditampilkan di bagian <main>
export default function Layout({children}){

    // Variabel className untuk ukuran tombol navigasi (responsive)
    const ukuranNavbtn =`
        hover:underline
        text-xs
        sm:text-sm
        md:text-base
        lg:text-lg
        xl:text-xl
        2xl:text-2xl
    `

    // Variabel className untuk background gradient (merah ke oranye)
    const gradient = `
        bg-gradient-to-r
        from-[#E52020]
        to-[#FBA518]
        text-white
    `

    // Variabel className untuk background utama dengan gradient transparan
    const gradientMain = `bg-gradient-to-r from-[#E52020]/30 to-[#FBA518]/30`;

    // Return tampilan layout (Header, Main, Footer)
    return (
        <>
            {/* Header */}
            <header className={`${gradient} shadow-md fixed w-full max-w-[1920px] top-0 z-50`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-extrabold">SDN 1 Salawu</h1>
                    <nav className="space-x-6 hidden md:flex">
                        <a href="#beranda" className={ukuranNavbtn}>Beranda</a>
                        <a href="#profil" className={ukuranNavbtn}>Profil</a>
                        <a href="#berita" className={ukuranNavbtn}>Berita</a>
                        <a href="#gurudansiswa" className={ukuranNavbtn}>Guru</a>
                        <a href="#galeri" className={ukuranNavbtn}>Galeri</a>
                        <a href="#eskul" className={ukuranNavbtn}>Ekstrakurikuler</a>
                        <a href="#kontak" className={ukuranNavbtn}>Kontak</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className={`${gradientMain} ml-0 mt-10 md:mt-11 min-h-screen`}>
                {children}
            </main>

            {/* Footer */}
            <footer className={`${gradient} mt-10`} id="kontak">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Info Sekolah */}
                    <div>
                        <h4 className="text-xl font-bold mb-3">SDN 1 Salawu</h4>
                        <p className="text-sm text-gray-100">
                            Jalan Raya Salawu No. 123, Salawu, Indonesia
                        </p>
                    </div>

                    {/* Navigasi Footer */}
                    <div>
                        <h4 className="text-xl font-bold mb-3">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#beranda" className="hover:underline">Beranda</a></li>
                            <li><a href="#profil" className="hover:underline">Profil</a></li>
                            <li><a href="#gurudansiswa" className="hover:underline">Guru</a></li>
                            <li><a href="#galeri" className="hover:underline">Galeri</a></li>
                            <li><a href="#kontak" className="hover:underline">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Kontak / Sosial Media */}
                    <div>
                        <h4 className="text-xl font-bold mb-3">Kontak</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-200"><Facebook /></a>
                            <a href="#" className="hover:text-gray-200"><Instagram /></a>
                            <a href="mailto:info@sdn1salawu.sch.id" className="hover:text-gray-200"><Mail /></a>
                        </div>
                    </div>

                </div>

                {/* Sub Footer (Hak cipta) */}
                <div className="bg-black/30 text-center text-sm py-4">
                    © {new Date().getFullYear()} SDN 1 Salawu. Semua Hak Dilindungi.
                </div>
            </footer>
        </>
    )
}
