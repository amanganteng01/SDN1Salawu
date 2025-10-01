<?php

use App\Http\Middleware\AuthLogin;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Menambahkan middleware kustom ke grup 'petugas'
        $middleware->appendToGroup('petugas', AuthLogin::class);
        // Menambahkan middleware Inertia ke grup 'web'
        $middleware->web(append: [
            HandleInertiaRequests::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
