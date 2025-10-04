import { useForm } from "@inertiajs/react";

/**
 * Komponen TambahBerita - Form untuk menambahkan berita baru
 * Menggunakan useForm dari Inertia untuk handle form state dan submission
 */
export default function TambahBerita({ onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",   // Input judul berita
        isi: "",     // Input isi berita  
        tanggal: "", // Input tanggal berita
        gambar: null // Input file gambar berita
    });

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        
        // Kirim data ke endpoint simpan
        post("/admin/simpan/berita", {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Field Judul Berita */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Judul Berita
                </label>
                <input
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData("judul", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan judul berita"
                />
                {/* Error message untuk judul */}
                {errors.judul && (
                    <div className="text-red-500 text-xs mt-1">{errors.judul}</div>
                )}
            </div>

            {/* Field Tanggal */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tanggal Publikasi
                </label>
                <input
                    type="date"
                    value={data.tanggal}
                    onChange={(e) => setData("tanggal", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                />
                {/* Error message untuk tanggal */}
                {errors.tanggal && (
                    <div className="text-red-500 text-xs mt-1">{errors.tanggal}</div>
                )}
            </div>

            {/* Field Isi Berita */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Isi Berita
                </label>
                <textarea
                    value={data.isi}
                    onChange={(e) => setData("isi", e.target.value)}
                    rows="5"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Tulis isi berita disini..."
                />
                {/* Error message untuk isi berita */}
                {errors.isi && (
                    <div className="text-red-500 text-xs mt-1">{errors.isi}</div>
                )}
            </div>

            {/* Field Upload Gambar */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Gambar Berita
                </label>
                <input
                    type="file"
                    onChange={(e) => setData("gambar", e.target.files[0])}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    accept="image/*"
                />
                {/* Error message untuk gambar */}
                {errors.gambar && (
                    <div className="text-red-500 text-xs mt-1">{errors.gambar}</div>
                )}
            </div>

            {/* Tombol Aksi */}
            <div className="flex items-center justify-end gap-3 pt-4">
                {/* Tombol Batal */}
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 
                               hover:bg-slate-100 rounded-lg transition-colors"
                >
                    Batal
                </button>

                {/* Tombol Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white
                               bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400
                               shadow-md transition-colors"
                >
                    {processing ? "Menyimpan..." : "Simpan Berita"}
                </button>
            </div>
        </form>
    );
}