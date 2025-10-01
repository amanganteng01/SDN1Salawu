import { useForm } from "@inertiajs/react";

export default function TambahProfilSekolah({ onClose }) {
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

  const submit = (e) => {
    e.preventDefault();
    post("/admin/simpan/profil/sekolah", {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Sekolah</label>
        <input type="text" value={data.nama_sekolah} onChange={(e) => setData("nama_sekolah", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Kepala Sekolah</label>
        <input type="text" value={data.kepala_sekolah} onChange={(e) => setData("kepala_sekolah", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">NPSN</label>
        <input type="text" value={data.npsn} onChange={(e) => setData("npsn", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat</label>
        <input type="text" value={data.alamat} onChange={(e) => setData("alamat", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Kontak</label>
        <input type="text" value={data.kontak} onChange={(e) => setData("kontak", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Visi & Misi</label>
        <textarea value={data.visi_misi} onChange={(e) => setData("visi_misi", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Tahun Berdiri</label>
        <input type="number" value={data.tahun_berdiri} onChange={(e) => setData("tahun_berdiri", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi</label>
        <textarea value={data.deskripsi} onChange={(e) => setData("deskripsi", e.target.value)} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Foto</label>
        <input type="file" onChange={(e) => setData("foto", e.target.files[0])} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Logo</label>
        <input type="file" onChange={(e) => setData("logo", e.target.files[0])} className="w-full border rounded-xl px-4 py-2" />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600">Batal</button>
        <button type="submit" disabled={processing} className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#E52020] to-[#FBA518]">Simpan</button>
      </div>
    </form>
  );
}
