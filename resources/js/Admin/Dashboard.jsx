import { Link, usePage } from "@inertiajs/react";

export default function Dashboard({jumlahguru, jumlahsiswa, jumlahekskul, jumlahberita, level}) {

    return (
        <div className="p-6">
            {/* Judul Dashboard */}
            <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>

            {/* Statistik Card - Menampilkan jumlah data penting */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Jumlah Guru */}
                <div className="bg-white p-4 shadow rounded-lg text-center">
                    <h2 className="text-lg font-semibold">Guru</h2>
                    <p className="text-3xl font-bold text-blue-600">{jumlahguru}</p>
                </div>
                {/* Jumlah Siswa */}
                <div className="bg-white p-4 shadow rounded-lg text-center">
                    <h2 className="text-lg font-semibold">Siswa</h2>
                    <p className="text-3xl font-bold text-green-600">{jumlahsiswa}</p>
                </div>
                {/* Jumlah Ekskul */}
                <div className="bg-white p-4 shadow rounded-lg text-center">
                    <h2 className="text-lg font-semibold">Ekskul</h2>
                    <p className="text-3xl font-bold text-purple-600">{jumlahekskul}</p>
                </div>
                {/* Jumlah Berita */}
                <div className="bg-white p-4 shadow rounded-lg text-center">
                    <h2 className="text-lg font-semibold">Berita</h2>
                    <p className="text-3xl font-bold text-red-600">{jumlahberita}</p>
                </div>
            </div>

            {/* Navigasi Cepat - Shortcut ke menu penting */}
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-xl font-bold mb-4">Navigasi Cepat</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Link ke halaman guru */}
                    <Link href="/admin/daftar/guru" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-center">
                        Kelola Guru
                    </Link>
                    {/* Link ke halaman siswa */}
                    <Link href="/admin/daftar/siswa" className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-center">
                        Kelola Siswa
                    </Link>
                    {/* Link ke halaman ekstrakurikuler */}
                    <Link href="/admin/daftar/ekstrakurikuler" className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-center">
                        Kelola Ekskul
                    </Link>
                    {/* Link ke halaman berita */}
                    <Link href="/admin/daftar/berita" className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-center">
                        Kelola Berita
                    </Link>
                    {/* Link ke halaman galeri */}
                    <Link href="/admin/daftar/galeri" className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg text-center">
                        Kelola Galeri
                    </Link>
                    {/* Link ke halaman profil sekolah */}
                    <Link href="/admin/daftar/profil/sekolah" className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg text-center">
                        Profil Sekolah
                    </Link>
                </div>
            </div>
        </div>
    );
}
