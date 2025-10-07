import { Link } from "@inertiajs/react";
import { User, MapPin, Phone, Info, Calendar, School, Edit2, ArrowLeft, Users, BookOpen, Award } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";
import EditProfilSekolah from "./EditProfilSekolah";

// Menampilkan detail lengkap profil sekolah
export default function DetailProfilSekolah({ profil }) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Profil Sekolah</h1>
                    <p className="text-gray-600 mt-1">Informasi lengkap {profil.nama_sekolah}</p>
                </div>

                <div className="flex gap-3 w-full lg:w-auto">
                    <button
                        onClick={() => setOpenEdit(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                    >
                        <Edit2 className="w-4 h-4" />
                        Edit Profil
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Profile Card */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Header Card dengan Logo */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                            <div className="flex items-center gap-4">
                                {profil.logo ? (
                                    <img
                                        src={`/storage/logo/${profil.logo}`}
                                        alt="Logo Sekolah"
                                        className="w-16 h-16 object-cover rounded-full border-2 border-white"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white">
                                        <School className="w-8 h-8 text-white" />
                                    </div>
                                )}
                                <div>
                                    <h2 className="text-xl font-bold">{profil.nama_sekolah}</h2>
                                    <p className="text-white/90">{profil.kepala_sekolah}</p>
                                    {profil.npsn && (
                                        <p className="text-white/80 text-sm">NPSN: {profil.npsn}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Informasi Detail */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <DetailItem icon={MapPin} label="Alamat" value={profil.alamat} />
                                <DetailItem icon={Phone} label="Kontak" value={profil.kontak} />
                                <DetailItem icon={Calendar} label="Tahun Berdiri" value={profil.tahun_berdiri} />
                                <DetailItem icon={User} label="Kepala Sekolah" value={profil.kepala_sekolah} />
                            </div>

                            {/* Deskripsi Sekolah */}
                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-600" />
                                    Deskripsi Sekolah
                                </h3>
                                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                    <p className="text-gray-600 leading-relaxed">
                                        {profil.deskripsi || "Deskripsi sekolah belum diisi"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Cards */}
                <div className="space-y-6">
                    {/* Visi Misi Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-blue-600" />
                            Visi & Misi
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-700 text-sm mb-2">Visi</h4>
                                <div className="bg-blue-50 rounded-lg p-3">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {profil.visi || "Visi sekolah belum diisi"}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700 text-sm mb-2">Misi</h4>
                                <div className="bg-green-50 rounded-lg p-3">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {profil.misi? profil.misi : "Misi sekolah belum diisi"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Photo Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <School className="w-5 h-5 text-blue-600" />
                            Foto Sekolah
                        </h3>
                        {profil.foto ? (
                            <img
                                src={`/storage/foto/${profil.foto}`}
                                alt="Sekolah"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        ) : (
                            <div className="w-full h-48 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400">
                                <School className="w-12 h-12 mb-2" />
                                <span className="text-sm">Tidak ada foto</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal Edit Profil Sekolah */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Profil Sekolah">
                <EditProfilSekolah profil={profil} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}

// Komponen helper untuk menampilkan item detail
function DetailItem({ icon: Icon, label, value }) {
    return (
        <div className="flex items-start gap-3">
            <Icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-medium text-gray-700 text-sm">{label}</h4>
                <p className="text-gray-600 mt-1">{value || `Data ${label.toLowerCase()} belum diisi`}</p>
            </div>
        </div>
    );
}
