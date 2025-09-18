import Layout from "../Layouts/Layout";

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

    const text = `

    `

    return (
        <>
            {/* Hero Section */}
            <div className={bungkus}>
                <img src="assets/image/sd.png" alt="" className="
                    w-full object-fill rounded
                    h-auto
                " />
            </div>
            <div className={bungkus}>
                <div className={judul}>Tentang Sekolah Ini</div>
                <div className="flex">
                    <img src="assets\image\tutwurihandayani.png" alt="" className="
                        object-fill rounded
                        w-1/3 h-auto
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
        </>
    )
}
