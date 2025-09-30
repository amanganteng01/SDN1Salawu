import { useState, useEffect } from "react";

export default function GunakanWidthWindows() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const tangani = () => setWidth(window.innerWidth);
        window.addEventListener('resize', tangani);

        //cleanup saat komponen di-unmount
        return () => window.removeEventListener('resize', tangani);
    })

    return width;
}
