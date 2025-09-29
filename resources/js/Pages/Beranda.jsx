import Layout from "../Layouts/Layout";
import { User, GraduationCap } from "lucide-react";

export default function BerandaFull() {
    const gradient = `
        bg-gradient-to-r
        from-[#E52020]/90
        to-[#FBA518]/90
        text-white
    `

    return (
        <>
            {/* Hero */}
            <section className="bg-cover bg-center h-[500px] flex items-center justify-center relative">
                <img src={`assets/image/sd.png`} alt="" className="absolute inset-0 w-full h-full object-cover"/>
                <div className={`${gradient} absolute inset-0 z-0`}></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                        Selamat Datang di SDN 1 SALAWU
                    </h2>
                    <p className="text-white/90 mt-3 md:text-lg">
                        Mencetak Generasi Unggul, Berprestasi, dan Berkarakter
                    </p>
                </div>
            </section>

            {/* Tentang */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-extrabold mb-6 text-blue-700">Tentang Kami</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        SDN 1 Salawu adalah sekolah dasar yang berkomitmen untuk memberikan
                        pendidikan terbaik dengan lingkungan yang aman, kreatif, dan inspiratif.
                        Kami mendidik siswa agar memiliki karakter yang kuat, cerdas, dan siap
                        menghadapi tantangan masa depan.
                    </p>
                </div>
            </section>

            {/* Statistik */}
            <section className={`py-16 ${gradient} text-white`}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center px-6">
                    <div className="p-8 bg-white/20 rounded-xl shadow-lg backdrop-blur-md">
                        <GraduationCap className="mx-auto w-12 h-12 mb-3" />
                        <div className="text-5xl font-bold">10</div>
                        <div className="text-lg">Guru</div>
                    </div>
                    <div className="p-8 bg-white/20 rounded-xl shadow-lg backdrop-blur-md">
                        <User className="mx-auto w-12 h-12 mb-3" />
                        <div className="text-5xl font-bold">250</div>
                        <div className="text-lg">Siswa</div>
                    </div>
                </div>
            </section>

            {/* Galeri */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-extrabold mb-8 text-center text-green-600">Galeri</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {["1", "2", "3", "4", "5", "6"].map((g) => (
                            <div
                                key={g}
                                className="relative overflow-hidden rounded-lg shadow-lg group"
                            >
                                <img
                                    src={`/assets/image/galeri${g}.jpg`}
                                    alt={`Galeri ${g}`}
                                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-lg transition">
                                    Gambar {g}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
