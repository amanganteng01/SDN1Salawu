import { Link } from "@inertiajs/react";
import { useState } from "react";
import Modal from "../Modal";
import EditGaleri from "./EditGaleri";
import { Edit2, ArrowLeft, Calendar, FileText, Image, Video, Tag } from "lucide-react";

/**
 * Komponen DetailGaleri - Menampilkan detail lengkap sebuah galeri
 * Fitur: View detail, Edit galeri
 */
export default function DetailGaleri({ galeri }) {
    // State untuk modal edit
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Detail Galeri</h1>
                    <p className="text-gray-600 mt-1">Informasi lengkap tentang {galeri.judul}</p>
                </div>
                
                {/* Tombol Aksi */}
                <div className="flex gap-3 w-full sm:w-auto">
                    <button
                        onClick={() => setOpenEdit(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                    >
                        <Edit2 className="w-4 h-4" />
                        Edit
                    </button>

                    <Link
                        href="/admin/daftar/galeri"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali
                    </Link>
                </div>
            </div>

            {/* Card Detail Galeri */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Preview File */}
                <div className="bg-slate-100 p-8 flex justify-center">
                    {galeri.kategori === "foto" ? (
                        <img
                            src={`/storage/galeri/${galeri.file}`}
                            alt={galeri.judul}
                            className="max-w-full max-h-96 object-contain rounded-lg shadow-md"
                        />
                    ) : (
                        <video 
                            controls 
                            className="max-w-full max-h-96 rounded-lg shadow-md"
                        >
                            <source src={`/storage/galeri/${galeri.file}`} type="video/mp4" />
                            Browser Anda tidak mendukung pemutar video.
                        </video>
                    )}
                </div>

                {/* Informasi Galeri */}
                <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Kolom Kiri - Informasi Dasar */}
                        <div className="space-y-4">
                            {/* Judul */}
                            <div className="flex items-start gap-4">
                                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Judul</h3>
                                    <p className="text-lg font-semibold text-slate-800">{galeri.judul}</p>
                                </div>
                            </div>

                            {/* Kategori */}
                            <div className="flex items-start gap-4">
                                <Tag className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Kategori</h3>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                                        galeri.kategori === "foto" 
                                            ? "bg-blue-100 text-blue-800" 
                                            : "bg-purple-100 text-purple-800"
                                    }`}>
                                        {galeri.kategori === "foto" ? (
                                            <Image className="w-3 h-3 mr-1" />
                                        ) : (
                                            <Video className="w-3 h-3 mr-1" />
                                        )}
                                        {galeri.kategori}
                                    </span>
                                </div>
                            </div>

                            {/* Tanggal */}
                            <div className="flex items-start gap-4">
                                <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Tanggal Upload</h3>
                                    <p className="text-slate-700">{galeri.tanggal}</p>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan - Keterangan */}
                        <div>
                            <div className="flex items-start gap-4">
                                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Keterangan</h3>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-slate-700 leading-relaxed">
                                            {galeri.keterangan || "Tidak ada keterangan"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Edit Galeri */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Galeri">
                <EditGaleri galeri={galeri} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}