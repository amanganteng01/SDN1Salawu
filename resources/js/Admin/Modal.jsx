import GunakanWidthWindows from "./GunakanWidthWindows";
import { useEffect, useState } from "react";

// Komponen Modal untuk menampilkan konten dalam pop-up
export default function Modal({ isOpen, onClose, title, children }) {
  // Jika modal tidak terbuka, return null (tidak render apapun)
  if (!isOpen) return null;

  // Gunakan custom hook untuk mendapatkan lebar jendela browser
  const width = GunakanWidthWindows();

  // State untuk mengecek apakah lebar layar > 768 (mode desktop)
  const [widthMd, setWidthMd] = useState(false);
  
  // useEffect dijalankan setiap kali 'width' berubah
  useEffect(() => {
    if (width > 768) {
      setWidthMd(true); // jika layar lebar, set ke true
    } else {
      setWidthMd(false); // jika layar kecil, set ke false
    }
  }, [width]);

  // Render tampilan modal
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay background gelap */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        // onClick={onClose} // bisa diaktifkan kalau mau menutup modal saat klik overlay
      ></div>

      {widthMd ? (
        <>
          {/* Modal versi desktop */}
          <div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">{title}</h2>
            </div>
            <div className="overflow-y-auto pr-2 flex-1">{children}</div>
          </div>
        </>
      ) : (
        <>
          {/* Modal versi mobile */}
          <div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 max-h-[90vh] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">{title}</h2>
            </div>
            <div className="overflow-y-auto pr-2 flex-1">{children}</div>
          </div>
        </>
      )}
    </div>
  );
}
