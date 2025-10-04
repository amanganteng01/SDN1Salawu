import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { Upload, School, User, MapPin, Phone, Info, Calendar, FileText } from "lucide-react";

/**
 * Komponen EditProfilSekolah - Form untuk mengedit profil sekolah yang sudah ada
 * Menggunakan useForm dari Inertia untuk handle form state dan submission
 */
export default function EditProfilSekolah({ profil, onClose }) {
    // Inisialisasi form dengan useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_sekolah: "",
        kepala_sekolah: "",
        foto: null,
        logo: null,
        npsn: "",
        alamat: "",
        kontak: "",
        visi_misi: "",
        tahun_berdiri: "",
        deskripsi: "",
    });

    /**
     * Effect untuk mengisi form dengan data profil sekolah yang akan diedit
     * Di-trigger ketika prop profil berubah
     */
    useEffect(() => {
        if (profil) {
            setData({
                nama_sekolah: profil.nama_sekolah || "",
                kepala_sekolah: profil.kepala_sekolah || "",
                foto: null, // Foto dikosongkan agar tidak overwrite file lama
                logo: null, // Logo dikosongkan agar tidak overwrite file lama
                npsn: profil.npsn || "",
                alamat: profil.alamat || "",
                kontak: profil.kontak || "",
                visi_misi: profil.visi_misi || "",
                tahun_berdiri: profil.tahun_berdiri || "",
                deskripsi: profil.deskripsi || "",
            });
        }
    }, [profil]);

    /**
     * Fungsi handle submit form
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        
        // Kirim data ke endpoint update
        post(`/admin/update/profil/sekolah/${profil.id}`, {
            onSuccess: () => {
                reset();    // Reset form state
                onClose();  // Tutup modal
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5 max-h-[70vh] overflow-y-auto">
            {/* Field Nama Sekolah */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nama Sekolah
                </label>
                <div className="relative">
                    <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        value={data.nama_sekolah} 
                        onChange={(e) => setData("nama_sekolah", e.target.value)} 
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan nama sekolah"
                    />
                </div>
                {/* Error message untuk nama sekolah */}
                {errors.nama_sekolah && (
                    <div className="text-red-500 text-xs mt-1">{errors.nama_sekolah}</div>
                )}
            </div>

            {/* Field Kepala Sekolah */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Kepala Sekolah
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        value={data.kepala_sekolah} 
                        onChange={(e) => setData("kepala_sekolah", e.target.value)} 
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan nama kepala sekolah"
                    />
                </div>
                {/* Error message untuk kepala sekolah */}
                {errors.kepala_sekolah && (
                    <div className="text-red-500 text-xs mt-1">{errors.kepala_sekolah}</div>
                )}
            </div>

            {/* Field NPSN */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    NPSN
                </label>
                <input 
                    type="text" 
                    value={data.npsn} 
                    onChange={(e) => setData("npsn", e.target.value)} 
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                               transition-colors"
                    placeholder="Masukkan NPSN sekolah"
                />
                {/* Error message untuk NPSN */}
                {errors.npsn && (
                    <div className="text-red-500 text-xs mt-1">{errors.npsn}</div>
                )}
            </div>

            {/* Field Alamat */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Alamat
                </label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea 
                        value={data.alamat} 
                        onChange={(e) => setData("alamat", e.target.value)} 
                        rows="3"
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan alamat lengkap sekolah"
                    />
                </div>
                {/* Error message untuk alamat */}
                {errors.alamat && (
                    <div className="text-red-500 text-xs mt-1">{errors.alamat}</div>
                )}
            </div>

            {/* Field Kontak */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Kontak
                </label>
                <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        value={data.kontak} 
                        onChange={(e) => setData("kontak", e.target.value)} 
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan nomor telepon sekolah"
                    />
                </div>
                {/* Error message untuk kontak */}
                {errors.kontak && (
                    <div className="text-red-500 text-xs mt-1">{errors.kontak}</div>
                )}
            </div>

            {/* Field Tahun Berdiri */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tahun Berdiri
                </label>
                <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="number" 
                        value={data.tahun_berdiri} 
                        onChange={(e) => setData("tahun_berdiri", e.target.value)} 
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Masukkan tahun berdiri sekolah"
                    />
                </div>
                {/* Error message untuk tahun berdiri */}
                {errors.tahun_berdiri && (
                    <div className="text-red-500 text-xs mt-1">{errors.tahun_berdiri}</div>
                )}
            </div>

            {/* Field Visi & Misi */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Visi & Misi
                </label>
                <div className="relative">
                    <Info className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea 
                        value={data.visi_misi} 
                        onChange={(e) => setData("visi_misi", e.target.value)} 
                        rows="4"
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Tuliskan visi dan misi sekolah..."
                    />
                </div>
                {/* Error message untuk visi & misi */}
                {errors.visi_misi && (
                    <div className="text-red-500 text-xs mt-1">{errors.visi_misi}</div>
                )}
            </div>

            {/* Field Deskripsi */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Deskripsi
                </label>
                <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea 
                        value={data.deskripsi} 
                        onChange={(e) => setData("deskripsi", e.target.value)} 
                        rows="4"
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Tuliskan deskripsi sekolah..."
                    />
                </div>
                {/* Error message untuk deskripsi */}
                {errors.deskripsi && (
                    <div className="text-red-500 text-xs mt-1">{errors.deskripsi}</div>
                )}
            </div>

            {/* Field Upload Logo */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Logo Sekolah (Opsional)
                </label>
                <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer">
                        <input
                            type="file"
                            onChange={(e) => setData("logo", e.target.files[0])}
                            className="hidden"
                            accept="image/*"
                        />
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                            <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-600">
                                {data.logo ? data.logo.name : "Klik untuk upload logo baru"}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">Kosongkan jika tidak ingin mengubah logo</p>
                        </div>
                    </label>
                </div>
                {/* Error message untuk logo */}
                {errors.logo && (
                    <div className="text-red-500 text-xs mt-1">{errors.logo}</div>
                )}
            </div>

            {/* Field Upload Foto */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Foto Sekolah (Opsional)
                </label>
                <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer">
                        <input
                            type="file"
                            onChange={(e) => setData("foto", e.target.files[0])}
                            className="hidden"
                            accept="image/*"
                        />
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                            <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
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
            <div className="flex items-center justify-end gap-3 pt-4 sticky bottom-0 bg-white pb-2">
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
                    {processing ? "Memperbarui..." : "Perbarui Profil"}
                </button>
            </div>
        </form>
    );
}