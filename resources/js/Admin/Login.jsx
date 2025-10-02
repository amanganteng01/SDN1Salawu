import { useForm, usePage } from "@inertiajs/react";

export default function Login() {
    // Hook useForm untuk meng-handle data form login (username & password)
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });

    // Fungsi submit untuk mengirim data ke backend via Inertia
    const submit = (e) => {
        e.preventDefault(); // mencegah reload halaman
        post("/login/auth", {
            onSuccess: () => reset(), // reset form jika berhasil login
        });
    };

    // Mengambil flash message (pesan sukses/gagal) dari props Inertia
    const { flash } = usePage().props;

    return (
        <div className={`flex items-center justify-center min-h-screen`}>
            <div className="w-[90%] sm:w-[400px] bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-800 mb-6">
                    Login Admin
                </h2>

                {/* Flash & Error */}
                {flash?.success && (
                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                        {flash.success}
                    </div>
                )}
                {errors.login && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {errors.login}
                    </div>
                )}

                {/* Form Login */}
                <form onSubmit={submit} className="space-y-4">
                    {/* Input Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={data.username}
                            onChange={(e) => setData("username", e.target.value)} // update state form
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.username && (
                            <p className="text-red-600 text-xs mt-1">{errors.username}</p>
                        )}
                    </div>

                    {/* Input Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)} // update state form
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        disabled={processing} // disable tombol saat sedang memproses
                        className="w-full bg-gradient-to-r from-[#E52020] to-[#FBA518] text-white py-2 rounded-md font-medium hover:opacity-90"
                    >
                        {processing ? "Loading..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
