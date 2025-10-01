import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahSiswa from "./TambahSiswa";
import EditSiswa from "./EditSiswa";
import GunakanWidthWindows from "../GunakanWidthWindows";

export default function DaftarSiswa({ siswa }) {
    const width = GunakanWidthWindows(); // hook custom untuk ambil ukuran layar
    const [openTambah, setOpenTambah] = useState(false); // state buka modal tambah
    const [openEdit, setOpenEdit] = useState(false); // state buka modal edit
    const [selectedSiswa, setSelectedSiswa] = useState(null); // data siswa yang dipilih untuk edit
    const [openAksi, setAksi] = useState(null); // state buka menu aksi (mobile)
    const [widthmd, setWidthmd] = useState(false); // cek apakah layar < 1060px

    // cek lebar layar, ubah label tabel sesuai ukuran layar
    useEffect(() => {
        if (width < 1060) {
            setWidthmd(true);
        } else {
            setWidthmd(false);
        }
    }, [width]);

    // class tailwind untuk mendesain anjay
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
            {/* Header + tombol tambah */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Daftar Siswa</h1>
                <button
                    onClick={() => setOpenTambah(true)}
                    className={`${border} ${gradient} ${gradientHover} rounded-md md:rounded-lg`}
                >
                    Tambah Siswa
                </button>
            </div>

            {/* Tabel daftar siswa */}
            <div className="overflow-x-auto relative">
                <table className="min-w-full bg-white rounded-lg shadow-lg text-sm md:text-base">
                    <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">No</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "Nama" : "Nama Siswa"}</th>
                            <th className="px-4 py-3 text-left">NISN</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "JK" : "Jenis Kelamin"}</th>
                            <th className="px-4 py-3 text-left">{widthmd ? "Masuk" : "Tahun Masuk"}</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {siswa.length > 0 ? (
                            siswa.map((item, i) => (
                                <tr
                                    key={item.id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    {/* nomor urut */}
                                    <td className="px-4 py-3">{i + 1}</td>
                                    {/* data siswa */}
                                    <td className="px-4 py-3">{item.nama_siswa}</td>
                                    <td className="px-4 py-3">{item.nisn}</td>
                                    <td className="px-4 py-3">
                                        {item.jenis_kelamin === "L"
                                            ? widthmd ? "L" : "Laki-laki"
                                            : widthmd ? "P" : "Perempuan"}
                                    </td>
                                    <td className="px-4 py-3">{item.tahun_masuk}</td>

                                    {/* aksi edit & hapus */}
                                    <td className="px-4 py-3 text-center space-x-2 relative">
                                        {widthmd ? (
                                            // versi dropdown untuk layar kecil
                                            <div className="relative inline-block text-left">
                                                <button
                                                    onClick={() =>
                                                        setAksi(openAksi === item.id ? null : item.id)
                                                    }
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

                                                {openAksi === item.id && (
                                                    <div
                                                        className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg
                                                            ring-1 ring-black/5 z-50 bg-white"
                                                    >
                                                        <div className="py-1">
                                                            {/* tombol edit */}
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedSiswa(item);
                                                                    setOpenEdit(true);
                                                                    setAksi(null);
                                                                }}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700
                                                                    hover:bg-[#FBA518]/10 hover:text-[#FBA518]
                                                                    rounded transition"
                                                            >
                                                                Edit
                                                            </button>
                                                            {/* tombol hapus */}
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
                                                                        router.delete(`/admin/hapus/guru/${item.id}`);
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
                                            // versi tombol langsung untuk layar besar
                                            <>
                                                <button
                                                    onClick={() => {
                                                        setSelectedSiswa(item);
                                                        setOpenEdit(true);
                                                    }}
                                                    className={`${ukuranTextBtn} bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition`}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Apakah Anda yakin ingin menghapus guru ini?")) {
                                                            router.delete(`/admin/hapus/guru/${item.id}`);
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
                                {/* jika data kosong */}
                                <td
                                    colSpan="6"
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    Tidak ada data siswa
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* modal tambah siswa */}
            <Modal
                isOpen={openTambah}
                onClose={() => setOpenTambah(false)}
                title="Tambah Siswa"
            >
                <TambahSiswa onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* modal edit siswa */}
            <Modal
                isOpen={openEdit}
                onClose={() => setOpenEdit(false)}
                title="Edit Siswa"
            >
                <EditSiswa
                    siswa={selectedSiswa}
                    onClose={() => setOpenEdit(false)}
                />
            </Modal>
        </div>
    );
}
