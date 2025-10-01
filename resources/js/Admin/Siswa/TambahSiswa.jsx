import { useForm } from "@inertiajs/react";

export default function TambahSiswa({ onClose }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nisn: "",
    nama_siswa: "",
    jenis_kelamin: "L",
    tahun_masuk: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/admin/simpan/siswa", {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* NISN */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          NISN
        </label>
        <input
          type="text"
          value={data.nisn}
          onChange={(e) => setData("nisn", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 
                     focus:border-[#E52020]"
          placeholder="Masukkan NISN"
        />
        {errors.nisn && (
          <div className="text-red-500 text-xs mt-1">{errors.nisn}</div>
        )}
      </div>

      {/* Nama Siswa */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nama Siswa
        </label>
        <input
          type="text"
          value={data.nama_siswa}
          onChange={(e) => setData("nama_siswa", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 
                     focus:border-[#E52020]"
          placeholder="Masukkan nama siswa"
        />
        {errors.nama_siswa && (
          <div className="text-red-500 text-xs mt-1">{errors.nama_siswa}</div>
        )}
      </div>

      {/* Jenis Kelamin */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Jenis Kelamin
        </label>
        <select
          value={data.jenis_kelamin}
          onChange={(e) => setData("jenis_kelamin", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 
                     focus:border-[#E52020]"
        >
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option>
        </select>
        {errors.jenis_kelamin && (
          <div className="text-red-500 text-xs mt-1">{errors.jenis_kelamin}</div>
        )}
      </div>

      {/* Tahun Masuk */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Tahun Masuk
        </label>
        <input
          type="number"
          value={data.tahun_masuk}
          onChange={(e) => setData("tahun_masuk", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60 
                     focus:border-[#E52020]"
          placeholder="Contoh: 2023"
        />
        {errors.tahun_masuk && (
          <div className="text-red-500 text-xs mt-1">{errors.tahun_masuk}</div>
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
                     hover:from-[#E52020]/80 hover:to-[#FBA518]/80 
                     shadow-md transition"
        >
          {processing ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
}
