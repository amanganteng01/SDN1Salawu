import { BookOpen, User, Target, Zap, Users, Star } from "lucide-react";

export default function TampilanGuruShowcase() {
    const guru = [
        {
            id: 1,
            nama: "Dr. Siti Aminah, M.Pd",
            nip: "196512101987032001",
            mapel: "Matematika",
            foto: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=300&h=300&fit=crop&crop=face",
            spesialisasi: "Matematika Realistik",
            tahun_pengalaman: 18,
            fun_fact: "Bisa menyelesaikan rubik 3x3 dalam 2 menit",
            quote: "Matematika itu menyenangkan!"
        },
        {
            id: 2,
            nama: "Budi Santoso, S.Pd",
            nip: "197803151998021001",
            mapel: "Ilmu Pengetahuan Alam",
            foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
            spesialisasi: "Eksperimen Sains",
            tahun_pengalaman: 12,
            fun_fact: "Memiliki laboratorium mini di rumah",
            quote: "Sains adalah petualangan!"
        },
        {
            id: 3,
            nama: "Dewi Lestari, S.Pd",
            nip: "198206202005042002",
            mapel: "Bahasa Indonesia",
            foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
            spesialisasi: "Literasi Digital",
            tahun_pengalaman: 9,
            fun_fact: "Sudah menulis 3 buku cerita anak",
            quote: "Membaca membuka dunia"
        },
        {
            id: 4,
            nama: "Rudi Hermawan, S.Pd",
            nip: "197512031997021001",
            mapel: "Pendidikan Jasmani",
            foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            spesialisasi: "Olahraga Tradisional",
            tahun_pengalaman: 16,
            fun_fact: "Mantan atlet sepak bola",
            quote: "Sehat itu mahal!"
        },
        {
            id: 5,
            nama: "Maya Sari, S.Pd",
            nip: "198909122010042002",
            mapel: "Ilmu Pengetahuan Sosial",
            foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
            spesialisasi: "Sejarah Lokal",
            tahun_pengalaman: 7,
            fun_fact: "Kolektor artefak sejarah",
            quote: "Belajar dari masa lalu"
        },
        {
            id: 6,
            nama: "Ahmad Fauzi, S.Pd",
            nip: "198304152006041001",
            mapel: "Pendidikan Agama Islam",
            foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            spesialisasi: "Tahfiz Quran",
            tahun_pengalaman: 10,
            fun_fact: "Hafal 3 juz Al-Quran",
            quote: "Akhlak adalah pondasi"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-[#E52020]/5 to-[#FBA518]/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#E52020] to-[#FBA518] bg-clip-text text-transparent">
                        Tim Pengajar Profesional
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Guru-guru berdedikasi dengan berbagai keahlian khusus
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guru.map((guru) => (
                        <div key={guru.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            {/* Foto Profil */}
                            <div className="relative">
                                <img
                                    src={guru.foto}
                                    alt={guru.nama}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="bg-gradient-to-r from-[#E52020] to-[#FBA518] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {guru.tahun_pengalaman} Tahun
                                    </div>
                                </div>
                            </div>

                            {/* Informasi */}
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <h3 className="font-bold text-gray-900 text-xl mb-2">{guru.nama}</h3>
                                    <div className="flex items-center justify-center text-gray-600 mb-3">
                                        <BookOpen className="w-4 h-4 mr-2 text-[#E52020]" />
                                        <span className="font-semibold">{guru.mapel}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-4">NIP: {guru.nip}</p>
                                </div>

                                {/* Spesialisasi */}
                                <div className="flex items-center justify-center mb-4">
                                    <Target className="w-4 h-4 mr-2 text-[#FBA518]" />
                                    <span className="text-sm font-semibold text-gray-700">{guru.spesialisasi}</span>
                                </div>

                                {/* Quote */}
                                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                    <p className="text-sm text-gray-600 text-center italic">
                                        "{guru.quote}"
                                    </p>
                                </div>

                                {/* Fun Fact */}
                                <div className="text-center">
                                    <span className="inline-block bg-gradient-to-r from-[#E52020]/10 to-[#FBA518]/10 text-[#E52020] px-3 py-1 rounded-full text-xs font-semibold">
                                        ✨ {guru.fun_fact}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
