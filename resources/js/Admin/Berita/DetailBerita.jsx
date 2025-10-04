import { Link } from "@inertiajs/react";
import { Calendar, FileText, Image as ImageIcon, Edit2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditBerita from "./EditBerita";

/**
 * Komponen DetailBerita - Menampilkan detail lengkap sebuah berita
 * Fitur: View detail, Edit berita
 */
export default function DetailBerita({ berita }) {
    // State untuk modal edit
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Detail Berita</h1>
                    <p className="text-gray-600 mt-1">Informasi lengkap tentang berita</p>
                </div>
                
                {/* Tombol Aksi */}
                <div className="flex gap-3 w-full sm:w-auto">
                    <button
                        onClick={() => setOpenEdit(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                    >
                        <Edit2 className="w-4 h-4" />
                        Edit Berita
                    </button>

                    <Link
                        href="/admin/daftar/berita"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali
                    </Link>
                </div>
            </div>

            {/* Card Detail Berita */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Gambar Berita */}
                {berita.gambar ? (
                    <img
                        src={`/storage/berita/${berita.gambar}`}
                        alt={berita.judul}
                        className="w-full h-64 md:h-80 object-cover"
                    />
                ) : (
                    // Placeholder jika tidak ada gambar
                    <div className="w-full h-64 md:h-80 flex items-center justify-center bg-slate-100 text-slate-400">
                        <ImageIcon className="w-12 h-12" />
                        <span className="ml-2">Tidak ada gambar</span>
                    </div>
                )}

                {/* Konten Berita */}
                <div className="p-6 md:p-8">
                    <div className="space-y-6">
                        {/* Informasi Judul */}
                        <div className="flex items-start gap-4">
                            <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-sm font-semibold text-slate-500 mb-1">Judul Berita</h3>
                                <p className="text-xl font-bold text-slate-800">{berita.judul}</p>
                            </div>
                        </div>

                        {/* Informasi Tanggal */}
                        <div className="flex items-start gap-4">
                            <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-sm font-semibold text-slate-500 mb-1">Tanggal Publikasi</h3>
                                <p className="text-lg text-slate-700">{berita.tanggal}</p>
                            </div>
                        </div>

                        {/* Isi Berita */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-500 mb-3">Isi Berita</h3>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                                    {berita.isi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Edit Berita */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Berita">
                <EditBerita berita={berita} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}