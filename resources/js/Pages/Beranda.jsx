import Layout from "../Layouts/Layout";
import { User, GraduationCap } from "lucide-react";

export default function Beranda({ jumlahguru, jumlahsiswa, profil, berita, galeri, ekskul }) {
    const gradienthiro = `
        bg-gradient-to-r
        from-[#E52020]/20
        to-[#FBA518]/20
        text-white
    `

    const gradient = `
        bg-gradient-to-r
        from-[#E52020]/70
        to-[#FBA518]/70
        text-white
    `

    return (
        <>
            {/* Hero */}
            <section id="beranda" className="bg-center h-[500px] flex items-center justify-center relative">
                <img src={`assets/image/sd.png`} alt="" className="absolute inset-0 w-full h-full object-cover"/>
                <div className={`${gradienthiro} absolute inset-0 z-0`}></div>
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
            <section id="profil" className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-extrabold mb-6 text-blue-700">Tentang Kami</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {profil.deskripsi}
                    </p>
                </div>
            </section>

            {/* Berita */}
            <section id="berita" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-extrabold mb-8 text-center text-red-600">
                Berita Terbaru
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {berita.length > 0 ? (
                    <>
                        {berita.map((item) => (
                            <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                            >
                            <img
                                src={`/storage/berita/${item.gambar}`}
                                alt={item.judul}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="text-lg font-bold mb-2 text-gray-800">{berita.judul}</h4>
                                <p className="text-gray-600 text-sm">{berita.deskripsi}</p>
                                <a
                                href="#"
                                className="text-blue-600 text-sm mt-3 inline-block hover:underline"
                                >
                                Baca Selengkapnya →
                                </a>
                            </div>
                            </div>
                        ))}
                    </>
                ):(
                    <div className="col-span-3 text-center text-gray-500">Tidak ada berita terbaru</div>
                )}
                </div>
            </div>
            </section>

            {/* Guru dan Siswa */}
            <section id="gurudansiswa" className={`py-16 ${gradient} text-white`}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center px-6">
                    <div className="p-8 bg-white/20 rounded-xl shadow-lg backdrop-blur-md">
                        <GraduationCap className="mx-auto w-12 h-12 mb-3" />
                        <div className="text-5xl font-bold">{jumlahguru}</div>
                        <div className="text-lg">Guru</div>
                    </div>
                    <div className="p-8 bg-white/20 rounded-xl shadow-lg backdrop-blur-md">
                        <User className="mx-auto w-12 h-12 mb-3" />
                        <div className="text-5xl font-bold">{jumlahsiswa}</div>
                        <div className="text-lg">Siswa</div>
                    </div>
                </div>
            </section>

            {/* Galeri */}
            <section id="galeri" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h3 className="text-3xl font-extrabold mb-8 text-center text-green-600">Galeri</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galeri.map((galerii) => (
                            <div
                                key={galerii.id}
                                className="relative overflow-hidden rounded-lg shadow-lg group"
                            >
                                { galerii.kategori === "foto" ? (
                                    <>
                                        <img
                                            src={`/storage/galeri/${galerii.file}`}
                                            alt={galerii.judul}
                                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </>
                                ):(
                                    <>
                                    <video controls className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" >
                                        <source src={`/storage/galeri/${galerii.file}`} type="video/mp4"/>
                                    </video>
                                    </>
                                )}
                                {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-lg transition">
                                    Gambar {galerii.judul}
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eskul */}
            <section id="eskul" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-extrabold mb-6 text-purple-700">
                Ekstrakurikuler
                </h3>

                {/* Foto Eskul */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {ekskul.map((eskul) => (
                    <div
                    key={eskul.id}
                    className="relative overflow-hidden rounded-lg shadow-lg group"
                    >
                    <img
                        src={`/storage/ekstrakurikuler/${eskul.gambar}`}
                        alt={eskul.nama}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold text-lg transition">
                        {eskul.nama}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>

        </>
    );
}
