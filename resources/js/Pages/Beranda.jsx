import { User, GraduationCap, Icon } from "lucide-react";
import { useState, useEffect } from "react";
import GunakanWidthWindows from "../Admin/GunakanWidthWindows";
import { label } from "framer-motion/client";

export default function Beranda({ jumlahguru, jumlahsiswa, profil, berita, galeri, ekskul }) {
    // Mendapatkan lebar jendela browser
    const width = GunakanWidthWindows();
    const[ statusGaleriSlide, setstatusGaleriSlide ] = useState(0);
    // Status slide galeri
    // Status slide jumlah guru dan siswa
    const[ statusGurudanSiswaSlide, setstatusGurudanSiswaSlide ] = useState(0);

    useEffect(() => {
        if (width > 768) {
            if (statusGaleriSlide > 1) {
                setstatusGaleriSlide(0);
            }
        }else if (width > 640) {
            setstatusGurudanSiswaSlide(0);
            if (statusGaleriSlide > 2) {
                setstatusGaleriSlide(0);
            }
        }
    });

    // Fungsi untuk membagi array galeri menjadi beberapa bagian dengan ukuran tertentu
    const bagiArrayGaleri = (array, ukuran) => {
        return array.reduce((hasil, _, index) => (
            index % ukuran ? hasil : [...hasil, array.slice(index, index + ukuran)]
        ),[]
        )
    }

    // Fungsi untuk menampilkan jumlah guru dan siswa menjadi beberapa bagian dengan ukuran tertentu
    const bagiArrayGurudanSiswa = (array, ukuran) => {
        return array.reduce((hasil, _, index) => (
            index % ukuran ? hasil : [...hasil, array.slice(index, index + ukuran)]
        ),[])
    }

    // Membagi jumlah guru dan siswa menjadi beberapa bagian untuk ditampilkan dalam slide
    const jumlahGuruDanSiswaTerbagi = () => {
        const data = [
            { label: 'Guru', jumlah: jumlahguru, Icon: <GraduationCap className="mx-auto w-12 h-12 mb-3" /> },
            { label: 'Siswa', jumlah: jumlahsiswa, Icon: <User className="mx-auto w-12 h-12 mb-3" /> }
        ]

        if (width > 640) {
            return bagiArrayGurudanSiswa(data, 2);
        }else {
            return bagiArrayGurudanSiswa(data, 1);
        }
    }

    // Membagi galeri menjadi beberapa bagian untuk ditampilkan dalam slide
    const galeriTerbagi = () => {
        if(width > 768){
            return bagiArrayGaleri(galeri, 3);
        } else if(width > 640){
            return bagiArrayGaleri(galeri, 2);
        } else {
            return bagiArrayGaleri(galeri, 1);
        }
    }

    // Fungsi untuk mengubah slide ke kiri
    const slideSebelumnya = (status, setStatus, hasilBagi) => {
        setStatus(status === 0 ? hasilBagi - 1 : status - 1);
    }
    // Fungsi untuk mengubah slide ke kanan
    const slideSelanjutnya = (status, setStatus, hasilBagi) => {
        setStatus(status === hasilBagi - 1 ? 0 : status + 1);
    }

    // Fungsi untuk memulai slide pada indeks tertentu
    const mulaiSlide = (setStatus ,index) => [
        setStatus(index)
    ]


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
            <section className="bg-center h-[500px] flex items-center justify-center relative">
                <img src={`storage/foto/${profil.foto}`} alt="" className="absolute inset-0 w-full h-full object-cover"/>
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
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-extrabold mb-6 text-blue-700">Tentang Kami</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {profil.deskripsi}
                    </p>
                </div>
            </section>

            {/* Berita */}
            <section className="py-16 bg-white">
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
            <section className={`py-16 ${gradient} text-white relative`}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center px-6">
                    {jumlahGuruDanSiswaTerbagi()[statusGurudanSiswaSlide]?.map((item) => (
                        <>
                            <div className="p-8 bg-white/20 rounded-xl shadow-lg backdrop-blur-md" key={item}>
                                {item.Icon}
                                <div className="text-5xl font-bold">{item.jumlah}</div>
                                <div className="text-lg">{item.label}</div>
                            </div>
                        </>
                    ))}
                </div>
                <button onClick={() => slideSelanjutnya(statusGurudanSiswaSlide, setstatusGurudanSiswaSlide, jumlahGuruDanSiswaTerbagi().length)} className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full sm:hidden">❯</button>
                <button onClick={() => slideSebelumnya(statusGurudanSiswaSlide, setstatusGurudanSiswaSlide, jumlahGuruDanSiswaTerbagi().length)} className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full sm:hidden">❮</button>
            </section>

            {/* Galeri */}
            <section className="py-16 bg-white relative">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-extrabold mb-6 text-green-700">
                        Galeri
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galeriTerbagi()[statusGaleriSlide]?.map((item) => (
                            <div className="relative overflow-hidden rounded-lg shadow-lg group" key={item.id}>
                                {item.kategori === 'foto' ? (
                                    <>
                                        <img
                                            src={`storage/galeri/${item.file}`}
                                            alt={item.judul}
                                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </>
                                ):(
                                    <>
                                        <video controls className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110">
                                            <source src={`storage/galeri/${item.file}`} type="video/mp4" />
                                        </video>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <button onClick={() => slideSelanjutnya(statusGaleriSlide, setstatusGaleriSlide, galeriTerbagi().length)} className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">❯</button>
                    <button onClick={() => slideSebelumnya(statusGaleriSlide, setstatusGaleriSlide, galeriTerbagi().length)} className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">❮</button>
                </div>
                {/* Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                    {galeriTerbagi().map((_, i) => (
                        <button
                            key={i}
                            onClick={() => mulaiSlide(i)}
                            className={`w-3 h-3 rounded-full ${
                                i === statusGaleriSlide ? "bg-green-600" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Eskul */}
            <section className="py-16 bg-gray-50">
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
