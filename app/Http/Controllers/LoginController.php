<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function tampilanLogin(){
        return Inertia::render('Login');
    }
    public function authLogin(Request $request){
        $validasi = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
        if (Auth::attempt($validasi)){
            $request->session()->regenerate();
            return redirect('/admin/beranda')->with('success', 'Login successful');
        } else {
            return back()->withErrors([ 'login' => 'Tidak bisa login, cek kembali username dan password anda' ]);
        }
    }

    public function logout(){
        Auth::logout();
        return redirect('/login')->with('success','Logout Berhasil');
    }
}
