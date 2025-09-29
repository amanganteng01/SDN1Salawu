import { useForm, Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function EditGuru({ guru, onClose }){
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        nip: '',
        mapel: '',
        foto: null,
    })

    useEffect(() => {
        if (guru) {
            setData({
                nama: guru.nama || "",
                nip: guru.nip || "",
                mapel: guru.mapel || "",
                foto: null,
            });
        }
    }, [guru]);

    const submit = (e) => {
        e.preventDefault();
        post('/admin/update/guru', {
            onSuccess: () => {
                reset();
                onClose();
            }
        }
        );
    }

    return(
        <>
            {/* <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">Edit Guru</h1> */}

            <form onSubmit={submit} className="space-y-4">
                {/* Nama */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Guru
                    </label>
                    <input
                        type="text"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                        placeholder="Masukkan nama guru"
                    />
                    {errors.nama && (
                        <div className="text-red-500 text-xs mt-1">{errors.nama}</div>
                    )}
                </div>

                {/* NIP */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        NIP
                    </label>
                    <input
                        type="text"
                        value={data.nip}
                        onChange={(e) => setData("nip", e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                        placeholder="Masukkan NIP"
                    />
                    {errors.nip && (
                        <div className="text-red-500 text-xs mt-1">{errors.nip}</div>
                    )}
                </div>

                {/* Mapel */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mata Pelajaran
                    </label>
                    <input
                        type="text"
                        value={data.mapel}
                        onChange={(e) => setData("mapel", e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm focus:ring focus:ring-blue-200"
                        placeholder="Contoh: Matematika"
                    />
                    {errors.mapel && (
                        <div className="text-red-500 text-xs mt-1">{errors.mapel}</div>
                    )}
                </div>

                {/* Foto */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Foto
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setData("foto", e.target.files[0])}
                        className="w-full border rounded px-3 py-2 text-sm"
                    />
                    {errors.foto && (
                        <div className="text-red-500 text-xs mt-1">{errors.foto}</div>
                    )}
                </div>

                {/* Tombol */}
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-sm text-gray-600 hover:text-gray-800"
                    >
                        ← Kembali
                    </button>
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                        {processing ? "Menyimpan..." : "Simpan"}
                    </button>
                </div>
            </form>
        {/* </div> */}
        </>
    )
}
