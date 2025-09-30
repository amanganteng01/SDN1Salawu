import { useForm } from "@inertiajs/react";

export default function TambahGuru({ onClose }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nama: "",
    nip: "",
    mapel: "",
    foto: null,
  });

  const submit = (e) => {
    e.preventDefault();
    post("/admin/simpan/guru", {
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
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nama Guru
        </label>
        <input
          type="text"
          value={data.nama}
          onChange={(e) => setData("nama", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
          placeholder="Masukkan nama guru"
        />
        {errors.nama && (
          <div className="text-red-500 text-xs mt-1">{errors.nama}</div>
        )}
      </div>

      {/* NIP */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          NIP
        </label>
        <input
          type="text"
          value={data.nip}
          onChange={(e) => setData("nip", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
          placeholder="Masukkan NIP"
        />
        {errors.nip && (
          <div className="text-red-500 text-xs mt-1">{errors.nip}</div>
        )}
      </div>

      {/* Mapel */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Mata Pelajaran
        </label>
        <input
          type="text"
          value={data.mapel}
          onChange={(e) => setData("mapel", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
          placeholder="Contoh: Matematika"
        />
        {errors.mapel && (
          <div className="text-red-500 text-xs mt-1">{errors.mapel}</div>
        )}
      </div>

      {/* Foto */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Foto
        </label>
        <input
          type="file"
          onChange={(e) => setData("foto", e.target.files[0])}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 focus:border-[#E52020]"
        />
        {errors.foto && (
          <div className="text-red-500 text-xs mt-1">{errors.foto}</div>
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
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#E52020] to-[#FBA518] hover:from-[#E52020]/80 hover:to-[#FBA518]/80 shadow-md transition"
        >
          {processing ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
}
