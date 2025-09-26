import { useForm,usePage } from "@inertiajs/react"

export default function Login(){
const { data, setData, post, processing, errors, reset } = useForm({
    username: '',
    password: '',
})

const submit = (e) => {
    e.preventDefault();
    post('/login/auth', {
        onSuccess: () => reset()
    });
}

const { flash } = usePage().props;

    return(
        <>
                {/* Flash success dari backend */}
                {flash?.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    {flash.success}
                </div>
                )}

                {/* Error global (login gagal) */}
                {errors.login && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    {errors.login}
                </div>
                )}
            <div className="
                flex max-w-[1920px] w-full justify-center #FAF6E9 h-[100vh] items-center
            ">
                <div className="
                    flex flex-col justify-center w-[60%] rounded-lg border-black/20 border bg-white
                    py-4
                    sm:py-6
                    md:py-8
                    lg:py-10
                    xl:py-12
                    2xl:py-14
                ">
                    <div className="
                        flex justify-center w-[100%]
                        text-sm pb-3 font-medium
                        sm:text-base sm:pb-4
                        md:text-lg md:pb-5
                        lg:text-xl lg:pb-6
                        xl:text-2xl xl:pb-7
                        2xl:text-3xl 2xl:pb-8
                    ">Login</div>
                    <form onSubmit={submit}>
                        <div className="
                            flex flex-col items-center w-[100%]
                            gap-1
                            sm:gap-1.5
                            md:gap-2
                            lg:gap-2.5
                            xl:gap-3
                            2xl:gap-4
                        ">
                            <label htmlFor="username" className="
                                w-[90%]
                                text-xs
                                sm:text-sm
                                md:text-base
                                lg:text-lg
                                xl:text-xl
                                2xl:text-2xl

                            ">Username :</label>
                            <input 
                                type="text"
                                value={data.username}
                                onChange={ (e) => setData("username", e.target.value)}
                                required
                                className="
                                    w-[90%] rounded-md border px-2 py-1
                                    text-xs
                                    sm:text-sm
                                    md:text-base
                                    lg:text-lg
                                    xl:text-xl
                                    2xl:text-2xl
                                "
                            />
                            {errors.username && <div className="text-red-600">Error : {errors.username}</div>}
                        </div>
                        <div className="
                            flex flex-col items-center w-[100%]
                            gap-1
                            sm:gap-1.5
                            md:gap-2
                            lg:gap-2.5
                            xl:gap-3
                            2xl:gap-4
                        ">
                            <label htmlFor="password" className="
                                w-[90%]
                                text-xs
                                sm:text-sm
                                md:text-base
                                lg:text-lg
                                xl:text-xl
                                2xl:text-2xl
                            ">
                                Password :
                            </label>
                            <input type="password"
                                value={data.password}
                                onChange={ (e) => setData("password", e.target.value) }
                                required
                                className="
                                    w-[90%] rounded-md border px-2 py-1
                                    text-xs
                                    sm:text-sm
                                    md:text-base
                                    lg:text-lg
                                    xl:text-xl
                                    2xl:text-2xl
                                "/>
                        </div>
                        <div className="
                            flex flex-col items-center w-[100%]
                        ">
                            <button 
                                type="submit" 
                                disabled={processing}
                                className="
                                    bg-green-700 text-white rounded-md px-3 py-1 mt-4 w-[90%]
                                    text-sm
                                    sm:text-base
                                    md:text-lg
                                    lg:text-xl
                                    xl:text-2xl
                                    2xl:text-3xl
                                    hover:bg-green-800
                                "
                            >
                            Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
