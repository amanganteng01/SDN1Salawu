import { useState, useEffect } from "react";

export default function GunakanWidthWindows() {
    // State untuk menyimpan lebar jendela browser
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Fungsi untuk update state saat ukuran jendela berubah
        const tangani = () => setWidth(window.innerWidth);
        window.addEventListener('resize', tangani);

        // Hapus event listener saat komponen di-unmount
        return () => window.removeEventListener('resize', tangani);
    })

    // Kembalikan nilai lebar jendela saat ini
    return width;
}
