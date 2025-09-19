import Layout from "../Layouts/Layout";
import { User, GraduationCap } from "lucide-react";

export default function Beranda(){

    const bungkus = `
        flex flex-col bg-white rounded
        p-3 gap-1
        sm:p-4 sm:gap-2
        md:p-5 md:gap-3
        lg:p-6 lg:gap-4
        xl:p-7 xl:gap-5
        2xl:p-8 2xl:gap-6
    `

    const judul = `
        font-bold
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        xl:text-2xl
        2xl:text-3xl
    `

    const galeri = `
        w-full bg-red-200 h-[200px] rounded
    `

    return (
        <>
            {/* Hero Section */}
            <div className={bungkus}>
                <img src="assets/image/sd.png" alt="" className="
                    w-full object-fill rounded
                    h-[200px]
                    sm:h-[300px]
                    md:h-[350px]
                    lg:h-[400px]
                    xl:h-[500px]
                    2xl:h-[600px]
                " />
            </div>
            {/* Tentang Sekolah */}
            <div className={bungkus}>
                <div className={judul}>Tentang Sekolah Ini</div>
                <div className="flex">
                    <img src="assets\image\tutwurihandayani.png" alt="" className="
                        object-fill rounded
                        w-[100px] h-auto
                        sm:w-[150px]
                        md:w-[200px]
                        lg:w-[250px]
                        xl:w-[300px]
                        2xl:w-[350px]
                    "/>
                    <div className="
                        flex items-center font-normal
                        text-xs text-justify pl-1 h-auto
                        sm:text-sm sm:pl-2
                        md:text-base md:pl-3
                        lg:text-lg lg:pl-4
                        xl:text-xl xl:pl-5
                        2xl:text-2xl 2xl:pl-6
                    ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ab quae molestiae illo quos necessitatibus ratione consequuntur nesciunt, perspiciatis iure officiis numquam dolore velit eius laborum natus sequi molestias error iusto quia labore minima veritatis! Optio aliquid ex animi dolorum necessitatibus asperiores repudiandae omnis obcaecati architecto facere nostrum, ullam accusantium?
                    </div>
                </div>
            </div>
            {/* Jumlah Guru dan Siswa */}
            <div className={bungkus}>
                <div className={judul}>Jumlah Guru Dan Siswa</div>
                <div className="
                    flex justify-center gap-4
                ">
                    <div className="
                        flex justify-start items-center w-1/2 
                        p-3 gap-1.5 border border-black rounded
                        sm:p-4 sm:gap-2
                        md:p-5 md:gap-2.5
                        lg:p-6 lg:gap-3
                        xl:p-7 xl:gap-3.5
                        2xl:p-8 2xl:gap-4
                    ">
                        <GraduationCap className="
                            w-10 h-10
                            sm:w-12 sm:h-12
                            md:w-14 md:h-14
                            lg:w-16 lg:h-16
                            xl:w-18 xl:h-18
                            2xl:w-20 2xl:h-20
                        "/>
                        <div className="
                            font-bold
                            text-sm
                            sm:text-base
                            md:text-lg
                            lg:text-xl
                            xl:text-2xl
                            2xl:text-3xl
                        ">
                            Jumlah Guru : 10
                        </div>
                    </div>
                    <div className="
                        flex justify-start items-center w-1/2 
                        p-3 gap-1.5 border border-black rounded
                        sm:p-4 sm:gap-2
                        md:p-5 md:gap-2.5
                        lg:p-6 lg:gap-3
                        xl:p-7 xl:gap-3.5
                        2xl:p-8 2xl:gap-4
                    ">
                        <User className="
                            w-10 h-10
                            sm:w-12 sm:h-12
                            md:w-14 md:h-14
                            lg:w-16 lg:h-16
                            xl:w-18 xl:h-18
                            2xl:w-20 2xl:h-20
                        "/>
                        <div className="
                            font-bold
                            text-sm
                            sm:text-base
                            md:text-lg
                            lg:text-xl
                            xl:text-2xl
                            2xl:text-3xl
                        ">
                            Jumlah Siswa : 10
                        </div>
                    </div>
                </div>
            </div>
            <div className={bungkus}>
                <div className={judul}>Galeri</div>
                <div className="
                    grid grid-cols-1 gap-1.5
                    sm:gap-2 md:grid-cols-2 
                    md:gap-2.5 xl:grid-cols-3
                    xl:gap-3
                    2xl:gap-3.5
                ">
                    <div class={galeri}>Gambar1</div>
                    <div class={galeri}>Gambar2</div>
                    <div class={galeri}>Gambar3</div>
                    <div class={galeri}>Gambar4</div>
                    <div class={galeri}>Gambar5</div>
                    <div class={galeri}>Gambar6</div>
                </div>
            </div>
        </>
    )
}
