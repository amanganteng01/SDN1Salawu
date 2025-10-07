import { useForm } from "@inertiajs/react";
import { User, IdCard, Calendar } from "lucide-react";

// Form untuk menambahkan siswa baru
export default function TambahSiswa({ onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        nisn: "",
        nama_siswa: "",
        jenis_kelamin: "L",
        tahun_masuk: "",
    });

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman

        // Kirim data ke endpoint simpan
        post("/admin/simpan/siswa", {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Field NISN */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    NISN
                </label>
                <div className="relative">
                    <IdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.nisn}
                        onChange={(e) => setData("nisn", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan NISN siswa"
                    />
                </div>
                {/* Error message untuk NISN */}
                {errors.nisn && (
                    <div className="text-red-500 text-xs mt-1">Nisn sudah dipakai atau tidak valid</div>
                )}
            </div>

            {/* Field Nama Siswa */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Siswa
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.nama_siswa}
                        onChange={(e) => setData("nama_siswa", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan nama lengkap siswa"
                    />
                </div>
                {/* Error message untuk nama siswa */}
                {errors.nama_siswa && (
                    <div className="text-red-500 text-xs mt-1">Nama Siswa tidak valid</div>
                )}
            </div>

            {/* Field Jenis Kelamin */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Jenis Kelamin
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setData("jenis_kelamin", "L")}
                        className={`flex items-center justify-center gap-2 p-3 border rounded-lg transition-colors ${
                            data.jenis_kelamin === "L"
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-slate-300 hover:border-slate-400"
                        }`}
                    >
                        <span className="text-lg">♂</span>
                        Laki-laki
                    </button>
                    <button
                        type="button"
                        onClick={() => setData("jenis_kelamin", "P")}
                        className={`flex items-center justify-center gap-2 p-3 border rounded-lg transition-colors ${
                            data.jenis_kelamin === "P"
                                ? "border-pink-500 bg-pink-50 text-pink-700"
                                : "border-slate-300 hover:border-slate-400"
                        }`}
                    >
                        <span className="text-lg">♀</span>
                        Perempuan
                    </button>
                </div>
                {/* Error message untuk jenis kelamin */}
                {errors.jenis_kelamin && (
                    <div className="text-red-500 text-xs mt-1">Jenis Kelamin tidak valid</div>
                )}
            </div>

            {/* Field Tahun Masuk */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tahun Masuk
                </label>
                <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="number"
                        value={data.tahun_masuk}
                        onChange={(e) => setData("tahun_masuk", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Contoh: 2024"
                        min="2000"
                        max="2030"
                    />
                </div>
                {/* Error message untuk tahun masuk */}
                {errors.tahun_masuk && (
                    <div className="text-red-500 text-xs mt-1">Tahun Masuk tidak valid</div>
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
                    {processing ? "Menyimpan..." : "Simpan Siswa"}
                </button>
            </div>
        </form>
    );
}
