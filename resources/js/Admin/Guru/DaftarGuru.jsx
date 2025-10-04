import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahGuru from "./TambahGuru";
import EditGuru from "./EditGuru";
import GunakanWidthWindows from "../GunakanWidthWindows";
import { Plus, Eye, Edit, Trash2, MoreVertical, User, BookOpen } from "lucide-react";

/**
 * Komponen DaftarGuru - Menampilkan tabel daftar guru
 * Fitur: Tambah, Edit, Hapus, Detail guru
 * Responsif untuk desktop dan mobile
 */
export default function DaftarGuru({ guru }) {
    // Mengambil lebar window untuk responsive design
    const width = GunakanWidthWindows();
    
    // State untuk modal dan aksi
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedGuru, setSelectedGuru] = useState(null);
    const [openAksi, setAksi] = useState(null);
    const [widthmd, setWidthmd] = useState(false);

    // Effect untuk mendeteksi ukuran layar
    useEffect(() => {
        setWidthmd(width < 1000);
    }, [width]);

    return (
        <div className="p-6">
            {/* Header Section dengan judul dan tombol tambah */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Daftar Guru</h1>
                    <p className="text-gray-600 mt-1">Kelola data guru dan staff pengajar</p>
                </div>
                
                {/* Tombol Tambah Guru */}
                <button
                    onClick={() => setOpenTambah(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                >
                    <Plus className="w-4 h-4" />
                    Tambah Guru
                </button>
            </div>

            {/* Tabel Daftar Guru */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Nama Guru</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Mata Pelajaran</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {guru.length > 0 ? (
                                // Loop data guru
                                guru.map((item, i) => (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-600">{i + 1}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {item.foto ? (
                                                    <img 
                                                        src={`/storage/guru/${item.foto}`} 
                                                        alt={item.nama}
                                                        className="w-10 h-10 object-cover rounded-full"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <User className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="text-sm font-medium text-slate-800">
                                                        {item.nama}
                                                    </p>
                                                    <p className="text-xs text-slate-500">{item.nip || "Tidak ada NIP"}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{item.mapel}</td>
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
                                                            <div className="absolute right-0 mt-1 w-40 rounded-lg shadow-lg border border-slate-200 bg-white z-50">
                                                                <div className="py-1">
                                                                    {/* Tombol Detail */}
                                                                    <Link
                                                                        href={`/admin/show/guru/${item.id}`}
                                                                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                                    >
                                                                        <Eye className="w-4 h-4" />
                                                                        Detail
                                                                    </Link>
                                                                    {/* Tombol Edit */}
                                                                    <button
                                                                        onClick={() => {
                                                                            setSelectedGuru(item);
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
                                                                            if (confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
                                                                                router.delete(`/admin/hapus/guru/${item.id}`);
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
                                                        <Link
                                                            href={`/admin/show/guru/${item.id}`}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                            Detail
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedGuru(item);
                                                                setOpenEdit(true);
                                                            }}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
                                                                    router.delete(`/admin/hapus/guru/${item.id}`);
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
                                /* State kosong - Tidak ada data guru */
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center">
                                        <div className="text-slate-500">
                                            <User className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                                            <p className="text-sm">Tidak ada data guru</p>
                                            <p className="text-xs mt-1">Klik "Tambah Guru" untuk menambahkan data pertama</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Tambah Guru */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Guru">
                <TambahGuru onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Guru */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Guru">
                <EditGuru guru={selectedGuru} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}