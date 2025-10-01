import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahProfilSekolah from "./TambahProfilSekolah";
import EditProfilSekolah from "./EditProfilSekolah";
import GunakanWidthWindows from "../GunakanWidthWindows";

export default function DaftarProfilSekolah({ profil }) {
    const width = GunakanWidthWindows();
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedProfil, setSelectedProfil] = useState(null);
    const [openAksi, setAksi] = useState(null);
    const [widthmd, setWidthmd] = useState(false);

    useEffect(() => {
        setWidthmd(width < 1000);
    }, [width]);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Profil Sekolah</h1>
                <button
                    onClick={() => setOpenTambah(true)}
                    className="border bg-gradient-to-r from-[#E52020] to-[#FBA518] text-white hover:from-[#E52020]/70 hover:to-[#FBA518]/70 transition rounded-md md:rounded-lg px-3 py-2"
                >
                    Tambah Profil
                </button>
            </div>

            <div className="overflow-x-auto relative">
                <table className="min-w-full bg-white rounded-lg shadow-lg text-sm md:text-base">
                    <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">No</th>
                            <th className="px-4 py-3 text-left">Nama Sekolah</th>
                            <th className="px-4 py-3 text-left">Kepala Sekolah</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profil.length > 0 ? (
                            profil.map((item, i) => (
                                <tr key={item.id} className="border-b last:border-none hover:bg-gray-50 transition">
                                    <td className="px-4 py-3">{i + 1}</td>
                                    <td className="px-4 py-3">{item.nama_sekolah}</td>
                                    <td className="px-4 py-3">{item.kepala_sekolah}</td>
                                    <td className="px-4 py-3 text-center space-x-2">
                                        <Link
                                            href={`/admin/show/profil/sekolah/${item.id}`}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                        >
                                            Detail
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setSelectedProfil(item);
                                                setOpenEdit(true);
                                            }}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (confirm("Yakin ingin menghapus profil ini?")) {
                                                    router.delete(`/admin/hapus/profil/${item.id}`);
                                                }
                                            }}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                                    Tidak ada data profil
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Profil">
                <TambahProfilSekolah onClose={() => setOpenTambah(false)} />
            </Modal>

            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Profil">
                <EditProfilSekolah profil={selectedProfil} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
