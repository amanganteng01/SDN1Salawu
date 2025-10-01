import { Link } from "@inertiajs/react";
import { Calendar, FileText, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditBerita from "./EditBerita";

export default function DetailBerita({ berita }) {
    // State untuk membuka/menutup modal edit
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-3xl mx-auto">
            {/* Judul Halaman */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Detail Berita</h1>
                <p className="text-gray-500 mt-2">Informasi lengkap tentang berita ini</p>
            </div>

            {/* Card detail berita */}
            <div className="bg-white rounded-2xl shadow p-8">
                <div className="flex flex-col gap-8">
                    {/* Menampilkan gambar berita, jika ada */}
                    {berita.gambar ? (
                        <img
                            src={`/storage/berita/${berita.gambar}`}
                            alt={berita.judul}
                            className="w-full h-64 object-cover rounded-xl border"
                        />
                    ) : (
                        // Jika tidak ada gambar
                        <div className="w-full h-64 flex items-center justify-center rounded-xl bg-gray-200 text-gray-500">
                            Tidak ada gambar
                        </div>
                    )}

                    {/* Informasi berita */}
                    <div className="space-y-5">
                        {/* Judul berita */}
                        <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Judul</h3>
                                <p className="text-xl font-semibold text-gray-800">{berita.judul}</p>
                            </div>
                        </div>

                        {/* Tanggal berita */}
                        <div className="flex items-start gap-3">
                            <Calendar className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Tanggal</h3>
                                <p className="text-lg text-gray-800">{berita.tanggal}</p>
                            </div>
                        </div>

                        {/* Isi berita */}
                        <div className="flex items-start gap-3">
                            <ImageIcon className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Isi Berita</h3>
                                <p className="text-gray-800">{berita.isi}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol aksi */}
            <div className="flex gap-4 mt-8 justify-center">
                {/* Tombol buka modal edit */}
                <button
                    onClick={() => setOpenEdit(true)}
                    className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Edit
                </button>
                {/* Tombol kembali ke daftar berita */}
                <Link
                    href="/admin/daftar/berita"
                    className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                >
                    Kembali
                </Link>
            </div>

            {/* Modal untuk edit berita */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Berita">
                <EditBerita berita={berita} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
