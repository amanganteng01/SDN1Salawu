import { useForm } from "@inertiajs/react";

export default function TambahUser({ onClose }) {
  // useForm digunakan untuk mengelola state form, error, status submit, dan reset form
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    username: "",
    password: "",
  });

  // Fungsi submit dipanggil ketika form dikirim
  const submit = (e) => {
    e.preventDefault(); // cegah reload halaman
    post("/admin/simpan/user", {
      onSuccess: () => {
        reset();   // reset form setelah berhasil simpan
        onClose(); // tutup modal/form setelah sukses
      },
    });
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* Input Nama */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nama
        </label>
        <input
          type="text"
          value={data.name} // binding value ke state form
          onChange={(e) => setData("name", e.target.value)} // update state
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Masukkan nama"
        />
        {/* tampilkan error validasi jika ada */}
        {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
      </div>

      {/* Input Username */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Username
        </label>
        <input
          type="text"
          value={data.username}
          onChange={(e) => setData("username", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Masukkan username"
        />
        {errors.username && <div className="text-red-500 text-xs mt-1">{errors.username}</div>}
      </div>

      {/* Input Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData("password", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Masukkan password"
        />
        {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
      </div>

      {/* Tombol Aksi */}
      <div className="flex items-center justify-end gap-3 pt-2">
        {/* Tombol batal → hanya menutup modal */}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
        >
          Batal
        </button>

        {/* Tombol simpan → submit form ke server */}
        <button
          type="submit"
          disabled={processing} // disable saat sedang proses submit
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
