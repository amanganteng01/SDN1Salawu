<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name', 'SDN 1 Salawu') }}</title>
    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body class="max-w-[1920px] mx-auto flex justify-center items-start pt-5">
    <div class="max-w-[1920px] w-full">
        @inertia
    </div>
</body>
</html>
