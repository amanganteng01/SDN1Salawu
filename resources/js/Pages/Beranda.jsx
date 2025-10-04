import { Link } from "@inertiajs/react"
import { User, GraduationCap, ChevronLeft, ChevronRight, BookOpen, Award, Newspaper, Images, Play } from "lucide-react";
import { useState, useEffect } from "react";
import GunakanWidthWindows from "../Admin/GunakanWidthWindows";

/**
 * Komponen Beranda - Halaman utama website SDN 1 Salawu
 * Menampilkan hero section, tentang sekolah, berita, statistik, galeri, dan ekstrakurikuler
 * Responsif untuk desktop dan mobile dengan sistem slide
 */
export default function Beranda({ jumlahguru, jumlahsiswa, profil, berita, galeri, ekskul }) {
    // Mendapatkan lebar jendela browser untuk responsive design
    const width = GunakanWidthWindows();
    
    // State untuk mengontrol slide galeri
    const [statusGaleriSlide, setstatusGaleriSlide] = useState(0);
    
    // State untuk mengontrol slide jumlah guru dan siswa
    const [statusGurudanSiswaSlide, setstatusGurudanSiswaSlide] = useState(0);

    /**
     * Effect untuk reset slide ketika ukuran layar berubah
     */
    useEffect(() => {
        if (width > 768 && statusGaleriSlide > 1) {
            setstatusGaleriSlide(0);
        } else if (width > 640 && statusGaleriSlide > 2) {
            setstatusGaleriSlide(0);
        }
    }, [width, statusGaleriSlide]);

    /**
     * Fungsi untuk membagi array menjadi beberapa bagian dengan ukuran tertentu
     */
    const bagiArray = (array, ukuran) => {
        return array.reduce((hasil, _, index) => (
            index % ukuran ? hasil : [...hasil, array.slice(index, index + ukuran)]
        ), []);
    }

    /**
     * Fungsi untuk mengelompokkan data guru dan siswa berdasarkan breakpoint
     */
    const jumlahGuruDanSiswaTerbagi = () => {
        const data = [
            { 
                label: 'Guru', 
                jumlah: jumlahguru, 
                Icon: GraduationCap,
                description: 'Tenaga Pendidik Profesional',
                color: 'bg-blue-500'
            },
            { 
                label: 'Siswa', 
                jumlah: jumlahsiswa, 
                Icon: User,
                description: 'Siswa Aktif',
                color: 'bg-green-500'
            }
        ];

        return width > 640 ? bagiArray(data, 2) : bagiArray(data, 1);
    }

    /**
     * Fungsi untuk membagi galeri berdasarkan breakpoint
     */
    const galeriTerbagi = () => {
        if (width > 768) return bagiArray(galeri, 3);
        if (width > 640) return bagiArray(galeri, 2);
        return bagiArray(galeri, 1);
    }

    /**
     * Fungsi untuk navigasi slide
     */
    const slideSebelumnya = (status, setStatus, totalSlide) => {
        setStatus(status === 0 ? totalSlide - 1 : status - 1);
    }

    const slideSelanjutnya = (status, setStatus, totalSlide) => {
        setStatus(status === totalSlide - 1 ? 0 : status + 1);
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <img 
                    src={`/storage/foto/${profil.foto}`} 
                    alt="SDN 1 Salawu" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/50 z-0"></div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                        SDN 1 Salawu
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-8">
                        Mencetak Generasi Unggul, Berprestasi, dan Berkarakter
                    </p>
                </div>
            </section>

            {/* Tentang Sekolah */}
            <section id="profil" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200">
                        <p className="text-gray-700 leading-relaxed text-lg text-center">
                            {profil.deskripsi}
                        </p>
                    </div>
                </div>
            </section>

            {/* Statistik */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Statistik Sekolah</h2>
                        <div className="w-20 h-1 bg-blue-300 mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {jumlahGuruDanSiswaTerbagi()[statusGurudanSiswaSlide]?.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white/20 rounded-xl p-8 backdrop-blur-sm border border-white/30 shadow-lg text-center"
                            >
                                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <item.Icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold mb-2">{item.jumlah}</div>
                                <div className="text-xl font-semibold mb-1">{item.label}</div>
                                <div className="text-blue-100 text-sm">{item.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation untuk mobile */}
                    {width < 640 && (
                        <>
                            <button 
                                onClick={() => slideSebelumnya(statusGurudanSiswaSlide, setstatusGurudanSiswaSlide, jumlahGuruDanSiswaTerbagi().length)} 
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm border border-white/30"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={() => slideSelanjutnya(statusGurudanSiswaSlide, setstatusGurudanSiswaSlide, jumlahGuruDanSiswaTerbagi().length)} 
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full backdrop-blur-sm border border-white/30"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>
            </section>

            {/* Berita */}
            <section id="berita" className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Berita Terbaru</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {berita.length > 0 ? (
                            berita.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200"
                                >
                                    <img
                                        src={`/storage/berita/${item.gambar}`}
                                        alt={item.judul}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                            {item.judul}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {item.deskripsi}
                                        </p>
                                        <Link
                                            href={`/berita/${item.id}`}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                                        >
                                            Baca Selengkapnya
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12">
                                <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">Tidak ada berita terbaru</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Galeri */}
            <section id="galeri" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Sekolah</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {galeriTerbagi()[statusGaleriSlide]?.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-lg transition-all duration-300"
                                >
                                    {item.kategori === 'foto' ? (
                                        <img
                                            src={`/storage/galeri/${item.file}`}
                                            alt={item.judul}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative">
                                            <video 
                                                className="w-full h-64 object-cover"
                                            >
                                                <source src={`/storage/galeri/${item.file}`} type="video/mp4" />
                                            </video>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Play className="w-12 h-12 text-white opacity-70" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                                            <Images className="w-8 h-8 mx-auto mb-2" />
                                            <p className="font-semibold">{item.judul}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation buttons */}
                        <button 
                            onClick={() => slideSebelumnya(statusGaleriSlide, setstatusGaleriSlide, galeriTerbagi().length)} 
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => slideSelanjutnya(statusGaleriSlide, setstatusGaleriSlide, galeriTerbagi().length)} 
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-lg border border-slate-200 hover:bg-white transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Slide indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {galeriTerbagi().map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setstatusGaleriSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === statusGaleriSlide ? "bg-blue-600" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Ekstrakurikuler */}
            <section id="ekskul" className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ekstrakurikuler</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ekskul.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={`/storage/ekstrakurikuler/${item.gambar}`}
                                        alt={item.nama}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <Award className="w-6 h-6 text-white mr-2" />
                                        <span className="text-white font-semibold">{item.nama}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.nama}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {item.deskripsi}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}