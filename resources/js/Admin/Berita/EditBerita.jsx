import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function EditBerita({ berita, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        isi: "",
        tanggal: "",
        gambar: null,
    });

    useEffect(() => {
        if (berita) {
            setData({
                judul: berita.judul || "",
                isi: berita.isi || "",
                tanggal: berita.tanggal || "",
                gambar: null,
            });
        }
    }, [berita]);

    const submit = (e) => {
        e.preventDefault();
        post(`/admin/update/berita/${berita.id}`, {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Judul */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Judul
                </label>
                <input
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData("judul", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                    placeholder="Masukkan judul berita"
                />
                {errors.judul && (
                    <div className="text-red-500 text-xs mt-1">{errors.judul}</div>
                )}
            </div>

            {/* Isi */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Isi Berita
                </label>
                <textarea
                    value={data.isi}
                    onChange={(e) => setData("isi", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm min-h-[150px]
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                    placeholder="Masukkan isi berita"
                />
                {errors.isi && (
                    <div className="text-red-500 text-xs mt-1">{errors.isi}</div>
                )}
            </div>

            {/* Tanggal */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Tanggal
                </label>
                <input
                    type="date"
                    value={data.tanggal}
                    onChange={(e) => setData("tanggal", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                />
                {errors.tanggal && (
                    <div className="text-red-500 text-xs mt-1">{errors.tanggal}</div>
                )}
            </div>

            {/* Gambar */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Gambar
                </label>
                <input
                    type="file"
                    onChange={(e) => setData("gambar", e.target.files[0])}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                />
                {errors.gambar && (
                    <div className="text-red-500 text-xs mt-1">{errors.gambar}</div>
                )}
            </div>

            {/* Tombol */}
            <div className="flex items-center justify-end gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
                >
                    Batal
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white 
                               bg-gradient-to-r from-[#E52020] to-[#FBA518] 
                               hover:from-[#E52020]/80 hover:to-[#FBA518]/80 shadow-md transition"
                >
                    {processing ? "Memperbarui..." : "Perbarui"}
                </button>
            </div>
        </form>
    );
}
