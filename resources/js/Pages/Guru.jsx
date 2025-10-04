import { User, GraduationCap, Mail, Phone } from "lucide-react";

/**
 * Komponen Guru - Menampilkan daftar guru dan staff pengajar
 * Responsif untuk desktop dan mobile
 */
export default function Guru({ guru }) {
    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Guru & Staff</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Kenali tenaga pendidik profesional yang membimbing siswa-siswi SDN 1 Salawu
                    </p>
                </div>

                {/* Grid Guru */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {guru.length > 0 ? (
                        guru.map((guru) => (
                            <div 
                                key={guru.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group text-center"
                            >
                                {/* Foto Guru */}
                                <div className="relative pt-6 px-6">
                                    <div className="relative inline-block">
                                        {guru.foto ? (
                                            <img
                                                src={`/storage/guru/${guru.foto}`}
                                                alt={guru.name}
                                                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-32 h-32 bg-blue-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                <User className="w-12 h-12 text-blue-600" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Informasi Guru */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                                        {guru.name}
                                    </h3>
                                    
                                    {guru.nip && (
                                        <p className="text-sm text-gray-600 mb-2">
                                            NIP: {guru.nip}
                                        </p>
                                    )}
                                    
                                    <div className="flex items-center justify-center text-sm text-blue-600 mb-3">
                                        <GraduationCap className="w-4 h-4 mr-1" />
                                        <span>{guru.mapei}</span>
                                    </div>

                                    {/* Badge Status */}
                                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Aktif Mengajar
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        /* State Kosong */
                        <div className="col-span-full text-center py-16">
                            <div className="bg-slate-50 rounded-xl p-12 border-2 border-dashed border-slate-200">
                                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                                    Data Guru Belum Tersedia
                                </h3>
                                <p className="text-gray-400">
                                    Informasi tentang guru akan segera diupdate.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Statistik Section */}
                {guru.length > 0 && (
                    <div className="mt-16 bg-blue-600 rounded-xl p-8 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">{guru.length}</div>
                                <div className="text-blue-100">Total Guru</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">
                                    {guru.filter(g => g.mapei && g.mapei.includes('Matematika')).length}
                                </div>
                                <div className="text-blue-100">Guru Matematika</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">
                                    {guru.filter(g => g.mapei && g.mapei.includes('Bahasa')).length}
                                </div>
                                <div className="text-blue-100">Guru Bahasa</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}