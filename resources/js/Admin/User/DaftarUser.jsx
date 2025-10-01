import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import TambahUser from "./TambahUser";
import EditUser from "./EditUser";
import GunakanWidthWindows from "../GunakanWidthWindows";

// Komponen utama daftar user
export default function DaftarUser({ users }) {
    // Mendapatkan lebar jendela browser
    const width = GunakanWidthWindows();

    // State untuk membuka modal tambah user
    const [openTambah, setOpenTambah] = useState(false);

    // State untuk membuka modal edit user
    const [openEdit, setOpenEdit] = useState(false);

    // State untuk menyimpan user yang sedang dipilih (untuk edit)
    const [selectedUser, setSelectedUser] = useState(null);

    // State untuk membuka/menutup menu aksi (khusus layar kecil)
    const [openAksi, setAksi] = useState(null);

    // State untuk mendeteksi apakah layar lebih kecil dari 1060px
    const [widthmd, setWidthmd] = useState(false);

    // useEffect akan jalan setiap kali `width` berubah
    useEffect(() => {
        if (width < 1060) {
            setWidthmd(true);  // jika layar kecil, gunakan tampilan dropdown aksi
        } else {
            setWidthmd(false); // jika layar besar, gunakan tombol langsung
        }
    }, [width]);

    // Variabel untuk styling border tombol
    const border = `
        border
        px-1 py-0.25
        sm:px-1.5 sm:py-0.5
        md:px-2 md:py-1
        lg:px-2.5 lg:py-1.5
        xl:px-3 xl:py-2
        2xl:px-3.5 2xl:py-2.5
    `;

    // Variabel ukuran teks tombol
    const ukuranTextBtn = `
        text-sm
        md:text-base
    `;

    // Variabel gradient tombol
    const gradient = `
        bg-gradient-to-r
        from-[#E52020]
        to-[#FBA518]
        text-white
    `;

    // Variabel efek hover gradient
    const gradientHover = `
        hover:from-[#E52020]/70
        hover:to-[#FBA518]/70
        transition
    `;

    return (
        <div className="p-4">
            {/* Header dengan judul dan tombol tambah user */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-xl md:text-2xl">Daftar User</h1>
                <button
                    onClick={() => setOpenTambah(true)} // buka modal tambah user
                    className={`${border} ${gradient} ${gradientHover} rounded-md md:rounded-lg`}
                >
                    Tambah User
                </button>
            </div>

            {/* Tabel daftar user */}
            <div className="overflow-x-auto relative">
                <table className="min-w-full bg-white rounded-lg shadow-lg text-sm md:text-base">
                    <thead className="bg-gradient-to-r from-[#E52020]/70 to-[#FBA518]/70 text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">No</th>
                            <th className="px-4 py-3 text-left">Nama</th>
                            <th className="px-4 py-3 text-left">Username</th>
                            <th className="px-4 py-3 text-left">Role</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            // Mapping data user ke baris tabel
                            users.map((item, i) => (
                                <tr
                                    key={item.id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3">{i + 1}</td>
                                    <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">{item.username}</td>
                                    <td className="px-4 py-3">{item.role}</td>
                                    <td className="px-4 py-3 text-center space-x-2 relative">
                                        {/* Jika layar kecil: tampilkan dropdown aksi */}
                                        {widthmd ? (
                                            <div className="relative inline-block text-left">
                                                <button
                                                    onClick={() =>
                                                        setAksi(openAksi === item.id ? null : item.id)
                                                    } // toggle menu aksi
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

                                                {/* Dropdown aksi edit/hapus */}
                                                {openAksi === item.id && (
                                                    <div
                                                        className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg
                                                            ring-1 ring-black/5 z-50 bg-white"
                                                    >
                                                        <div className="py-1">
                                                            {/* Tombol edit user */}
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedUser(item); // pilih user untuk diedit
                                                                    setOpenEdit(true);     // buka modal edit
                                                                    setAksi(null);         // tutup dropdown
                                                                }}
                                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700
                                                                    hover:bg-[#FBA518]/10 hover:text-[#FBA518]
                                                                    rounded transition"
                                                            >
                                                                Edit
                                                            </button>
                                                            {/* Tombol hapus user */}
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm("Apakah Anda yakin ingin menghapus user ini?")) {
                                                                        router.delete(`/admin/hapus/user/${item.id}`);
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
                                            // Jika layar besar: tampilkan tombol langsung
                                            <>
                                                {/* Tombol edit */}
                                                <button
                                                    onClick={() => {
                                                        setSelectedUser(item);
                                                        setOpenEdit(true);
                                                    }}
                                                    className={`${ukuranTextBtn} bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition`}
                                                >
                                                    Edit
                                                </button>
                                                {/* Tombol hapus */}
                                                <button
                                                    onClick={() => {
                                                        if (confirm("Apakah Anda yakin ingin menghapus user ini?")) {
                                                            router.delete(`/admin/hapus/user/${item.id}`);
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
                            // Jika tidak ada data user
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    Tidak ada data user
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal tambah user */}
            <Modal
                isOpen={openTambah}
                onClose={() => setOpenTambah(false)}
                title="Tambah User"
            >
                <TambahUser onClose={() => setOpenTambah(false)} />
            </Modal>

            {/* Modal edit user */}
            <Modal
                isOpen={openEdit}
                onClose={() => setOpenEdit(false)}
                title="Edit User"
            >
                <EditUser
                    user={selectedUser} // kirim data user yang dipilih
                    onClose={() => setOpenEdit(false)}
                />
            </Modal>
        </div>
    );
}
