import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function EditUser({ user, onClose }) {
  // useForm digunakan untuk mengelola state form (data, error, reset, dll.)
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    username: "",
    password: "",
  });

  // useEffect: setiap kali "user" berubah, isi form akan otomatis diset
  useEffect(() => {
    if (user) {
      setData({
        name: user.name || "",
        username: user.username || "",
        password: "", // password dikosongkan saat edit (opsional)
      });
    }
  }, [user]);

  // Fungsi submit untuk mengirim data ke server dengan post()
  const submit = (e) => {
    e.preventDefault(); // cegah reload halaman
    post(`/admin/update/user/${user.id}`, {
      onSuccess: () => {
        reset();   // reset form setelah berhasil update
        onClose(); // tutup modal atau form edit
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
          value={data.name} // binding ke state form
          onChange={(e) => setData("name", e.target.value)} // update state
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Masukkan nama"
        />
        {/* tampilkan error jika ada */}
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

      {/* Input Password (opsional saat edit) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Password (opsional)
        </label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData("password", e.target.value)}
          className="w-full border rounded-xl px-4 py-2 text-sm shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-[#FBA518]/60
                     focus:border-[#E52020]"
          placeholder="Kosongkan jika tidak ingin mengganti password"
        />
        {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
      </div>

      {/* Tombol aksi (Batal & Perbarui) */}
      <div className="flex items-center justify-end gap-3 pt-2">
        {/* Tombol batal → hanya menutup modal */}
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
        >
          Batal
        </button>

        {/* Tombol submit → kirim form */}
        <button
          type="submit"
          disabled={processing} // disable saat proses submit
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white
                     bg-gradient-to-r from-[#E52020] to-[#FBA518]
                     hover:from-[#E52020]/80 hover:to-[#FBA518]/80
                     shadow-md transition"
        >
          {processing ? "Memperbarui..." : "Perbarui"}
        </button>
      </div>
    </form>
  );
}
