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
        if (Auth::attempt([
            'username' => $request->username,
            'password' => $request->password
        ])){
            $request->session()->regenerate();
            return redirect('/admin/beranda')->with('success', 'Login successful');
        } else {
            return back()->withErrors([ 'login' => 'Can not Login, please check your username and password again' ]);
        }
    }


}
