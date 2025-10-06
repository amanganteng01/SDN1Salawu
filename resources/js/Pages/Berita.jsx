import { Link } from "@inertiajs/react"
import { Calendar, User, ChevronRight, Newspaper } from "lucide-react";

// Menampilkan daftar berita sekolah
export default function Berita({ berita }) {
    /**
     * Fungsi untuk memformat tanggal menjadi format Indonesia
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

    /**
     * Fungsi untuk memotong teks menjadi excerpt
     * @param {string} text - Teks yang akan dipotong
     * @param {number} maxLength - Panjang maksimal excerpt
     * @returns {string} Teks yang sudah dipotong
     */
    const potongTeks = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Berita Sekolah</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Informasi terbaru seputar kegiatan dan perkembangan SDN 1 Salawu
                    </p>
                </div>

                {/* Daftar Berita */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {berita.length > 0 ? (
                        berita.map((item) => (
                            <article
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group"
                            >
                                {/* Gambar Berita */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={`/storage/berita/${item.gambar}`}
                                        alt={item.judul}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Berita
                                        </div>
                                    </div>
                                </div>

                                {/* Konten Berita */}
                                <div className="p-6">
                                    {/* Meta Informasi */}
                                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatTanggal(item.tanggal)}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <User className="w-4 h-4" />
                                            <span>Admin</span>
                                        </div>
                                    </div>

                                    {/* Judul Berita */}
                                    <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {item.judul}
                                    </h2>

                                    {/* Isi Berita (Excerpt) */}
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {potongTeks(item.isi)}
                                    </p>

                                    {/* Tombol Baca Selengkapnya */}
                                    <Link
                                        href={`/berita/${item.id}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/btn"
                                    >
                                        Baca Selengkapnya
                                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        /* State Kosong */
                        <div className="col-span-3 text-center py-16">
                            <div className="bg-slate-50 rounded-xl p-12 border-2 border-dashed border-slate-200">
                                <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                                    Belum Ada Berita
                                </h3>
                                <p className="text-gray-400">
                                    Saat ini belum ada berita yang tersedia.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
