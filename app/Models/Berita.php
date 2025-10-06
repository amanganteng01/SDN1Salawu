<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    // Menentukan tabel yang tidak digunakan
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
