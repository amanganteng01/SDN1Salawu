import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Menampilkan konten dalam pop-up dialog
export default function Modal({ isOpen, onClose, title, children }) {
    // Jika modal tidak terbuka, return null (tidak render apapun)
    if (!isOpen) return null;

    // State untuk mengecek ukuran layar
    const [isDesktop, setIsDesktop] = useState(false);

    // Effect untuk mendeteksi ukuran layar
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for resize
        window.addEventListener('resize', checkScreenSize);

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        // Cleanup function
        return () => {
            window.removeEventListener('resize', checkScreenSize);
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle overlay click to close modal
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            {/* Overlay background dengan backdrop blur */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

            {/* Modal Container */}
            <div
                className={`
                    relative bg-white rounded-xl shadow-2xl w-full max-h-[90vh]
                    flex flex-col transform transition-all duration-300
                    ${isDesktop
                        ? 'max-w-lg'  // Desktop size
                        : 'max-w-md'  // Mobile size
                    }
                `}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Header Modal */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                    <h2 className="text-xl font-semibold text-slate-800">
                        {title}
                    </h2>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Tutup modal"
                    >
                        <X className="w-5 h-5 text-slate-600" />
                    </button>
                </div>

                {/* Content Area - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
