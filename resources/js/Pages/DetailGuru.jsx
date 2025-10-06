import { Link } from "@inertiajs/react";
import { ArrowLeft, User, IdCard, BookOpen, Mail, Phone } from "lucide-react";

/**
 * Komponen DetailGuru - Menampilkan detail lengkap guru untuk public
 * Style disesuaikan dengan tampilan homepage
 */
export default function DetailGuru({ guru }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Simple */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <Link 
                        href="/#guru"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Daftar Guru
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* Guru Profile Card - Style seperti di homepage */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                    <div className="md:flex">
                        {/* Foto Guru */}
                        <div className="md:w-1/3 p-6 flex items-center justify-center">
                            <div className="relative">
                                <img
                                    src={`/storage/guru/${guru.foto}`}
                                    alt={guru.nama}
                                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-100 shadow-md"
                                />
                                <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Informasi Guru */}
                        <div className="md:w-2/3 p-6 md:p-8">
                            <div className="space-y-6">
                                {/* Nama Guru */}
                                <div className="flex items-start gap-4">
                                    <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-500 mb-1">Nama Lengkap</h3>
                                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">{guru.nama}</h1>
                                    </div>
                                </div>

                                {/* NIP */}
                                {guru.nip && (
                                    <div className="flex items-start gap-4">
                                        <IdCard className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-sm font-semibold text-slate-500 mb-1">NIP</h3>
                                            <p className="text-lg text-slate-700 font-mono">{guru.nip}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Mata Pelajaran */}
                                <div className="flex items-start gap-4">
                                    <BookOpen className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-500 mb-1">Mata Pelajaran</h3>
                                        <p className="text-lg text-slate-700 font-medium">{guru.mapel}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-slate-600 text-sm">
                                    Bergabung sejak {new Date(guru.created_at).getFullYear()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Guru Lainnya Section - Style seperti section di homepage */}
                <section className="mt-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Guru Lainnya</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div className="text-center py-8">
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            <p className="text-gray-600 mb-2">Ingin melihat guru lainnya?</p>
                            <Link 
                                href={`/guru`}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Kembali ke daftar guru
                                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}