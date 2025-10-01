import { useForm } from "@inertiajs/react";

export default function TambahEkstrakurikuler({ onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        pembina: "",
        jadwal_latihan: "",
        deskripsi: "",
        gambar: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/simpan/ekstrakurikuler", {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            {/* Nama */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama</label>
                <input
                    type="text"
                    value={data.nama}
                    onChange={(e) => setData("nama", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Masukkan nama ekstrakurikuler"
                />
                {errors.nama && <div className="text-red-500 text-xs mt-1">{errors.nama}</div>}
            </div>

            {/* Pembina */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Pembina</label>
                <input
                    type="text"
                    value={data.pembina}
                    onChange={(e) => setData("pembina", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Masukkan nama pembina"
                />
                {errors.pembina && <div className="text-red-500 text-xs mt-1">{errors.pembina}</div>}
            </div>

            {/* Jadwal Latihan */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Jadwal Latihan</label>
                <input
                    type="text"
                    value={data.jadwal_latihan}
                    onChange={(e) => setData("jadwal_latihan", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Contoh: Senin & Kamis, 15:00 - 17:00"
                />
                {errors.jadwal_latihan && <div className="text-red-500 text-xs mt-1">{errors.jadwal_latihan}</div>}
            </div>

            {/* Deskripsi */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi</label>
                <textarea
                    value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Tuliskan deskripsi singkat"
                />
                {errors.deskripsi && <div className="text-red-500 text-xs mt-1">{errors.deskripsi}</div>}
            </div>

            {/* Gambar */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Gambar</label>
                <input
                    type="file"
                    onChange={(e) => setData("gambar", e.target.files[0])}
                    className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {errors.gambar && <div className="text-red-500 text-xs mt-1">{errors.gambar}</div>}
            </div>

            {/* Tombol */}
            <div className="flex justify-end gap-3">
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
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#E52020] to-[#FBA518] shadow hover:opacity-90 transition"
                >
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </div>
        </form>
    );
}
