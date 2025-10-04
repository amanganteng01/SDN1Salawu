import { useForm } from "@inertiajs/react";
import { User, UserCircle, Lock } from "lucide-react";

/**
 * Komponen TambahUser - Form untuk menambahkan user baru
 * Menggunakan useForm dari Inertia untuk handle form state dan submission
 */
export default function TambahUser({ onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        username: "",
        password: "",
        role: "Officer", // Default role
    });

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        
        // Kirim data ke endpoint simpan
        post("/admin/simpan/user", {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Field Nama */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Lengkap
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan nama lengkap"
                    />
                </div>
                {/* Error message untuk nama */}
                {errors.name && (
                    <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                )}
            </div>

            {/* Field Username */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Username
                </label>
                <div className="relative">
                    <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => setData("username", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan username"
                    />
                </div>
                {/* Error message untuk username */}
                {errors.username && (
                    <div className="text-red-500 text-xs mt-1">{errors.username}</div>
                )}
            </div>

            {/* Field Password */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan password"
                    />
                </div>
                {/* Error message untuk password */}
                {errors.password && (
                    <div className="text-red-500 text-xs mt-1">{errors.password}</div>
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
                    {processing ? "Menyimpan..." : "Simpan User"}
                </button>
            </div>
        </form>
    );
}