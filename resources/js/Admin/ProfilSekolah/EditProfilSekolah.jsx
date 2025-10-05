import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { Upload, School, User, MapPin, Phone, Info, Calendar, FileText, Target, Heart } from "lucide-react";

export default function EditProfilSekolah({ profil, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_sekolah: "",
        kepala_sekolah: "",
        foto: null,
        logo: null,
        npsn: "",
        alamat: "",
        kontak: "",
        visi: "",
        misi: "",
        tahun_berdiri: "",
        deskripsi: "",
        nilai_budaya: "",
    });

    useEffect(() => {
        if (profil) {
            setData({
                nama_sekolah: profil.nama_sekolah || "",
                kepala_sekolah: profil.kepala_sekolah || "",
                foto: null,
                logo: null,
                npsn: profil.npsn || "",
                alamat: profil.alamat || "",
                kontak: profil.kontak || "",
                visi: profil.visi || "",
                misi: profil.misi || "",
                tahun_berdiri: profil.tahun_berdiri || "",
                deskripsi: profil.deskripsi || "",
                nilai_budaya: profil.nilai_budaya || "",
            });
        }
    }, [profil]);

    const submit = (e) => {
        e.preventDefault();
        
        // PERBAIKAN: Gunakan post dengan forceFormData untuk file upload
        post(`/admin/update/profil/sekolah/${profil.id}`, {
            forceFormData: true, // PENTING untuk upload file
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
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
                        min="1900"
                        max={new Date().getFullYear()}
                    />
                </div>
                {errors.tahun_berdiri && (
                    <div className="text-red-500 text-xs mt-1">{errors.tahun_berdiri}</div>
                )}
            </div>

            {/* Field Visi */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Visi Sekolah
                </label>
                <div className="relative">
                    <Target className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea 
                        value={data.visi} 
                        onChange={(e) => setData("visi", e.target.value)} 
                        rows="3"
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Tuliskan visi sekolah..."
                    />
                </div>
                {errors.visi && (
                    <div className="text-red-500 text-xs mt-1">{errors.visi}</div>
                )}
            </div>

            {/* Field Misi */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Misi Sekolah
                </label>
                <div className="relative">
                    <Info className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea 
                        value={data.misi} 
                        onChange={(e) => setData("misi", e.target.value)} 
                        rows="4"
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Tuliskan misi sekolah..."
                    />
                </div>
                {errors.misi && (
                    <div className="text-red-500 text-xs mt-1">{errors.misi}</div>
                )}
            </div>

            {/* Field Deskripsi */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Deskripsi Sekolah
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
                        placeholder="Tuliskan deskripsi lengkap tentang sekolah..."
                    />
                </div>
                {errors.deskripsi && (
                    <div className="text-red-500 text-xs mt-1">{errors.deskripsi}</div>
                )}
            </div>

            {/* Field Nilai Budaya */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nilai & Budaya Sekolah
                </label>
                <div className="relative">
                    <Heart className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea 
                        value={data.nilai_budaya} 
                        onChange={(e) => setData("nilai_budaya", e.target.value)} 
                        rows="4"
                        className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                   transition-colors"
                        placeholder="Tuliskan nilai-nilai dan budaya sekolah..."
                    />
                </div>
                {errors.nilai_budaya && (
                    <div className="text-red-500 text-xs mt-1">{errors.nilai_budaya}</div>
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
                {errors.foto && (
                    <div className="text-red-500 text-xs mt-1">{errors.foto}</div>
                )}
            </div>

            {/* Tombol Aksi */}
            <div className="flex items-center justify-end gap-3 pt-4 sticky bottom-0 bg-white pb-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 
                               hover:bg-slate-100 rounded-lg transition-colors"
                >
                    Batal
                </button>
                
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