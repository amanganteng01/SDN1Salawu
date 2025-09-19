import { useForm } from "@inertiajs/react"

export default function Login(){
const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    password: '',
})

    return(
        <>
            <div className="
                flex max-w-[1920px] w-full justify-center bg-red-500 h-[100vh] items-center
            ">
                <div className="bg-blue-400
                    flex flex-col justify-center
                    w-[1100px]
                ">
                    p
                </div>
            </div>
        </>
    )
}
