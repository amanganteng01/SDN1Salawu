import { useForm } from "@inertiajs/react";

export default function TambahSiswa({ onClose }) {
  // Inisialisasi form dengan state awal menggunakan useForm dari Inertia
  const { data, setData, post, processing, errors, reset } = useForm({
    nisn: "",
    nama_siswa: "",
    jenis_kelamin: "L",
    tahun_masuk: "",
  });

  // Fungsi submit untuk simpan data siswa baru
  const submit = (e) => {
    e.preventDefault();
    post("/admin/simpan/siswa", {
      onSuccess: () => {
        reset();     // reset form setelah berhasil
        onClose();   // tutup modal
      },
    });
  };

  return (
    // Form input siswa baru
    <form onSubmit={submit} className="space-y-5">
      {/* Input NISN */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          NISN
        </label>
        <input
          type="text"
          value={data.nisn}
          onChange={(e) => setData("nisn", e.target.value)} // update state nisn
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Masukkan NISN"
        />
        {errors.nisn && (
          <div className="text-red-500 text-xs mt-1">{errors.nisn}</div>
        )}
      </div>

      {/* Input Nama Siswa */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nama Siswa
        </label>
        <input
          type="text"
          value={data.nama_siswa}
          onChange={(e) => setData("nama_siswa", e.target.value)} // update state nama_siswa
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Masukkan nama siswa"
        />
        {errors.nama_siswa && (
          <div className="text-red-500 text-xs mt-1">{errors.nama_siswa}</div>
        )}
      </div>

      {/* Pilih Jenis Kelamin */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Jenis Kelamin
        </label>
        <select
          value={data.jenis_kelamin}
          onChange={(e) => setData("jenis_kelamin", e.target.value)} // update state jenis_kelamin
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

      {/* Input Tahun Masuk */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Tahun Masuk
        </label>
        <input
          type="number"
          value={data.tahun_masuk}
          onChange={(e) => setData("tahun_masuk", e.target.value)} // update state tahun_masuk
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Contoh: 2023"
        />
        {errors.tahun_masuk && (
          <div className="text-red-500 text-xs mt-1">{errors.tahun_masuk}</div>
        )}
      </div>

      {/* Tombol aksi simpan / batal */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose} // tombol batal menutup modal
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={processing} // disable saat proses kirim data
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
