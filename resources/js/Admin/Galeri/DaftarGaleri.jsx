import { Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import TambahGaleri from "./TambahGaleri";
import EditGaleri from "./EditGaleri";
import GunakanWidthWindows from "../GunakanWidthWindows";
import { Plus, Eye, Edit, Trash2, MoreVertical, Image, Video } from "lucide-react";

// Menampilkan tabel daftar galeri foto dan video
export default function DaftarGaleri({ galeri }) {
    // Mengambil lebar window untuk responsive design
    const width = GunakanWidthWindows();

    // State untuk modal dan aksi
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedGaleri, setSelectedGaleri] = useState(null);
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
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Daftar Galeri</h1>
                    <p className="text-gray-600 mt-1">Kelola galeri foto dan video sekolah</p>
                </div>

                {/* Tombol Tambah Galeri */}
                <button
                    onClick={() => setOpenTambah(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                >
                    <Plus className="w-4 h-4" />
                    Tambah Galeri
                </button>
            </div>

            {/* Tabel Daftar Galeri */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-100 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">No</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Judul</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Kategori</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Tanggal Upload</th>
                                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {galeri.length > 0 ? (
                                // Loop data galeri
                                galeri.map((item, i) => (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-600">{i + 1}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {item.kategori === "foto" ? (
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <Image className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                ) : (
                                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                        <Video className="w-5 h-5 text-purple-600" />
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="text-sm font-medium text-slate-800">
                                                        {item.judul}
                                                    </p>
                                                    <p className="text-xs text-slate-500 line-clamp-1">
                                                        {item.keterangan}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                                                item.kategori === "foto"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-purple-100 text-purple-800"
                                            }`}>
                                                {item.kategori === "foto" ? (
                                                    <Image className="w-3 h-3 mr-1" />
                                                ) : (
                                                    <Video className="w-3 h-3 mr-1" />
                                                )}
                                                {item.kategori}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{item.tanggal}</td>
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
                                                                        href={`/admin/show/galeri/${item.id}`}
                                                                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                                    >
                                                                        <Eye className="w-4 h-4" />
                                                                        Detail
                                                                    </Link>
                                                                    {/* Tombol Edit */}
                                                                    <button
                                                                        onClick={() => {
                                                                            setSelectedGaleri(item);
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
                                                                            if (confirm("Apakah Anda yakin ingin menghapus galeri ini?")) {
                                                                                router.delete(`/admin/hapus/galeri/${item.id}`);
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
                                                            href={`/admin/show/galeri/${item.id}`}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                            Detail
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedGaleri(item);
                                                                setOpenEdit(true);
                                                            }}
                                                            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (confirm("Apakah Anda yakin ingin menghapus galeri ini?")) {
                                                                    router.delete(`/admin/hapus/galeri/${item.id}`);
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
                                /* State kosong - Tidak ada data galeri */
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center">
                                        <div className="text-slate-500">
                                            <Image className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                                            <p className="text-sm">Tidak ada data galeri</p>
                                            <p className="text-xs mt-1">Klik "Tambah Galeri" untuk menambahkan data pertama</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Tambah Galeri */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Galeri">
                <TambahGaleri onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Galeri */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Galeri">
                <EditGaleri galeri={selectedGaleri} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
