import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahSiswa from "./TambahSiswa";
import EditSiswa from "./EditSiswa";
import GunakanWidthWindows from "../GunakanWidthWindows";
import { Plus, Edit, Trash2, MoreVertical, Users, User, Calendar } from "lucide-react";

// Menampilkan tabel daftar siswa
export default function DaftarSiswa({ siswa }) {
    // Mengambil lebar window untuk responsive design
    const width = GunakanWidthWindows();

    // State untuk modal dan aksi
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedSiswa, setSelectedSiswa] = useState(null);
    const [openAksi, setAksi] = useState(null);
    const [widthmd, setWidthmd] = useState(false);

    // Effect untuk mendeteksi ukuran layar
    useEffect(() => {
        setWidthmd(width < 1060);
    }, [width]);

    return (
        <div className="p-6">
            {/* Header Section dengan judul dan tombol tambah */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Daftar Siswa</h1>
                    <p className="text-gray-600 mt-1">Kelola data siswa sekolah</p>
                </div>

                {/* Tombol Tambah Siswa */}
                <button
                    onClick={() => setOpenTambah(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                >
                    <Plus className="w-4 h-4" />
                    Tambah Siswa
                </button>
            </div>

            {/* Tabel Daftar Siswa */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                    {widthmd ? "Nama" : "Nama Siswa"}
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">NISN</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                    {widthmd ? "JK" : "Jenis Kelamin"}
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                    {widthmd ? "Masuk" : "Tahun Masuk"}
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {siswa.length > 0 ? (
                                // Loop data siswa
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
                                                        {item.nama_siswa}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{item.nisn}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                item.jenis_kelamin === "L"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-pink-100 text-pink-800"
                                            }`}>
                                                {item.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                {item.tahun_masuk}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center">
                                                {widthmd ? (
                                                    /* Menu Aksi untuk Mobile - Dropdown */
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setAksi(openAksi === item.id ? null : item.id)}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-300 hover:border-slate-400 transition-colors"
                                                        >
                                                            <MoreVertical className="w-4 h-4 text-slate-600" />
                                                        </button>

                                                        {/* Dropdown Menu */}
                                                        {openAksi === item.id && (
                                                            <div className="absolute right-0 mt-1 w-32 rounded-lg shadow-lg border border-slate-200 bg-white z-50">
                                                                <div className="py-1">
                                                                    {/* Tombol Edit */}
                                                                    <button
                                                                        onClick={() => {
                                                                            setSelectedSiswa(item);
                                                                            setOpenEdit(true);
                                                                            setAksi(null);
                                                                        }}
                                                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                                                                    >
                                                                        <Edit className="w-4 h-4" />
                                                                        Edit
                                                                    </button>
                                                                    {/* Tombol Hapus */}
                                                                    <button
                                                                        onClick={() => {
                                                                            if (confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
                                                                                router.delete(`/admin/hapus/siswa/${item.id}`);
                                                                            }
                                                                        }}
                                                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                                    >
                                                                        <Trash2 className="w-4 h-4" />
                                                                        Hapus
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    /* Tombol Aksi untuk Desktop - Horizontal */
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedSiswa(item);
                                                                setOpenEdit(true);
                                                            }}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
                                                                    router.delete(`/admin/hapus/siswa/${item.id}`);
                                                                }
                                                            }}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                            Hapus
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                /* State kosong - Tidak ada data siswa */
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

            {/* Modal Tambah Siswa */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Siswa">
                <TambahSiswa onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Siswa */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Siswa">
                <EditSiswa siswa={selectedSiswa} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
