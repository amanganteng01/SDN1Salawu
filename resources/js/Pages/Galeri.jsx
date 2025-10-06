import { useState } from "react";
import { Images, Video, Calendar, Filter, Play } from "lucide-react";

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
     * Fungsi untuk memfilter galeri berdasarkan kategori
     */
    const galeriTersaring = kategoriAktif === 'semua'
        ? galeri
        : galeri.filter(item => item.kategori === kategoriAktif);

    /**
     * Fungsi untuk membuka lightbox
     * @param {object} item - Item galeri yang dipilih
     */
    const bukaLightbox = (item) => {
        setItemAktif(item);
        setLightboxTerbuka(true);
    };

    /**
     * Fungsi untuk memformat tanggal
     * @param {string} dateString - String tanggal dari database
     * @returns {string} Tanggal yang sudah diformat
     */
    const formatTanggal = (dateString) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galeri Sekolah</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Dokumentasi kegiatan dan momen berharga di SDN 1 Salawu
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
                                        <img
                                            src={`/storage/galeri/${item.file}`}
                                            alt={item.judul}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ) : (
                                        <>
                                            <video controls className="w-full h-64 object-cover">
                                                <source src={`/storage/galeri/${item.file}`} type="video/mp4" />
                                            </video>
                                        </>
                                    )}
                                </div>

                                {/* Informasi Galeri */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">
                                        {item.judul}
                                    </h3>
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

                {/* Lightbox Modal */}
                {lightboxTerbuka && itemAktif && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                        <div className="relative max-w-4xl max-h-full">
                            {/* Tombol Tutup */}
                            <button
                                onClick={() => setLightboxTerbuka(false)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Konten Lightbox */}
                            <div className="bg-white rounded-lg overflow-hidden">
                                {itemAktif.kategori === 'foto' ? (
                                    <img
                                        src={`/storage/galeri/${itemAktif.file}`}
                                        alt={itemAktif.judul}
                                        className="w-full h-auto max-h-[80vh] object-contain"
                                    />
                                ) : (
                                    <video
                                        controls
                                        className="w-full h-auto max-h-[80vh]"
                                        autoPlay
                                    >
                                        <source src={`/storage/galeri/${itemAktif.file}`} type="video/mp4" />
                                    </video>
                                )}

                                {/* Caption */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {itemAktif.judul}
                                    </h3>
                                    {itemAktif.keterangan && (
                                        <p className="text-gray-600 mb-2">
                                            {itemAktif.keterangan}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatTanggal(itemAktif.tanggal)}</span>
                                        </div>
                                        <span className="capitalize">{itemAktif.kategori}</span>
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
