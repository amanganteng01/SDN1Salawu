import { Link } from "@inertiajs/react";
import LayoutAdmin from "../Login/LayoutAdmin";

export default function DaftarGuru({guru}){
    return (
        <>
            <div className=""><h1>Daftar Guru</h1></div>

            <Link href="/admin/tambah/guru" className="bg-red-500 w-[120px]" >Tambah Guru</Link>
            <ul>
                {guru.map((item) => (
                    <li key={item.id}>{item.nama}</li>
                ))}
            </ul>
        </>
    )
}
