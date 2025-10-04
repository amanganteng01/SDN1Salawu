import { Link, usePage } from "@inertiajs/react";
import { Users, User, Award, Newspaper, Image, School, TrendingUp, Users2, BookOpen, Activity } from "lucide-react";

/**
 * Komponen Dashboard - Menampilkan statistik dan visualisasi data sekolah
 * Berisi cards statistik, grafik distribusi siswa, dan partisipasi ekskul
 * Responsif untuk desktop dan mobile
 */
export default function Dashboard({ jumlahguru, jumlahsiswa, jumlahekskul, jumlahberita, level }) {
    
    // Data statistik untuk cards utama
    const stats = [
        { 
            icon: User, 
            label: 'Guru', 
            value: jumlahguru, 
            color: 'bg-blue-500',
        },
        { 
            icon: Users, 
            label: 'Siswa', 
            value: jumlahsiswa, 
            color: 'bg-green-500',
        },
        { 
            icon: Award, 
            label: 'Ekstrakurikuler', 
            value: jumlahekskul, 
            color: 'bg-purple-500',
        },
        { 
            icon: Newspaper, 
            label: 'Berita', 
            value: jumlahberita, 
            color: 'bg-orange-500'
        }
    ];

    return (
        <div className="p-6">
            {/* Header Section dengan judul dan deskripsi */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {level === 'Admin' ? 'Dashboard Admin' : 'Dashboard Officer'}
                    </h1>
                    <p className="text-gray-600 mt-1">Visualisasi data dan statistik sekolah</p>
                </div>
            </div>

            {/* Grid Cards Statistik */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                            {/* Icon dengan background berwarna */}
                            <div className={`${stat.color} p-2 rounded-lg`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        {/* Nilai statistik */}
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        {/* Label statistik */}
                        <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}