import { Link } from "@inertiajs/react";
import { User, IdCard, BookOpen } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditGuru from "./EditGuru";

export default function DetailGuru({ guru }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <>
            <div className="max-w-3xl mx-auto">
                {/* Header halaman */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Detail Guru
                    </h1>
                    <p className="text-gray-500 mt-2">Profil lengkap {guru.nama}</p>
                </div>

                {/* Card info guru */}
                <div className="bg-white rounded-2xl shadow p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Foto */}
                        <div className="flex-shrink-0">
                            {guru.foto ? (
                                <img
                                    src={`/storage/guru/${guru.foto}`}
                                    alt={guru.nama}
                                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl border"
                                />
                            ) : (
                                <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                                    Tidak ada foto
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-5">
                            <div className="flex items-start gap-3">
                                <User className="w-6 h-6 text-gray-600" />
                                <div>
                                    <h3 className="text-sm text-gray-500">Nama Guru</h3>
                                    <p className="text-xl font-semibold text-gray-800">{guru.nama}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <IdCard className="w-6 h-6 text-gray-600" />
                                <div>
                                    <h3 className="text-sm text-gray-500">NIP</h3>
                                    <p className="text-lg text-gray-800">{guru.nip ?? "-"}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <BookOpen className="w-6 h-6 text-gray-600" />
                                <div>
                                    <h3 className="text-sm text-gray-500">Mata Pelajaran</h3>
                                    <p className="text-lg text-gray-800">{guru.mapel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tombol */}
                <div className="flex gap-4 mt-8 justify-center">
                    <button
                        onClick={() => { 
                            setOpenEdit(true);
                        }}
                        className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Edit
                    </button>
                    <Link
                        href="/admin/daftar/guru"
                        className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                    >
                        Kembali
                    </Link>
                </div>
                <Modal
                    isOpen={openEdit}
                    onClose={() => setOpenEdit(false)}
                    title="Edit Guru"
                >
                    <EditGuru guru={guru} onClose={() => setOpenEdit(false)} />
                </Modal>
            </div>
        </>
    );
}
