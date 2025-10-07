import { useForm } from "@inertiajs/react";

// Halaman autentikasi untuk admin dan officer
export default function Login() {
    // Hook useForm untuk meng-handle data form login (username & password)
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });

    /**
     * Fungsi submit untuk mengirim data login ke backend
     * @param {Event} e - Event form submission
     */
    const submit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        post("/login/auth", {
            onSuccess: () => reset(), // Reset form jika berhasil login
        });
    };

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
            {/* Card Login */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-slate-200">
                {/* Header Login */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        SMAN 1 Pasirsalam
                    </h1>
                    {/* <h2 className="text-lg font-semibold text-gray-600">
                        Admin/Officer Panel
                    </h2> */}
                </div>

                {/* Form Login */}
                <form onSubmit={submit} className="space-y-6">
                    {/* Field Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={data.username}
                            onChange={(e) => setData("username", e.target.value)}
                            required
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                       transition-colors placeholder-slate-400"
                            placeholder="Masukkan username Anda"
                        />
                        {/* Error message untuk username */}
                        {errors.username && (
                            <p className="text-red-500 text-xs mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Username tidak valid
                            </p>
                        )}
                    </div>

                    {/* Field Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            required
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                       transition-colors placeholder-slate-400"
                            placeholder="Masukkan password Anda"
                        />
                        {/* Error message untuk password */}
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-2 flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Password tidak valid
                            </p>
                        )}
                    </div>

                    {/* Tombol Login */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg
                                   font-semibold shadow-md hover:from-blue-700 hover:to-blue-800
                                   disabled:from-blue-400 disabled:to-blue-500 disabled:cursor-not-allowed
                                   transition-all duration-200"
                    >
                        {processing ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Memproses...
                            </div>
                        ) : (
                            "Masuk ke Dashboard"
                        )}
                    </button>
                </form>

                {/* Footer Login */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-center text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} SMAN 1 Pasirsalam. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
