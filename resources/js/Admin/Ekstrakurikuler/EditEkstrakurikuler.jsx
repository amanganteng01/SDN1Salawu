import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { Upload } from "lucide-react";

// Form untuk mengedit ekstrakurikuler yang sudah ada
export default function EditEkstrakurikuler({ ekstrakurikuler, onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        pembina: "",
        jadwal_latihan: "",
        deskripsi: "",
        gambar: null,
    });

    // Untuk mengisi form jika data dalam database sudah ada
    useEffect(() => {
        if (ekstrakurikuler) {
            setData({
                nama: ekstrakurikuler.nama || "",
                pembina: ekstrakurikuler.pembina || "",
                jadwal_latihan: ekstrakurikuler.jadwal_latihan || "",
                deskripsi: ekstrakurikuler.deskripsi || "",
                gambar: null, // Gambar dikosongkan agar tidak overwrite file lama
            });
        }
    }, [ekstrakurikuler]);

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman

        // Kirim data ke endpoint update
        post(`/admin/update/ekstrakurikuler/${ekstrakurikuler.id}`, {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Field Nama Ekstrakurikuler */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Ekstrakurikuler
                </label>
                <input
                    type="text"
                    value={data.nama}
                    onChange={(e) => setData("nama", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan nama ekstrakurikuler"
                />
                {/* Error message untuk judul */}
                {errors.nama && (
                    <div className="text-red-500 text-xs mt-1">Nama Ekstrakurikuler tidak valid</div>
                )}
            </div>

            {/* Field Pembina */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Pembina
                </label>
                <input
                    type="text"
                    value={data.pembina}
                    onChange={(e) => setData("pembina", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan nama pembina"
                />
                {/* Error message untuk pembina */}
                {errors.pembina && (
                    <div className="text-red-500 text-xs mt-1">Pembina tidak valid</div>
                )}
            </div>

            {/* Field Jadwal Latihan */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Jadwal Latihan
                </label>
                <input
                    type="text"
                    value={data.jadwal_latihan}
                    onChange={(e) => setData("jadwal_latihan", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Contoh: Sabtu, 15.00 WIB"
                />
                {/* Error message untuk jadwal latihan */}
                {errors.jadwal_latihan && (
                    <div className="text-red-500 text-xs mt-1">Jadwal latihan tidak valid</div>
                )}
            </div>

            {/* Field Deskripsi */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Deskripsi
                </label>
                <textarea
                    value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm min-h-[120px]
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan deskripsi ekstrakurikuler"
                />
                {/* Error message untuk deskripsi */}
                {errors.deskripsi && (
                    <div className="text-red-500 text-xs mt-1">Deskripsi tidak valid</div>
                )}
            </div>

            {/* Field Upload Gambar */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Gambar Ekstrakurikuler (Opsional)
                </label>
                <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer">
                        <input
                            type="file"
                            onChange={(e) => setData("gambar", e.target.files[0])}
                            className="hidden"
                            accept="image/*"
                        />
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                            <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-600">
                                {data.gambar ? data.gambar.name : "Klik untuk upload gambar baru"}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">Kosongkan jika tidak ingin mengubah gambar</p>
                        </div>
                    </label>
                </div>
                {/* Error message untuk gambar */}
                {errors.gambar && (
                    <div className="text-red-500 text-xs mt-1">Gambar tidak valid</div>
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
                    {processing ? "Memperbarui..." : "Perbarui Ekstrakurikuler"}
                </button>
            </div>
        </form>
    );
}
