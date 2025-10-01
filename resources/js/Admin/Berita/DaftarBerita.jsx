import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahBerita from "./TambahBerita";
import EditBerita from "./EditBerita";
import GunakanWidthWindows from "../GunakanWidthWindows";

export default function DaftarBerita({ berita }) {
    const width = GunakanWidthWindows();
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedBerita, setSelectedBerita] = useState(null);
    const [openAksi, setAksi] = useState(null);
    const [widthmd, setWidthmd] = useState(false);

    useEffect(() => {
        setWidthmd(width < 1000);
    }, [width]);

    const border = `
        border
        px-1 py-0.25
        sm:px-1.5 sm:py-0.5
        md:px-2 md:py-1
        lg:px-2.5 lg:py-1.5
        xl:px-3 xl:py-2
        2xl:px-3.5 2xl:py-2.5
    `;

    const ukuranTextBtn = `
        text-sm
        md:text-base
    `;

    const gradient = `
        bg-gradient-to-r
        from-[#E52020]
        to-[#FBA518]
        text-white
    `;

    const gradientHover = `
        hover:from-[#E52020]/70
        hover:to-[#FBA518]/70
        transition
    `;

    return (
        <div className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Daftar Berita</h1>
                <button
                    onClick={() => setOpenTambah(true)}
                    className={`${border} ${gradient} ${gradientHover} rounded-md md:rounded-lg`}
                >
                    Tambah Berita
                </button>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto relative">
                <table className="min-w-full bg-white rounded-lg shadow-lg text-sm md:text-base">
                    <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">No</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "Judul" : "Judul Berita"}</th>
                            <th className="px-4 py-3 text-left">Tanggal</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {berita.length > 0 ? (
                            berita.map((item, i) => (
                                <tr
                                    key={item.id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3">{i + 1}</td>
                                    <td className="px-4 py-3">{item.judul}</td>
                                    <td className="px-4 py-3">{item.tanggal}</td>
                                    <td className="px-4 py-3 text-center space-x-2 relative">
                                        {widthmd ? (
                                            <div className="relative inline-block text-left">
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

                                                {openAksi === item.id && (
                                                    <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg ring-1 ring-black/5 z-50 bg-white">
                                                        <div className="py-1">
                                                            <Link
                                                                href={`/admin/show/berita/${item.id}`}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E52020]/10 hover:text-[#E52020] rounded transition"
                                                            >
                                                                Detail
                                                            </Link>
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedBerita(item);
                                                                    setOpenEdit(true);
                                                                    setAksi(null);
                                                                }}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#FBA518]/10 hover:text-[#FBA518] rounded transition"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
                                                                        router.delete(`/admin/hapus/berita/${item.id}`);
                                                                    }
                                                                }}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600 rounded transition"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                <Link
                                                    href={`/admin/show/berita/${item.id}`}
                                                    className={`${ukuranTextBtn} bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition`}
                                                >
                                                    Detail
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        setSelectedBerita(item);
                                                        setOpenEdit(true);
                                                    }}
                                                    className={`${ukuranTextBtn} bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition`}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
                                                            router.delete(`/admin/hapus/berita/${item.id}`);
                                                        }
                                                    }}
                                                    className={`${ukuranTextBtn} bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition`}
                                                >
                                                    Hapus
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                                    Tidak ada data berita
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Tambah */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Berita">
                <TambahBerita onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Berita">
                <EditBerita berita={selectedBerita} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
