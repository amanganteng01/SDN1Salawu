import { Award, Users, Calendar, Clock, MapPin } from "lucide-react";

/**
 * Komponen Ekstrakurikuler - Menampilkan program ekstrakurikuler sekolah
 * Responsif untuk desktop dan mobile
 */
export default function Ekstrakurikuler({ ekskul }) {
    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ekstrakurikuler</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Berbagai program pengembangan bakat dan minat siswa di luar jam pelajaran
                    </p>
                </div>

                {/* Grid Ekstrakurikuler */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {ekskul.length > 0 ? (
                        ekskul.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 group"
                            >
                                {/* Header dengan Gambar */}
                                <div className="relative">
                                    <img
                                        src={`/storage/ekstrakurikuler/${item.gambar}`}
                                        alt={item.name}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-6">
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center text-white/90 text-sm">
                                            <Award className="w-4 h-4 mr-1" />
                                            <span>Ekstrakurikuler</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Informasi Detail */}
                                <div className="p-6">
                                    {/* Deskripsi */}
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {item.deskripsi}
                                    </p>

                                    {/* Informasi Pembina dan Jadwal */}
                                    <div className="space-y-3">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Users className="w-4 h-4 mr-3 text-blue-600" />
                                            <div>
                                                <span className="font-medium">Pembina:</span>
                                                <span className="ml-2">{item.pembina}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 mr-3 text-green-600" />
                                            <div>
                                                <span className="font-medium">Jadwal:</span>
                                                <span className="ml-2">{item.jadwal_latihan}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-3 text-red-600" />
                                            <div>
                                                <span className="font-medium">Lokasi:</span>
                                                <span className="ml-2">Area Sekolah</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        /* State Kosong */
                        <div className="col-span-2 text-center py-16">
                            <div className="bg-slate-50 rounded-xl p-12 border-2 border-dashed border-slate-200">
                                <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                                    Program Belum Tersedia
                                </h3>
                                <p className="text-gray-400">
                                    Informasi ekstrakurikuler akan segera diupdate.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Tambahan */}
                {ekskul.length > 0 && (
                    <div className="mt-16 bg-slate-50 rounded-xl p-8 border border-slate-200">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                Manfaat Mengikuti Ekstrakurikuler
                            </h3>
                            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h4 className="font-semibold text-gray-800 mb-2">Pengembangan Sosial</h4>
                                <p className="text-gray-600 text-sm">
                                    Meningkatkan kemampuan berinteraksi dan bekerja sama dalam tim
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                                <h4 className="font-semibold text-gray-800 mb-2">Bakat & Minat</h4>
                                <p className="text-gray-600 text-sm">
                                    Mengembangkan potensi dan bakat siswa di luar akademik
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                                <h4 className="font-semibold text-gray-800 mb-2">Manajemen Waktu</h4>
                                <p className="text-gray-600 text-sm">
                                    Belajar mengatur waktu antara akademik dan kegiatan non-akademik
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
