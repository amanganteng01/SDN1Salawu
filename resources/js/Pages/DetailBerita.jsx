import { Link } from "@inertiajs/react";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";

// Menampilkan detail lengkap berita untuk public
export default function DetailBerita({ berita }) {
    // Format tanggal menjadi lebih readable
    const formatTanggal = (tanggal) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(tanggal).toLocaleDateString('id-ID', options);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Simple */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <Link 
                        href="/#berita"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* Article Card - Style seperti di homepage */}
                <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                    {/* Featured Image */}
                    {berita.gambar && (
                        <div className="relative">
                            <img
                                src={`/storage/berita/${berita.gambar}`}
                                alt={berita.judul}
                                className="w-full h-64 md:h-96 object-cover"
                            />
                        </div>
                    )}

                    {/* Article Content */}
                    <div className="p-6 md:p-8">
                        {/* Article Header */}
                        <header className="mb-6">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                                {berita.judul}
                            </h1>

                            {/* Meta Information - Style seperti card berita di homepage */}
                            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatTanggal(berita.tanggal)}</span>
                                </div>
                                
                                {berita.user && (
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>Oleh: {berita.user.name}</span>
                                    </div>
                                )}
                            </div>
                        </header>

                        {/* Article Body */}
                        <div className="prose max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {berita.isi.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 text-justify">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related News Section - Style seperti section berita di homepage */}
                <section className="mt-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Berita Lainnya</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div className="text-center py-8">
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            <p className="text-gray-600 mb-2">Ingin melihat berita lainnya?</p>
                            <Link 
                                href="/berita"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Pergi ke halaman berita
                                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}