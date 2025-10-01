import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function EditEkstrakurikuler({ ekstrakurikuler, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        pembina: "",
        jadwal_latihan: "",
        deskripsi: "",
        gambar: null,
    });

    useEffect(() => {
        if (ekstrakurikuler) {
            setData({
                nama: ekstrakurikuler.nama || "",
                pembina: ekstrakurikuler.pembina || "",
                jadwal_latihan: ekstrakurikuler.jadwal_latihan || "",
                deskripsi: ekstrakurikuler.deskripsi || "",
                gambar: null,
            });
        }
    }, [ekstrakurikuler]);

    const submit = (e) => {
        e.preventDefault();
        post(`/admin/update/ekstrakurikuler/${ekstrakurikuler.id}`, {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Nama Ekstrakurikuler */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Nama Ekstrakurikuler
                </label>
                <input
                    type="text"
                    value={data.nama}
                    onChange={(e) => setData("nama", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                    placeholder="Masukkan nama ekstrakurikuler"
                />
                {errors.nama && (
                    <div className="text-red-500 text-xs mt-1">{errors.nama}</div>
                )}
            </div>

            {/* Pembina */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Pembina
                </label>
                <input
                    type="text"
                    value={data.pembina}
                    onChange={(e) => setData("pembina", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                    placeholder="Masukkan nama pembina"
                />
                {errors.pembina && (
                    <div className="text-red-500 text-xs mt-1">{errors.pembina}</div>
                )}
            </div>

            {/* Jadwal Latihan */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Jadwal Latihan
                </label>
                <input
                    type="text"
                    value={data.jadwal_latihan}
                    onChange={(e) => setData("jadwal_latihan", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                    placeholder="Contoh: Sabtu, 15.00 WIB"
                />
                {errors.jadwal_latihan && (
                    <div className="text-red-500 text-xs mt-1">{errors.jadwal_latihan}</div>
                )}
            </div>

            {/* Deskripsi */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Deskripsi
                </label>
                <textarea
                    value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm min-h-[120px]
                               focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
                    placeholder="Masukkan deskripsi ekstrakurikuler"
                />
                {errors.deskripsi && (
                    <div className="text-red-500 text-xs mt-1">{errors.deskripsi}</div>
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
