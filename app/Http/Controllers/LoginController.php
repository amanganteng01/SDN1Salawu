<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function tampilanLogin(){
        // Cek apakah user sudah login
        if (Auth::check()) {
            return redirect('/admin/beranda');
        }
        // Menampilkan halaman login jika belum login
        return Inertia::render('Login');
    }
    public function authLogin(Request $request){
        // Validasi inputan dari form login
        $validasi = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
        // Mencoba untuk login dengan inputan yang telah divalidasi
        if (Auth::attempt($validasi)){
            $request->session()->regenerate();
            return redirect('/admin/beranda')->with('success', 'Login successful');
        } else {
            return back()->withErrors([ 'login' => 'Tidak bisa login, cek kembali username dan password anda' ]);
        }
    }

    public function logout(){
        // Melakukan proses logout
        Auth::logout();
        // Mengembalikan ke halaman login dengan pesan sukses
        return redirect('/login');
    }
}
