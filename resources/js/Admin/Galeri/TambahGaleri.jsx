
import { useForm } from "@inertiajs/react";

// Komponen untuk menambahkan data galeri baru
export default function TambahGaleri({ onClose }) {
    // State form menggunakan Inertia useForm
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        keterangan: "",
        file: null,
        kategori: "foto",
        tanggal: "",
    });

    // Fungsi submit untuk kirim data galeri ke server
    const submit = (e) => {
        e.preventDefault();
        post("/admin/simpan/galeri", {
            onSuccess: () => {
                reset(); // reset form
                onClose(); // tutup modal
            },
        });
    };

    return (
        // Form input galeri
        <form onSubmit={submit} className="space-y-5">
            {/* Input Judul */}
            <div>
                <label className="block text-sm font-semibold mb-1">Judul</label>
                <input
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData("judul", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                />
                {errors.judul && <div className="text-red-500 text-xs">{errors.judul}</div>}
            </div>

            {/* Input Keterangan */}
            <div>
                <label className="block text-sm font-semibold mb-1">Keterangan</label>
                <textarea
                    value={data.keterangan}
                    onChange={(e) => setData("keterangan", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                />
                {errors.keterangan && <div className="text-red-500 text-xs">{errors.keterangan}</div>}
            </div>

            {/* Input File (Foto/Video) */}
            <div>
                <label className="block text-sm font-semibold mb-1">File</label>
                <input
                    type="file"
                    onChange={(e) => setData("file", e.target.files[0])}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                />
                {errors.file && <div className="text-red-500 text-xs">{errors.file}</div>}
            </div>

            {/* Pilihan Kategori */}
            <div>
                <label className="block text-sm font-semibold mb-1">Kategori</label>
                <select
                    value={data.kategori}
                    onChange={(e) => setData("kategori", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                >
                    <option value="foto">Foto</option>
                    <option value="video">Video</option>
                </select>
            </div>

            {/* Input Tanggal */}
            <div>
                <label className="block text-sm font-semibold mb-1">Tanggal</label>
                <input
                    type="date"
                    value={data.tanggal}
                    onChange={(e) => setData("tanggal", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                />
            </div>

            {/* Tombol Aksi */}
            <div className="flex justify-end gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose} // tombol batal
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
                >
                    Batal
                </button>
                <button
                    type="submit" // tombol simpan
                    disabled={processing}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white
                               bg-gradient-to-r from-[#E52020] to-[#FBA518]
                               hover:from-[#E52020]/80 hover:to-[#FBA518]/80
                               shadow-md transition"
                >
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
}
