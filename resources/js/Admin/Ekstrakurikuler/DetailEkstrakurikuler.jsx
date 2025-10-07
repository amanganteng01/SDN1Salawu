import { Link } from "@inertiajs/react";
import { Users, User, Calendar, FileText, Edit2, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditEkstrakurikuler from "./EditEkstrakurikuler";

// Menampilkan detail lengkap sebuah ekstrakurikuler
export default function DetailEkstrakurikuler({ ekstrakurikuler }) {
    // State untuk modal edit
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Detail Ekstrakurikuler</h1>
                    <p className="text-gray-600 mt-1">Informasi lengkap tentang {ekstrakurikuler.nama}</p>
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
                        href="/admin/daftar/ekstrakurikuler"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali
                    </Link>
                </div>
            </div>

            {/* Card Detail Ekstrakurikuler */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Gambar Ekstrakurikuler */}
                    <div className="md:w-1/3">
                        {ekstrakurikuler.gambar ? (
                            <img
                                src={`/storage/ekstrakurikuler/${ekstrakurikuler.gambar}`}
                                alt={ekstrakurikuler.nama}
                                className="w-full h-64 md:h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-64 md:h-full flex items-center justify-center bg-slate-100 text-slate-400">
                                <Users className="w-16 h-16" />
                            </div>
                        )}
                    </div>

                    {/* Informasi Ekstrakurikuler */}
                    <div className="md:w-2/3 p-6 md:p-8">
                        <div className="space-y-6">
                            {/* Nama Ekstrakurikuler */}
                            <div className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Nama Ekstrakurikuler</h3>
                                    <p className="text-xl font-bold text-slate-800">{ekstrakurikuler.nama}</p>
                                </div>
                            </div>

                            {/* Pembina */}
                            <div className="flex items-start gap-4">
                                <User className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Pembina</h3>
                                    <p className="text-lg text-slate-700">{ekstrakurikuler.pembina}</p>
                                </div>
                            </div>

                            {/* Jadwal Latihan */}
                            <div className="flex items-start gap-4">
                                <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Jadwal Latihan</h3>
                                    <p className="text-lg text-slate-700">{ekstrakurikuler.jadwal_latihan}</p>
                                </div>
                            </div>

                            {/* Deskripsi */}
                            <div className="flex items-start gap-4">
                                <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-slate-500 mb-1">Deskripsi</h3>
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                                            {ekstrakurikuler.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Edit Ekstrakurikuler */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Ekstrakurikuler">
                <EditEkstrakurikuler ekstrakurikuler={ekstrakurikuler} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
