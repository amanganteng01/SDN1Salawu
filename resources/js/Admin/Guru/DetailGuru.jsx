import { Link } from "@inertiajs/react";
import { User, IdCard, BookOpen, Edit2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditGuru from "./EditGuru";

/**
 * Komponen DetailGuru - Menampilkan detail lengkap seorang guru
 * Fitur: View detail, Edit guru
 */
export default function DetailGuru({ guru }) {
    // State untuk modal edit
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Detail Guru</h1>
                    <p className="text-gray-600 mt-1">Profil lengkap {guru.nama}</p>
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
                        href="/admin/daftar/guru"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali
                    </Link>
                </div>
            </div>

            {/* Card Detail Guru */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Foto Guru */}
                    <div className="md:w-1/3 bg-slate-100 p-8 flex justify-center items-center">
                        {guru.foto ? (
                            <img
                                src={`/storage/guru/${guru.foto}`}
                                alt={guru.nama}
                                className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
                            />
                        ) : (
                            <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                <User className="w-16 h-16 text-blue-600" />
                            </div>
                        )}
                    </div>

                    {/* Informasi Guru */}
                    <div className="md:w-2/3 p-6 md:p-8">
                        <div className="space-y-6">
                            {/* Nama Guru */}
                            <div className="flex items-start gap-4">
                                <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Nama Guru</h3>
                                    <p className="text-xl font-bold text-slate-800">{guru.nama}</p>
                                </div>
                            </div>

                            {/* NIP */}
                            <div className="flex items-start gap-4">
                                <IdCard className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">NIP</h3>
                                    <p className="text-lg text-slate-700">{guru.nip || "-"}</p>
                                </div>
                            </div>

                            {/* Mata Pelajaran */}
                            <div className="flex items-start gap-4">
                                <BookOpen className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Mata Pelajaran</h3>
                                    <p className="text-lg text-slate-700">{guru.mapel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Edit Guru */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Guru">
                <EditGuru guru={guru} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}