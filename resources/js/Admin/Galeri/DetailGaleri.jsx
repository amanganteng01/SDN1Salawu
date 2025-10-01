import { Link } from "@inertiajs/react";
import { useState } from "react";
import Modal from "../Modal";
import EditGaleri from "./EditGaleri";

export default function DetailGaleri({ galeri }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Detail Galeri</h1>
                <p className="text-gray-500">Informasi lengkap {galeri.judul}</p>
            </div>

            {/* Card */}
            <div className="bg-white shadow rounded-xl p-6">
                <div className="space-y-5">
                    <div>
                        <h3 className="text-sm text-gray-500">Judul</h3>
                        <p className="text-lg font-semibold">{galeri.judul}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Keterangan</h3>
                        <p className="text-gray-700">{galeri.keterangan}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Kategori</h3>
                        <p className="capitalize">{galeri.kategori}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Tanggal</h3>
                        <p>{galeri.tanggal}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">File</h3>
                        {galeri.kategori === "foto" ? (
                            <img src={`/storage/galeri/${galeri.file}`} alt={galeri.judul} className="rounded-lg w-72" />
                        ) : (
                            <video controls className="rounded-lg w-72">
                                <source src={`/storage/galeri/${galeri.file}`} type="video/mp4" />
                                Browser anda tidak mendukung video.
                            </video>
                        )}
                    </div>
                </div>
            </div>

            {/* Tombol */}
            <div className="flex gap-3 justify-center mt-6">
                <button
                    onClick={() => setOpenEdit(true)}
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                    Edit
                </button>
                <Link
                    href="/admin/daftar/galeri"
                    className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Kembali
                </Link>
            </div>

            {/* Modal Edit */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Galeri">
                <EditGaleri galeri={galeri} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
