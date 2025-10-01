import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahEkstrakurikuler from "./TambahEkstrakurikuler";
import EditEkstrakurikuler from "./EditEkstrakurikuler";
import GunakanWidthWindows from "../GunakanWidthWindows";

// Komponen utama untuk menampilkan daftar ekstrakurikuler
export default function DaftarEkstrakurikuler({ ekstrakurikuler }) {
    // Hook custom untuk mendapatkan lebar window (responsif)
    const width = GunakanWidthWindows();

    // State untuk modal tambah data
    const [openTambah, setOpenTambah] = useState(false);

    // State untuk modal edit data
    const [openEdit, setOpenEdit] = useState(false);

    // State untuk menyimpan data ekstrakurikuler yang dipilih (untuk edit)
    const [selectedEkstra, setSelectedEkstra] = useState(null);

    // State untuk membuka dropdown aksi (hanya di layar kecil)
    const [openAksi, setAksi] = useState(null);

    // State penanda apakah layar kecil (<1000px)
    const [widthmd, setWidthmd] = useState(false);

    // Jalankan setiap kali `width` berubah → cek apakah layar kecil atau besar
    useEffect(() => {
        if (width < 1000) {
            setWidthmd(true);
        } else {
            setWidthmd(false);
        }
    }, [width]);

    // Kumpulan class untuk styling tombol (reusable)
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
            {/* Header Judul & Tombol Tambah */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Daftar Ekstrakurikuler</h1>
                <button
                    onClick={() => setOpenTambah(true)} // buka modal tambah
                    className={`${border} ${gradient} ${gradientHover} rounded-md md:rounded-lg`}
                >
                    Tambah Ekstrakurikuler
                </button>
            </div>

            {/* Tabel daftar ekstrakurikuler */}
            <div className="overflow-x-auto relative">
                <table className="min-w-full bg-white rounded-lg shadow-lg text-sm md:text-base">
                    <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">No</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "Nama" : "Nama Ekstrakurikuler"}</th>
                            <th className="px-4 py-3 text-left">Pembina</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Jika ada data tampilkan, jika tidak tampilkan pesan kosong */}
                        {ekstrakurikuler.length > 0 ? (
                            ekstrakurikuler.map((item, i) => (
                                <tr
                                    key={item.id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    {/* Nomor urut */}
                                    <td className="px-4 py-3">{i + 1}</td>

                                    {/* Nama ekstrakurikuler */}
                                    <td className="px-4 py-3">{item.nama}</td>

                                    {/* Nama pembina */}
                                    <td className="px-4 py-3">{item.pembina}</td>

                                    {/* Kolom Aksi */}
                                    <td className="px-4 py-3 text-center space-x-2 relative">
                                        {/* Jika layar kecil → pakai dropdown aksi */}
                                        {widthmd ? (
                                            <div className="relative inline-block text-left">
                                                <button
                                                    onClick={() => setAksi(openAksi === item.id ? null : item.id)} // toggle dropdown
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md
                                                            bg-gradient-to-r from-[#E52020]/20 to-[#FBA518]/20
                                                            hover:from-[#E52020]/30 hover:to-[#FBA518]/30
                                                            text-sm md:text-base font-medium text-gray-800
                                                            shadow-sm transition"
                                                >
                                                    Aksi
                                                    <span className="text-xs">
                                                        {openAksi === item.id ? "▲" : "▼"}
                                                    </span>
                                                </button>

                                                {/* Dropdown menu aksi */}
                                                {openAksi === item.id && (
                                                    <div
                                                        className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg
                                                                    ring-1 ring-black/5 z-50 bg-white"
                                                    >
                                                        <div className="py-1">
                                                            {/* Tombol Detail */}
                                                            <Link
                                                                href={`/admin/show/ekstrakurikuler/${item.id}`}
                                                                className="block px-4 py-2 text-sm text-gray-700
                                                                            hover:bg-[#E52020]/10 hover:text-[#E52020]
                                                                            rounded transition"
                                                            >
                                                                Detail
                                                            </Link>

                                                            {/* Tombol Edit */}
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedEkstra(item); // pilih data yang akan di-edit
                                                                    setOpenEdit(true);      // buka modal edit
                                                                    setAksi(null);          // tutup dropdown
                                                                }}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700
                                                                            hover:bg-[#FBA518]/10 hover:text-[#FBA518]
                                                                            rounded transition"
                                                            >
                                                                Edit
                                                            </button>

                                                            {/* Tombol Hapus */}
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
                                                                        router.delete(`/admin/hapus/ekstrakurikuler/${item.id}`);
                                                                    }
                                                                }}
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
                                        ) : (
                                            // Jika layar besar → pakai tombol aksi langsung
                                            <>
                                                <Link
                                                    href={`/admin/show/ekstrakurikuler/${item.id}`}
                                                    className={`${ukuranTextBtn} bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition`}
                                                >
                                                    Detail
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        setSelectedEkstra(item);
                                                        setOpenEdit(true);
                                                    }}
                                                    className={`${ukuranTextBtn} bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition`}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
                                                            router.delete(`/admin/hapus/ekstrakurikuler/${item.id}`);
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
                                    Tidak ada data ekstrakurikuler
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Tambah Ekstrakurikuler */}
            <Modal
                isOpen={openTambah}
                onClose={() => setOpenTambah(false)}
                title="Tambah Ekstrakurikuler"
            >
                <TambahEkstrakurikuler onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal Edit Ekstrakurikuler */}
            <Modal
                isOpen={openEdit}
                onClose={() => setOpenEdit(false)}
                title="Edit Ekstrakurikuler"
            >
                <EditEkstrakurikuler
                    ekstrakurikuler={selectedEkstra} // kirim data yang dipilih untuk di-edit
                    onClose={() => setOpenEdit(false)}
                />
            </Modal>
        </div>
    );
}
