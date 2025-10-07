import { User, Calendar } from "lucide-react";
import GunakanWidthWindows from "../Admin/GunakanWidthWindows";
import { useEffect, useState } from "react";

// Menampilkan daftar siswa
export default function Siswa({ siswa }) {
    const [widthmd, setWidthmd] = useState(false);
    // Mengambil lebar window untuk responsive design
    const width = GunakanWidthWindows();

    // Effect untuk mendeteksi ukuran layar
    useEffect(() => {
        setWidthmd(width < 1060);
    }, [width]);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Siswa</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Lihat siswa siswi SMAN 1 Pasirsalam saat ini
                    </p>
                </div>
            </div>
            {/* Tabel Daftar Siswa */}
            <div className="max-w-[1920px] p-20">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-100 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">No</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        {widthmd ? "Nama" : "Nama Siswa"}
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        {widthmd ? "JK" : "Jenis Kelamin"}
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        {widthmd ? "Masuk" : "Tahun Masuk"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {siswa.length > 0 ? (
                                    // Loop data siswa jika data siswa lebih dari 0
                                    siswa.map((item, i) => (
                                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-sm text-slate-600">{i + 1}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <User className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-slate-800">
                                                            {/* Panggil nama siswa */}
                                                            {item.nama_siswa}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {/* Paggil jenis Kelamin */}
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                    item.jenis_kelamin === "L"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-pink-100 text-pink-800"
                                                }`}>
                                                    {item.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}
                                                </span>
                                            </td>
                                            {/* Panggil tahun masuk */}
                                            <td className="px-6 py-4 text-sm text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-slate-400" />
                                                    {item.tahun_masuk}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    // Jika data siswa kosong
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center">
                                            <div className="text-slate-500">
                                                <Users className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                                                <p className="text-sm">Tidak ada data siswa</p>
                                                <p className="text-xs mt-1">Klik "Tambah Siswa" untuk menambahkan data pertama</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
