import { Link, router } from "@inertiajs/react";
import { use, useEffect, useState } from "react";
import Modal from "../Modal";
import TambahGuru from "./TambahGuru";
import EditGuru from "./EditGuru";
import GunakanWidthWindows from "../GunakanWidthWindows";

// Komponen daftar guru (tabel + aksi CRUD)
export default function DaftarGuru({ guru }) {
    // Ambil lebar window dengan custom hook
    const width = GunakanWidthWindows();

    // State untuk modal dan aksi
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedGuru, setSelectedGuru] = useState(null);
    const [openAksi, setAksi] = useState(null);
    const [widthmd, setWidthmd] = useState(false);

    // Deteksi perubahan lebar layar
    useEffect(() => {
        if (width < 1000){
            setWidthmd(true);
        }else{
            setWidthmd(false);
        }
    }, [width]);

    // Class utilitas
    const border = `
        border
        px-1 py-0.25
        sm:px-1.5 sm:py-0.5
        md:px-2 md:py-1
        lg:px-2.5 lg:py-1.5
        xl:px-3 xl:py-2
        2xl:px-3.5 2xl:py-2.5
    `
    const ukuranTextBtn = `
        text-sm
        md:text-base
    `
    const gradient = `
        bg-gradient-to-r
        from-[#E52020]
        to-[#FBA518]
        text-white
    `
    const gradientHover = `
        hover:from-[#E52020]/70
        hover:to-[#FBA518]/70
        transition
    `

    return (
        <div className="p-4">
            {/* Header + Tombol Tambah */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Daftar Guru</h1>
                <button
                    onClick={() => setOpenTambah(true)}
                    className={`${border} ${gradient} ${gradientHover} rounded-md md:rounded-lg`}
                >
                    Tambah Guru
                </button>
            </div>

            {/* Tabel Guru */}
            <div className="overflow-x-auto relative">
            <table className="min-w-full bg-white rounded-lg shadow-lg text-sm md:text-base">
                <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                <tr>
                    <th className="px-4 py-3 text-left">No</th>
                    <th className="px-4 py-3 text-left">{widthmd ? 'Nama' : 'Nama Guru'}</th>
                    <th className="px-4 py-3 text-left">{widthmd ? 'Mapel' : 'Mata Pelajaran'}</th>
                    <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
                </thead>
                <tbody>
                {guru.length > 0 ? (
                    // Loop data guru
                    guru.map((item, i) => (
                    <tr
                        key={item.id}
                        className="border-b last:border-none hover:bg-gray-50 transition"
                    >
                        <td className="px-4 py-3">{i + 1}</td>
                        <td className="px-4 py-3">{item.nama}</td>
                        <td className="px-4 py-3">{item.mapel}</td>
                        <td className="px-4 py-3 text-center space-x-2 relative">
                            {/* Jika layar kecil tampil dropdown aksi */}
                            {widthmd ? (
                                <div className="relative inline-block text-left">
                                {/* Tombol Aksi */}
                                <button
                                    onClick={() => setAksi(openAksi === item.id ? null : item.id)}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md
                                            bg-gradient-to-r from-[#E52020]/20 to-[#FBA518]/20
                                            hover:from-[#E52020]/30 hover:to-[#FBA518]/30
                                            text-sm md:text-base font-medium text-gray-800
                                            shadow-sm transition"
                                >
                                    Aksi
                                    <span className="text-xs">{openAksi === item.id ? "▲" : "▼"}</span>
                                </button>

                                {/* Dropdown Menu */}
                                {openAksi === item.id && (
                                    <div
                                    className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg
                                                ring-1 ring-black/5 z-50 bg-white"
                                    >
                                    <div className="py-1">
                                        {/* Detail */}
                                        <Link
                                        href={`/admin/show/guru/${item.id}`}
                                        className="block px-4 py-2 text-sm text-gray-700
                                                    hover:bg-[#E52020]/10 hover:text-[#E52020]
                                                    rounded transition"
                                        >
                                        Detail
                                        </Link>
                                        {/* Edit */}
                                        <button
                                        onClick={() => {
                                            setSelectedGuru(item);
                                            setOpenEdit(true);
                                            setAksi(null);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700
                                                    hover:bg-[#FBA518]/10 hover:text-[#FBA518]
                                                    rounded transition"
                                        >
                                        Edit
                                        </button>
                                        {/* Hapus */}
                                        <button
                                        onClick={() => {
                                        if (confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
                                            router.delete(`/admin/hapus/guru/${item.id}`);
                                        }}
                                        }
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700
                                                    hover:bg-red-100 hover:text-red-600
                                                    rounded transition"
                                        >
                                        Hapus
                                        </button>
                                    </div>
                                    </div>
                                )}
                                </div>

                            ):(
                                // Jika layar besar tampil tombol langsung
                                <>
                                    <Link
                                        href={`/admin/show/guru/${item.id}`}
                                        className={`${ukuranTextBtn} bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition`}
                                    >
                                        Detail
                                    </Link>
                                    <button
                                        onClick={() => {
                                        setSelectedGuru(item);
                                        setOpenEdit(true);
                                        }}
                                        className={` ${ukuranTextBtn} bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition`}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                        if (confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
                                            router.delete(`/admin/hapus/guru/${item.id}`);
                                        }}
                                        } className={`${ukuranTextBtn} bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition`}
                                    >
                                        Hapus
                                    </button>
                                </>
                            )}
                        </td>
                    </tr>
                    ))
                ) : (
                    // Jika tidak ada data
                    <tr>
                    <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                        Tidak ada data guru
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>

            {/* Modal Tambah Guru */}
            <Modal
                isOpen={openTambah}
                onClose={() => setOpenTambah(false)}
                title="Tambah Guru"
            >
                <TambahGuru onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Guru */}
            <Modal
                isOpen={openEdit}
                onClose={() => setOpenEdit(false)}
                title="EditGuru"
            >
                <EditGuru guru={selectedGuru} onClose={() => setOpenEdit(false)}/>
            </Modal>
        </div>
    );
}
