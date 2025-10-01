<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function daftarUser()
    {
        // Mendapatkan level user yang sedang login
        $level = Auth::user()->level;
        // Mengambil semua data user
        $user = User::all();
        // Mengembalikan ke halaman daftar user
        return inertia('User/DaftarUser', [
            'users' => $user, 'level' => $level
        ]);
    }

    public function simpanUser(Request $request)
    {
        // Validasi inputan dari form tambah user
        $validasi = $request->validate([
            'name'     => 'required|string|max:100',
            'username'    => 'required|string|max:150|unique:users',
            'password' => 'required|string',
        ]);

        // Enkripsi password dan set role sebagai Operator
        $validasi['password'] = bcrypt($validasi['password']);
        // Set role sebagai Operator
        $validasi['role'] = "Operator";

        // Menyimpan data user ke database
        User::create($validasi);
        // Mengembalikan ke halaman daftar user
        return redirect('/admin/daftar/user')->with('success', 'Data user berhasil ditambahkan.');
    }

    public function updateUser(Request $request, $id)
    {
        // Validasi inputan dari form edit user
        $validasi = $request->validate([
            'name'     => 'nullable|string|max:100',
            'username'    => 'nullable|string|max:150|unique:users,username,',
            'password' => 'nullable|string',
        ]);

        // Set role sebagai Operator
        $validasi ['role'] = "Operator";

        // Enkripsi password jika diisi
        if ($request->filled('password')) {
            $validasi['password'] = bcrypt($validasi['password']);
        } else {
            unset($validasi['password']);
        }

        // Memperbarui data user
        User::where('id', $id)->update($validasi);
        // Mengembalikan ke halaman daftar user
        return redirect('/admin/daftar/user')->with('success', 'Data user berhasil diupdate.');
    }

    public function deleteUser(Request $request, $id)
    {
        // Menghapus data user berdasarkan id
        User::where('id', $id)->delete();
        // Mengembalikan ke halaman daftar user
        return redirect('/admin/daftar/user')->with('success', 'Data user berhasil dihapus.');
    }
}
