import { Link } from "@inertiajs/react";
import { use, useState } from "react";
import Modal from "../Modal";
import TambahGuru from "./TambahGuru";
import EditGuru from "./EditGuru";

export default function DaftarGuru({ guru }) {
    const [openTambah, setOpenTambah] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedGuru, setSelectedGuru] = useState(null);


    const border = `
        border
        px-1 py-0.25
        sm:px-1.5 sm:py-0.5
        md:px-2 md:py-1
        lg:px-2.5 lg:py-1.5
        xl:px-3 xl:py-2
        2xl:px-3.5 2xl:py-2.5
    `
    const ukuranText = `
        text-xs
        sm:text-sm
        md:text-base
        lg:text-lg
        xl:text-xl
        2xl:text-2xl
    `
    const ukuranTextBtn = `
        text-xs
        sm:text-xs
        md:text-sm
        lg:text-sm
        xl:text-base
        2xl:text-base
    `

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2.5 2xl:mb-3">
                <h1 className="font-bold mb-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Daftar Guru</h1>
                <button
                    onClick={() => setOpenTambah(true)}
                    className={`${border} bg-blue-500 text-white border hover:bg-blue-600 rounded-lg sm:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-xl text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl`}
                >
                    Tambah Guru
                </button>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className={`w-full text-left border border-gray-200 ${ukuranText}`}>
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className={`${border} text-center`} >No</th>
                            {/* <th className={`${border} text-center`} >Foto</th>
                            <th className={`${border} text-center`} >NIP</th> */}
                            <th className={`${border} text-center`} >Nama Guru</th>
                            <th className={`${border} text-center`} >Mata Pelajaran</th>
                            <th className={`${border} text-center`} >Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guru.length > 0 ? (
                            guru.map((item, i) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 transition"
                                >
                                    <td className={`${ukuranText} border text-center`}>
                                        {i + 1}
                                    </td>
                                    {/* <td className="border flex justify-center">
                                        <img
                                            src={`/storage/guru/${item.foto}`}
                                            alt={item.nama}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="border">{item.nip}</td> */}
                                    <td className={[border, ukuranText]} >{item.nama}</td>
                                    <td className={[border, ukuranText]} >{item.mapel}</td>
                                    <td className={`${border} ${ukuranText} text-center space-x-2`}>
                                        <Link
                                            href={`/admin/show/guru/${item.id}`}
                                            className={`${border} ${ukuranTextBtn} text-xs bg-blue-500 text-white rounded hover:bg-blue-600`}
                                        >
                                            Detail
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setSelectedGuru(item);
                                                setOpenEdit(true);
                                            }}
                                            className={`${border} ${ukuranTextBtn} text-xs bg-green-500 text-white rounded hover:bg-green-600`}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            href={`/admin/hapus/guru/${item.id}`}
                                            method="delete"
                                            as="button"
                                            className={`${border} ${ukuranTextBtn} text-xs bg-red-500 text-white rounded hover:bg-red-600`}
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="px-4 py-3 text-center text-gray-500"
                                >
                                    Tidak ada data guru
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={openTambah}
                onClose={() => setOpenTambah(false)}
                title="Tambah Guru"
            >
                <TambahGuru onClose={() => setOpenTambah(false)} />
            </Modal>

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
