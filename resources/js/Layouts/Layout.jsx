import { Link, router } from "@inertiajs/react"
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Layout({children}){

    const ukuranNavbtn =`
        hover:underline
        text-xs
        sm:text-sm
        md:text-base
        lg:text-lg
        xl:text-xl
        2xl:text-2xlA
    `

    const gradient = `
        bg-gradient-to-r
        from-[#E52020]
        to-[#FBA518]
        text-white
    `

    return (
        <>
            {/* Header */}
            <header className={`${gradient} shadow-md fixed w-full max-w-[1920px] top-0 z-50`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-extrabold">SDN 1 Salawu</h1>
                    <nav className="space-x-6 hidden md:flex">
                        <a href="" className={ukuranNavbtn}>Beranda</a>
                        <a href="" className={ukuranNavbtn}>Profil</a>
                        <a href="" className={ukuranNavbtn}>Guru</a>
                        <a href="" className={ukuranNavbtn}>Galeri</a>
                        <a href="" className={ukuranNavbtn}>Kontak</a>
                    </nav>
                </div>
            </header>

            <main className="
                flex flex-col
                gap-1 mt-10
                sm:gap-2 sm:mt-11
                md:gap-3 md:mt-11
                lg:gap-4 lg:mt-11
                xl:gap-5 xl:mt-11
                2xl:gap-6 2xl:mt-11
            " style={{ backgroundColor: "#FAF6E9" }}>{children}</main>

            {/* Footer */}
            <footer className={`${gradient} mt-10`}>
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-3">SDN 1 Salawu</h4>
                        <p className="text-sm text-gray-100">
                            Jalan Raya Salawu No. 123, Salawu, Indonesia
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h4 className="text-xl font-bold mb-3">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="" className="hover:underline">Beranda</a></li>
                            <li><a href="" className="hover:underline">Profil</a></li>
                            <li><a href="" className="hover:underline">Guru</a></li>
                            <li><a href="" className="hover:underline">Galeri</a></li>
                            <li><a href="" className="hover:underline">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Sosial */}
                    <div>
                        <h4 className="text-xl font-bold mb-3">Ikuti Kami</h4>
                        <div className="flex gap-4">
                            <a href=""><Facebook /></a>
                            <a href=""><Instagram /></a>
                            <a href=""><Mail /></a>
                        </div>
                    </div>
                </div>

                {/* Sub Footer */}
                <div className="bg-black/30 text-center text-sm py-4">
                    © {new Date().getFullYear()} SDN 1 Salawu. Semua Hak Dilindungi.
                </div>
            </footer>
        </>
    )
}
