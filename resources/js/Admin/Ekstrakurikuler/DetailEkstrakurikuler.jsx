import { Link } from "@inertiajs/react";
import { Users, User, Calendar, FileText } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditEkstrakurikuler from "./EditEkstrakurikuler";

export default function DetailEkstrakurikuler({ ekstrakurikuler }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Detail Ekstrakurikuler
                </h1>
                <p className="text-gray-500 mt-2">Informasi lengkap {ekstrakurikuler.nama}</p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Gambar */}
                    <div className="flex-shrink-0">
                        {ekstrakurikuler.gambar ? (
                            <img
                                src={`/storage/ekstrakurikuler/${ekstrakurikuler.gambar}`}
                                alt={ekstrakurikuler.nama}
                                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl border"
                            />
                        ) : (
                            <div className="w-40 h-40 flex items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                                Tidak ada gambar
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-5">
                        <div className="flex items-start gap-3">
                            <Users className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Nama</h3>
                                <p className="text-xl font-semibold text-gray-800">{ekstrakurikuler.nama}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <User className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Pembina</h3>
                                <p className="text-lg text-gray-800">{ekstrakurikuler.pembina}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Calendar className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Jadwal Latihan</h3>
                                <p className="text-lg text-gray-800">{ekstrakurikuler.jadwal_latihan}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Deskripsi</h3>
                                <p className="text-gray-700">{ekstrakurikuler.deskripsi}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol */}
            <div className="flex gap-4 mt-8 justify-center">
                <button
                    onClick={() => setOpenEdit(true)}
                    className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Edit
                </button>
                <Link
                    href="/admin/daftar/ekstrakurikuler"
                    className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                >
                    Kembali
                </Link>
            </div>

            {/* Modal Edit */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Ekstrakurikuler">
                <EditEkstrakurikuler ekstrakurikuler={ekstrakurikuler} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
