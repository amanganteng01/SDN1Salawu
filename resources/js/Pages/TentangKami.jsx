import { MapPin, Phone, Mail, Calendar, Users, Award, BookOpen, Heart, Target, Eye } from "lucide-react";

/**
 * Komponen TentangKami - Menampilkan informasi lengkap tentang sekolah
 * Versi diperluas dari ProfilSekolah dengan penekanan pada "Tentang Kami"
 * Responsif untuk desktop dan mobile
 */
export default function TentangKami({ profil }) {
    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mengenal lebih dekat {profil.name_sekolah} - Sejarah, Visi, Misi, dan Komitmen kami dalam pendidikan
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                {/* Hero Section dengan Foto Sekolah */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
                    <div className="relative h-64 md:h-80">
                        <img
                            src={`/storage/foto/${profil.foto}`}
                            alt={profil.name_sekolah}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/30"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{profil.name_sekolah}</h2>
                            <p className="text-blue-100">Berkualitas, Berprestasi, Berkarakter</p>
                        </div>
                    </div>
                </div>

                {/* Grid Informasi Utama */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Informasi Dasar */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                Identitas Sekolah
                            </h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Nama Sekolah</h4>
                                        <p className="text-gray-600">{profil.name_sekolah}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <Award className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Kepala Sekolah</h4>
                                        <p className="text-gray-600">{profil.kepala_sekolah}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Alamat</h4>
                                        <p className="text-gray-600">{profil.alamat}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <Phone className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Kontak</h4>
                                        <p className="text-gray-600">{profil.kontak}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <Calendar className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">Tahun Berdiri</h4>
                                        <p className="text-gray-600">{profil.tahun_berdiri}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <Users className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-700">NPSN</h4>
                                        <p className="text-gray-600">{profil.npsn}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visi & Misi */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <Target className="w-5 h-5 text-blue-600 mr-2" />
                            Visi & Misi
                        </h3>
                        
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Visi
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {profil.visi_misi ? profil.visi_misi.split('Misi:')[0] : 'Visi sekolah belum tersedia.'}
                                </p>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                                    <Target className="w-4 h-4 mr-2" />
                                    Misi
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {profil.visi_misi && profil.visi_misi.includes('Misi:') 
                                        ? profil.visi_misi.split('Misi:')[1] 
                                        : 'Misi sekolah belum tersedia.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Deskripsi Sekolah - Diperluas untuk "Tentang Kami" */}
                <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Heart className="w-5 h-5 text-blue-600 mr-2" />
                        Mengenal {profil.name_sekolah}
                    </h3>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            {profil.deskripsi || 'Deskripsi sekolah sedang dalam proses pengembangan.'}
                        </p>
                        
                        {/* Tambahan konten untuk "Tentang Kami" */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-blue-50 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-800 mb-2">Sejarah Singkat</h4>
                                <p className="text-gray-600 text-sm">
                                    {profil.sejarah || `Berdiri sejak ${profil.tahun_berdiri}, ${profil.name_sekolah} telah berkontribusi dalam mencerdaskan kehidupan bangsa dan membentuk generasi yang berkarakter.`}
                                </p>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-4">
                                <h4 className="font-semibold text-green-800 mb-2">Nilai & Budaya</h4>
                                <p className="text-gray-600 text-sm">
                                    {profil.nilai_budaya || 'Kami mengedepankan nilai-nilai integritas, disiplin, kreativitas, dan kepedulian sosial dalam setiap aspek pendidikan.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pencapaian & Fasilitas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-600 rounded-xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-3 text-yellow-300" />
                            Pencapaian & Prestasi
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Award className="w-5 h-5 mr-3 text-yellow-300" />
                                <span>Sekolah Adiwiyata Tingkat Kecamatan</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-5 h-5 mr-3 text-yellow-300" />
                                <span>Juara 1 Lomba Pidato Bahasa Sunda</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-5 h-5 mr-3 text-yellow-300" />
                                <span>Sekolah Ramah Anak Terbaik 2023</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-600 rounded-xl p-6 text-white">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 mr-3" />
                            Fasilitas & Sarana
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <BookOpen className="w-5 h-5 mr-3" />
                                <span>Perpustakaan Digital</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-3" />
                                <span>Laboratorium Komputer</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-5 h-5 mr-3" />
                                <span>Lapangan Olahraga</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Komitmen Sekolah */}
                <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Komitmen Kami</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Pendidikan Berkualitas</h4>
                            <p className="text-gray-600 text-sm">Menyediakan pendidikan terbaik untuk mengembangkan potensi setiap siswa</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Heart className="w-6 h-6 text-green-600" />
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Lingkungan Nyaman</h4>
                            <p className="text-gray-600 text-sm">Menciptakan lingkungan belajar yang aman, nyaman, dan inspiratif</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Award className="w-6 h-6 text-purple-600" />
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Pengembangan Karakter</h4>
                            <p className="text-gray-600 text-sm">Membentuk siswa yang berkarakter kuat dan berakhlak mulia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}