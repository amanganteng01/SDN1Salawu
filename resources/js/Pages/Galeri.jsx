import { useState } from "react";
import { Images, Video, Calendar, Filter, Play, X } from "lucide-react";

/**
 * Komponen Galeri - Menampilkan galeri foto dan video sekolah
 * Dengan filter kategori dan lightbox preview
 */
export default function Galeri({ galeri }) {
    // State untuk filter kategori
    const [kategoriAktif, setKategoriAktif] = useState('semua');

    // State untuk lightbox
    const [lightboxTerbuka, setLightboxTerbuka] = useState(false);
    const [itemAktif, setItemAktif] = useState(null);

    /**
     * FUNGSI 1: Filter galeri berdasarkan kategori
     * - Jika kategori 'semua', tampilkan semua item
     * - Jika kategori spesifik, filter item berdasarkan kategori
     */
    const galeriTersaring = kategoriAktif === 'semua'
        ? galeri
        : galeri.filter(item => item.kategori === kategoriAktif);

    /**
     * FUNGSI 2: Buka lightbox untuk melihat detail item
     * @param {object} item - Item galeri yang dipilih user
     */
    const bukaLightbox = (item) => {
        console.log('Membuka lightbox untuk:', item); // Debug log
        setItemAktif(item);
        setLightboxTerbuka(true);
    };

    /**
     * FUNGSI 3: Tutup lightbox
     */
    const tutupLightbox = () => {
        setLightboxTerbuka(false);
        setItemAktif(null);
    };

    /**
     * FUNGSI 4: Format tanggal menjadi bahasa Indonesia
     * @param {string} dateString - Tanggal dari database (format: YYYY-MM-DD)
     * @returns {string} Tanggal format Indonesia (contoh: "15 Januari 2024")
     */
    const formatTanggal = (dateString) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    /**
     * FUNGSI 5: Navigasi ke item berikutnya di lightbox
     */
    const itemBerikutnya = () => {
        const indexSekarang = galeriTersaring.findIndex(item => item.id === itemAktif.id);
        const indexBerikutnya = (indexSekarang + 1) % galeriTersaring.length;
        setItemAktif(galeriTersaring[indexBerikutnya]);
    };

    /**
     * FUNGSI 6: Navigasi ke item sebelumnya di lightbox
     */
    const itemSebelumnya = () => {
        const indexSekarang = galeriTersaring.findIndex(item => item.id === itemAktif.id);
        const indexSebelumnya = indexSekarang === 0 ? galeriTersaring.length - 1 : indexSekarang - 1;
        setItemAktif(galeriTersaring[indexSebelumnya]);
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galeri Sekolah</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Dokumentasi kegiatan dan momen berharga di sekolah kami
                    </p>
                </div>

                {/* Filter Kategori */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                        onClick={() => setKategoriAktif('semua')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${
                            kategoriAktif === 'semua'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 border border-slate-200 hover:bg-slate-50'
                        }`}
                    >
                        <Filter className="w-4 h-4 inline mr-2" />
                        Semua
                    </button>
                    <button
                        onClick={() => setKategoriAktif('foto')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${
                            kategoriAktif === 'foto'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 border border-slate-200 hover:bg-slate-50'
                        }`}
                    >
                        <Images className="w-4 h-4 inline mr-2" />
                        Foto
                    </button>
                    <button
                        onClick={() => setKategoriAktif('video')}
                        className={`px-6 py-2 rounded-full font-medium transition-colors ${
                            kategoriAktif === 'video'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 border border-slate-200 hover:bg-slate-50'
                        }`}
                    >
                        <Video className="w-4 h-4 inline mr-2" />
                        Video
                    </button>
                </div>

                {/* Grid Galeri */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galeriTersaring.length > 0 ? (
                        galeriTersaring.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group cursor-pointer"
                                onClick={() => bukaLightbox(item)}
                            >
                                {/* Thumbnail */}
                                <div className="relative overflow-hidden">
                                    {item.kategori === 'foto' ? (
                                        // TAMPILAN FOTO
                                        <div className="relative">
                                            <img
                                                src={`/storage/galeri/${item.file}`}
                                                alt={item.judul}
                                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    // Fallback jika gambar error
                                                    e.target.src = '/placeholder-image.jpg';
                                                    e.target.alt = 'Gambar tidak tersedia';
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                <Images className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </div>
                                    ) : (
                                        // TAMPILAN VIDEO
                                        <div className="relative">
                                            <video className="w-full h-64 object-cover">
                                                <source src={`/storage/galeri/${item.file}`} type="video/mp4" />
                                                Browser tidak mendukung video.
                                            </video>
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                                <div className="bg-white/20 rounded-full p-4 backdrop-blur-sm">
                                                    <Play className="w-8 h-8 text-white fill-current" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Informasi Galeri */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                        {item.judul}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {item.keterangan}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatTanggal(item.tanggal)}</span>
                                        </div>
                                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            item.kategori === 'foto'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-purple-100 text-purple-800'
                                        }`}>
                                            {item.kategori === 'foto' ? 'Foto' : 'Video'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        /* State Kosong */
                        <div className="col-span-3 text-center py-16">
                            <div className="bg-slate-50 rounded-xl p-12 border-2 border-dashed border-slate-200">
                                <Images className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                                    Tidak Ada Konten
                                </h3>
                                <p className="text-gray-400">
                                    {kategoriAktif === 'semua'
                                        ? 'Belum ada galeri yang tersedia.'
                                        : `Tidak ada ${kategoriAktif} dalam galeri.`
                                    }
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* LIGHTBOX MODAL - DIPERBAIKI */}
                {lightboxTerbuka && itemAktif && (
                    <div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={tutupLightbox} // Tutup ketika klik di background
                    >
                        <div 
                            className="relative max-w-4xl w-full max-h-full"
                            onClick={(e) => e.stopPropagation()} // Mencegah tutup ketika klik di konten
                        >
                            {/* Tombol Tutup */}
                            <button
                                onClick={tutupLightbox}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Konten Lightbox */}
                            <div className="bg-white rounded-lg overflow-hidden max-h-[80vh]">
                                {itemAktif.kategori === 'foto' ? (
                                    <img
                                        src={`/storage/galeri/${itemAktif.file}`}
                                        alt={itemAktif.judul}
                                        className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                                        onError={(e) => {
                                            e.target.src = '/placeholder-image.jpg';
                                            e.target.alt = 'Gambar tidak dapat dimuat';
                                        }}
                                    />
                                ) : (
                                    <video
                                        controls
                                        autoPlay
                                        className="w-full h-auto max-h-[60vh] mx-auto"
                                    >
                                        <source src={`/storage/galeri/${itemAktif.file}`} type="video/mp4" />
                                        Browser tidak mendukung pemutar video.
                                    </video>
                                )}

                                {/* Caption Lightbox */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {itemAktif.judul}
                                    </h3>
                                    {itemAktif.keterangan && (
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {itemAktif.keterangan}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatTanggal(itemAktif.tanggal)}</span>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full font-medium ${
                                            itemAktif.kategori === 'foto'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-purple-100 text-purple-800'
                                        }`}>
                                            {itemAktif.kategori === 'foto' ? 'Foto' : 'Video'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}