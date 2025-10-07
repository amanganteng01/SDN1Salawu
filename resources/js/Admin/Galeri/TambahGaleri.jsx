import { useForm } from "@inertiajs/react";
import { Upload, Image, Video } from "lucide-react";

// Form untuk menambahkan galeri baru
export default function TambahGaleri({ onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        keterangan: "",
        file: null,
        kategori: "foto",
        tanggal: "",
    });

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman

        // Kirim data ke endpoint simpan
        post("/admin/simpan/galeri", {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Field Judul */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Judul Galeri
                </label>
                <input
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData("judul", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan judul galeri"
                />
                {/* Error message untuk judul */}
                {errors.judul && (
                    <div className="text-red-500 text-xs mt-1">Judul Galeri tidak valid</div>
                )}
            </div>

            {/* Field Keterangan */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Keterangan
                </label>
                <textarea
                    value={data.keterangan}
                    onChange={(e) => setData("keterangan", e.target.value)}
                    rows="3"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan keterangan galeri (opsional)"
                />
                {/* Error message untuk keterangan */}
                {errors.keterangan && (
                    <div className="text-red-500 text-xs mt-1">Keterangan tidak valid</div>
                )}
            </div>

            {/* Field Kategori */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Kategori
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setData("kategori", "foto")}
                        className={`flex items-center justify-center gap-2 p-3 border rounded-lg transition-colors ${
                            data.kategori === "foto"
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-slate-300 hover:border-slate-400"
                        }`}
                    >
                        <Image className="w-4 h-4" />
                        Foto
                    </button>
                    <button
                        type="button"
                        onClick={() => setData("kategori", "video")}
                        className={`flex items-center justify-center gap-2 p-3 border rounded-lg transition-colors ${
                            data.kategori === "video"
                                ? "border-purple-500 bg-purple-50 text-purple-700"
                                : "border-slate-300 hover:border-slate-400"
                        }`}
                    >
                        <Video className="w-4 h-4" />
                        Video
                    </button>
                </div>
            </div>

            {/* Field Upload File */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    File {data.kategori === "foto" ? "Foto" : "Video"}
                </label>
                <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer">
                        <input
                            type="file"
                            onChange={(e) => setData("file", e.target.files[0])}
                            className="hidden"
                            accept={data.kategori === "foto" ? "image/*" : "video/*"}
                        />
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-600">
                                {data.file ? data.file.name : `Klik untuk upload ${data.kategori}`}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                {data.kategori === "foto"
                                    ? "Format: JPG, PNG, GIF (Max. 10MB)"
                                    : "Format: MP4, AVI, MOV (Max. 100MB)"}
                            </p>
                        </div>
                    </label>
                </div>
                {/* Error message untuk file */}
                {errors.file && (
                    <div className="text-red-500 text-xs mt-1">File tidak valid</div>
                )}
            </div>

            {/* Field Tanggal */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tanggal
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
                    <div className="text-red-500 text-xs mt-1">Tanggal tidak valid</div>
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
                    {processing ? "Menyimpan..." : "Simpan Galeri"}
                </button>
            </div>
        </form>
    );
}
