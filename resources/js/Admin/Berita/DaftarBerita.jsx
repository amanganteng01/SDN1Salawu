import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahBerita from "./TambahBerita";
import EditBerita from "./EditBerita";
import GunakanWidthWindows from "../GunakanWidthWindows";
import { Plus, Eye, Edit, Trash2, MoreVertical } from "lucide-react";

// Menampilkan tabel daftar berita
export default function DaftarBerita({ berita }) {
    // Mengambil lebar window untuk responsive design
    const width = GunakanWidthWindows();
    
    // State untuk modal dan aksi
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedBerita, setSelectedBerita] = useState(null);
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
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Daftar Berita</h1>
                    <p className="text-gray-600 mt-1">Kelola berita dan informasi sekolah</p>
                </div>
                
                {/* Tombol Tambah Berita */}
                <button
                    onClick={() => setOpenTambah(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                >
                    <Plus className="w-4 h-4" />
                    Tambah Berita
                </button>
            </div>

            {/* Tabel Daftar Berita */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Judul Berita</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Tanggal</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {berita.length > 0 ? (
                                // Loop data berita
                                berita.map((item, i) => (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-600">{i + 1}</td>
                                        <td className="px-6 py-4">
                                            <div className="max-w-xs">
                                                {/* Judul berita */}
                                                <p className="text-sm font-medium text-slate-800 line-clamp-2">
                                                    {item.judul}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{item.tanggal}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center">
                                                {widthmd ? (
                                                    // Menu Aksi untuk tampilan mobile
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
                                                                        href={`/admin/show/berita/${item.id}`}
                                                                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                                    >
                                                                        <Eye className="w-4 h-4" />
                                                                        Detail
                                                                    </Link>
                                                                    {/* Tombol Edit */}
                                                                    <button
                                                                        onClick={() => {
                                                                            setSelectedBerita(item);
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
                                                                            if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
                                                                                router.delete(`/admin/hapus/berita/${item.id}`);
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
                                                    // Tombol Aksi untuk desktop
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            href={`/admin/show/berita/${item.id}`}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                            Detail
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedBerita(item);
                                                                setOpenEdit(true);
                                                            }}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
                                                                    router.delete(`/admin/hapus/berita/${item.id}`);
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
                                // Jika tidak ada barita
                                <tr>
                                    <td colSpan="4" className="px-6 py-8 text-center">
                                        <div className="text-slate-500">
                                            <p className="text-sm">Tidak ada data berita</p>
                                            <p className="text-xs mt-1">Klik "Tambah Berita" untuk menambahkan berita pertama</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Tambah Berita */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Berita">
                <TambahBerita onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Berita */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Berita">
                <EditBerita berita={selectedBerita} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}