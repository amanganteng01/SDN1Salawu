import GunakanWidthWindows from "./GunakanWidthWindows";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  const width = GunakanWidthWindows();
  const [widthMd, setWidthMd] = useState(false);

  useEffect(() => {
    if (width > 768) {
      setWidthMd(true);
    }else{
      setWidthMd(false);
    }
  },[width]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        // onClick={onClose}
      ></div>

      {widthMd ? (
        <>
          {/* Modal Box */}
          <div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] p-6 flex flex-col
            "
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">{title}</h2>
              {/* <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button> */}
            </div>
            <div className="overflow-y-auto pr-2 flex-1" >{children}</div>
          </div>
        </>
      ):(
        <>
          {/* Modal Box */}
          <div
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 max-h-[90vh] flex flex-col
            "
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">{title}</h2>
              {/* <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button> */}
            </div>
            <div className="overflow-y-auto pr-2 flex-1" >{children}</div>
          </div>
        </>
      )}
    </div>

  );
}
