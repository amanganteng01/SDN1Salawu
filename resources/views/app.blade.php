<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Atur encoding karakter -->
    <meta charset="UTF-8">
    <!-- Responsive viewport untuk mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Mode kompatibilitas IE -->
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Judul halaman (ambil dari config app Laravel, default "SDN 1 Salawu") -->
    <title>{{ config('app.name', 'SDN 1 Salawu') }}</title>

    <!-- Import file CSS hasil build Vite -->
    @vite('resources/css/app.css')
    <!-- Refresh otomatis React saat development -->
    @viteReactRefresh
    <!-- Import file JS React utama -->
    @vite('resources/js/app.jsx')
    <!-- Untuk meta/title dinamis dari Inertia -->
    @inertiaHead
</head>
<body class="max-w-[1920px] mx-auto flex justify-center items-start pt-5">
    <!-- Container utama aplikasi Inertia -->
    <div class="max-w-[1920px] w-full">
        @inertia <!-- Tempat render komponen Inertia -->
    </div>
</body>
</html>
