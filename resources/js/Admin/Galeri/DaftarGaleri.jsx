import { Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import TambahGaleri from "./TambahGaleri";
import EditGaleri from "./EditGaleri";
import GunakanWidthWindows from "../GunakanWidthWindows";

export default function DaftarGaleri({ galeri }) {
    // custom hook untuk ambil lebar window (responsive)
    const width = GunakanWidthWindows();

    // state buka/tutup modal tambah
    const [openTambah, setOpenTambah] = useState(false);

    // state buka/tutup modal edit
    const [openEdit, setOpenEdit] = useState(false);

    // state galeri yang dipilih untuk diedit
    const [selectedGaleri, setSelectedGaleri] = useState(null);

    // state untuk dropdown aksi (mobile view), menyimpan id galeri yang sedang dibuka
    const [openAksi, setAksi] = useState(null);

    // state untuk mendeteksi apakah layar < 1000px (mobile/tablet)
    const [widthmd, setWidthmd] = useState(false);

    // useEffect untuk update kondisi layar setiap kali width berubah
    useEffect(() => {
        if (width < 1000) {
            setWidthmd(true);
        } else {
            setWidthmd(false);
        }
    }, [width]);

    // className untuk ukuran tombol aksi (agar responsive)
    const ukuranTextBtn = `
        text-sm
        md:text-base
    `

    return (
        <div className="p-4">
            {/* Header halaman */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Daftar Galeri</h1>
                {/* Tombol untuk membuka modal tambah galeri */}
                <button
                    onClick={() => setOpenTambah(true)}
                    className="px-4 py-2 rounded-md bg-gradient-to-r from-[#E52020] to-[#FBA518] text-white hover:opacity-80 transition"
                >
                    Tambah Galeri
                </button>
            </div>

            {/* Tabel data galeri */}
            <div className="overflow-x-auto relative">
                <table className="min-w-full bg-white rounded-lg shadow-md text-sm md:text-base">
                    <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">No</th>
                            <th className="px-4 py-3 text-left">Judul</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "Kategori" : "Kategori File"}</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "Tanggal" : "Tanggal Upload"}</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Cek apakah ada data galeri */}
                        {galeri.length > 0 ? (
                            galeri.map((item, i) => (
                                <tr key={item.id} className="border-b last:border-none hover:bg-gray-50 transition">
                                    {/* Nomor urut */}
                                    <td className="px-4 py-3">{i + 1}</td>

                                    {/* Judul galeri */}
                                    <td className="px-4 py-3">{item.judul}</td>

                                    {/* Kategori galeri */}
                                    <td className="px-4 py-3 capitalize">{item.kategori}</td>

                                    {/* Tanggal upload */}
                                    <td className="px-4 py-3">{item.tanggal}</td>

                                    {/* Kolom aksi */}
                                    <td className="px-4 py-3 text-center relative">
                                        {/* Jika layar kecil (<1000px) pakai dropdown aksi */}
                                        {widthmd ? (
                                            <div className="relative inline-block text-left">
                                                {/* Tombol trigger dropdown */}
                                                <button
                                                    onClick={() => setAksi(openAksi === item.id ? null : item.id)}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md
                                                        bg-gradient-to-r from-[#E52020]/20 to-[#FBA518]/20
                                                        hover:from-[#E52020]/30 hover:to-[#FBA518]/30
                                                        text-sm font-medium text-gray-800 shadow-sm transition"
                                                >
                                                    Aksi
                                                    <span className="text-xs">{openAksi === item.id ? "▲" : "▼"}</span>
                                                </button>

                                                {/* Dropdown Menu */}
                                                {openAksi === item.id && (
                                                    <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg ring-1 ring-black/5 z-50 bg-white">
                                                        <div className="py-1">
                                                            {/* Link ke detail */}
                                                            <Link
                                                                href={`/admin/show/galeri/${item.id}`}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition"
                                                            >
                                                                Detail
                                                            </Link>

                                                            {/* Tombol Edit */}
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedGaleri(item); // simpan galeri terpilih
                                                                    setOpenEdit(true);       // buka modal edit
                                                                    setAksi(null);           // tutup dropdown
                                                                }}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-600 rounded transition"
                                                            >
                                                                Edit
                                                            </button>

                                                            {/* Tombol Hapus */}
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm("Apakah Anda yakin ingin menghapus galeri ini?")) {
                                                                        router.delete(`/admin/hapus/galeri/${item.id}`);
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
                                            // Jika layar besar, tampilkan tombol biasa
                                            <>
                                                {/* Tombol Detail */}
                                                <Link
                                                    href={`/admin/show/galeri/${item.id}`}
                                                    className={`${ukuranTextBtn} bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition`}
                                                >
                                                    Detail
                                                </Link>

                                                {/* Tombol Edit */}
                                                <button
                                                    onClick={() => {
                                                        setSelectedGaleri(item);
                                                        setOpenEdit(true);
                                                    }}
                                                    className={`${ukuranTextBtn} bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition`}
                                                >
                                                    Edit
                                                </button>

                                                {/* Tombol Hapus */}
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Apakah Anda yakin ingin menghapus galeri ini?")) {
                                                            router.delete(`/admin/hapus/galeri/${item.id}`);
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
                            // Jika tidak ada data galeri
                            <tr>
                                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                                    Tidak ada data galeri
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Tambah Galeri */}
            <Modal isOpen={openTambah} onClose={() => setOpenTambah(false)} title="Tambah Galeri">
                <TambahGaleri onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Galeri */}
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Galeri">
                <EditGaleri galeri={selectedGaleri} onClose={() => setOpenEdit(false)} />
            </Modal>
        </div>
    );
}
