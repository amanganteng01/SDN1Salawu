import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahProfilSekolah from "./TambahProfilSekolah";
import EditProfilSekolah from "./EditProfilSekolah";
import GunakanWidthWindows from "../GunakanWidthWindows";

// Komponen utama untuk menampilkan daftar profil sekolah
export default function DaftarProfilSekolah({ profil }) {
    const width = GunakanWidthWindows(); // ambil ukuran layar saat ini
    const [openTambah, setOpenTambah] = useState(false); // kontrol modal tambah profil
    const [openEdit, setOpenEdit] = useState(false); // kontrol modal edit profil
    const [selectedProfil, setSelectedProfil] = useState(null); // menyimpan profil yang dipilih untuk diedit
    const [openAksi, setAksi] = useState(null); // state untuk aksi tambahan (belum digunakan)
    const [widthmd, setWidthmd] = useState(false); // cek apakah layar < 1000px

    // efek untuk update widthmd berdasarkan ukuran layar
    useEffect(() => {
        if (width < 1000) {
            setWidthmd(true);
        } else {
            setWidthmd(false);
        }
    }, [width]);

    return (
        <div className="p-4">
            {/* Header: judul + tombol tambah profil */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Profil Sekolah</h1>
                <button
                    onClick={() => setOpenTambah(true)} // buka modal tambah
                    className="border bg-gradient-to-r from-[#E52020] to-[#FBA518] text-white hover:from-[#E52020]/70 hover:to-[#FBA518]/70 transition rounded-md md:rounded-lg px-3 py-2"
                >
                    Tambah Profil
                </button>
            </div>

            {/* Tabel data profil sekolah */}
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
                                        {/* Tombol detail profil */}
                                        <Link
                                            href={`/admin/show/profil/sekolah/${item.id}`}
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                        >
                                            Detail
                                        </Link>
                                        {/* Tombol edit profil */}
                                        <button
                                            onClick={() => {
                                                setSelectedProfil(item); // pilih data
                                                setOpenEdit(true); // buka modal edit
                                            }}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                        >
                                            Edit
                                        </button>
                                        {/* Tombol hapus profil */}
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
                            // Jika tidak ada data
                            <tr>
                                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                                    Tidak ada data profil
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal tambah profil */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Profil">
                <TambahProfilSekolah onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal edit profil */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Profil">
                <EditProfilSekolah profil={selectedProfil} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
