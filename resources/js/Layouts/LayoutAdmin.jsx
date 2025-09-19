import { Link, router } from "@inertiajs/react"

const menus = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/daftar/guru", label: "Daftar Guru" },
    { href: "/ekstrakurikuler", label: "Ekstrakulikuler" },
    { href: "#", label: "Dll" },
];

export default function LayoutAdmin({children}){

    const ukuranNavbtn =`
        flex font-light items-center border-black/20 border-r
        h-[15px] text-xs px-3
        sm:h-[17px] sm:text-sm sm:px-4
        md:h-[22px] md:text-base md:px-5
        lg:h-[27px] lg:text-lg lg:plx-6
        xl:h-[32px] xl:text-xl xl:px-7
        2xl:h-[37px] 2xl:text-2xl 2xl:px-8
    `

    return (
        <>
            <header className="flex flex-col border-b border-black fixed top-0 bg-white max-w-[1920px] w-full z-10">
                <div className="flex border-b border-black/20">
                    <div className="
                        flex items-center font-bold
                        h-[24px] text-sm pl-3
                        sm:h-[24px] sm:text-lg sm:pl-4
                        md:h-[32px] md:text-xl md:pl-5
                        lg:h-[40px] lg:text-2xl lg:pl-6
                        xl:h-[48px] xl:text-3xl xl:pl-7
                        2xl:h-[56px] 2xl:text-4xl 2xl:pl-8
                        ">
                        SDN 1 Salawu
                    </div>
                </div>
                <div className="flex">
                    { menus.map((menu, i) => (
                        <Link className={ukuranNavbtn} href={menu.href}>
                            {menu.label}
                        </Link>
                    ))}
                </div>
            </header>

            <main className="
                flex flex-col
                px-3 py-1 gap-1 mt-5
                sm:px-4 sm:py-2 sm:gap-2 sm:mt-5.5
                md:px-5 md:py-3 md:gap-3 md:mt-9
                lg:px-6 lg:py-4 lg:gap-4 lg:mt-12
                xl:px-7 xl:py-5 xl:gap-5 xl:mt-15
                2xl:px-8 2xl:py-6 2xl:gap-6 2xl:mt-18
            " style={{ backgroundColor: "#FAF6E9" }}>{children}</main>

            <footer className="flex justify-center items-center border-t border-black p-3
                sm:p-4
                md:p-5
                lg:p-6
                xl:p-7
                2xl:p-8
            ">
                <div className="
                    font-light text-center
                    text-xs
                    sm:text-sm
                    md:text-base
                    lg:text-lg
                    xl:text-xl
                    2xl:text-2xl
                ">
                    &copy; 2025 SDN 1 Salawu. All rights reserved.
                </div>
            </footer>
        </>
    )
}
