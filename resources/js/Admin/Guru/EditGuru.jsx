import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { Upload, User, IdCard, BookOpen } from "lucide-react";

/**
 * Komponen EditGuru - Form untuk mengedit guru yang sudah ada
 * Menggunakan useForm dari Inertia untuk handle form state dan submission
 */
export default function EditGuru({ guru, onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        nip: "",
        mapel: "",
        foto: null,
    });

    /**
     * Effect untuk mengisi form dengan data guru yang akan diedit
     * Di-trigger ketika prop guru berubah
     */
    useEffect(() => {
        if (guru) {
            setData({
                nama: guru.nama || "",
                nip: guru.nip || "",
                mapel: guru.mapel || "",
                foto: null, // Foto dikosongkan agar tidak overwrite file lama
            });
        }
    }, [guru]);

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        
        // Kirim data ke endpoint update
        post(`/admin/update/guru/${guru.id}`, {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Field Nama Guru */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Guru
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.nama}
                        onChange={(e) => setData("nama", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan nama lengkap guru"
                    />
                </div>
                {/* Error message untuk nama */}
                {errors.nama && (
                    <div className="text-red-500 text-xs mt-1">{errors.nama}</div>
                )}
            </div>

            {/* Field NIP */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    NIP
                </label>
                <div className="relative">
                    <IdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.nip}
                        onChange={(e) => setData("nip", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan NIP (opsional)"
                    />
                </div>
                {/* Error message untuk NIP */}
                {errors.nip && (
                    <div className="text-red-500 text-xs mt-1">{errors.nip}</div>
                )}
            </div>

            {/* Field Mata Pelajaran */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mata Pelajaran
                </label>
                <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.mapel}
                        onChange={(e) => setData("mapel", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Contoh: Matematika, IPA, Bahasa Indonesia"
                    />
                </div>
                {/* Error message untuk mata pelajaran */}
                {errors.mapel && (
                    <div className="text-red-500 text-xs mt-1">{errors.mapel}</div>
                )}
            </div>

            {/* Field Upload Foto */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Foto Guru (Opsional)
                </label>
                <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer">
                        <input
                            type="file"
                            onChange={(e) => setData("foto", e.target.files[0])}
                            className="hidden"
                            accept="image/*"
                        />
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-600">
                                {data.foto ? data.foto.name : "Klik untuk upload foto baru"}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">Kosongkan jika tidak ingin mengubah foto</p>
                        </div>
                    </label>
                </div>
                {/* Error message untuk foto */}
                {errors.foto && (
                    <div className="text-red-500 text-xs mt-1">{errors.foto}</div>
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
                    {processing ? "Memperbarui..." : "Perbarui Guru"}
                </button>
            </div>
        </form>
    );
}