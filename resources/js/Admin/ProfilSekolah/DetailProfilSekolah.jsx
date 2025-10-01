import { Link } from "@inertiajs/react";
import { User, MapPin, Phone, Info } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditProfilSekolah from "./EditProfilSekolah";

export default function DetailProfilSekolah({ profil }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Detail Profil Sekolah</h1>
                <p className="text-gray-500 mt-2">{profil.nama_sekolah}</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    {profil.logo && (
                        <img src={`/storage/profil/${profil.logo}`} alt="Logo" className="w-28 h-28 object-cover" />
                    )}
                    {/* Foto */}
                    {profil.foto && (
                        <img src={`/storage/profil/${profil.foto}`} alt="Sekolah" className="w-60 h-40 object-cover rounded-lg" />
                    )}

                    <div className="space-y-4 text-left w-full">
                        <div className="flex items-start gap-3">
                            <User className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Kepala Sekolah</h3>
                                <p className="text-lg font-semibold">{profil.kepala_sekolah}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <MapPin className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Alamat</h3>
                                <p>{profil.alamat}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Phone className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Kontak</h3>
                                <p>{profil.kontak}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Info className="w-6 h-6 text-gray-600" />
                            <div>
                                <h3 className="text-sm text-gray-500">Visi & Misi</h3>
                                <p>{profil.visi_misi}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500">Tahun Berdiri</h3>
                            <p>{profil.tahun_berdiri}</p>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500">Deskripsi</h3>
                            <p>{profil.deskripsi}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-8 justify-center">
                <button
                    onClick={() => setOpenEdit(true)}
                    className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    Edit
                </button>
                <Link
                    href="/admin/daftar/profil"
                    className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                >
                    Kembali
                </Link>
            </div>

            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Profil">
                <EditProfilSekolah profil={profil} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
