<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profil_sekolahs', function (Blueprint $table) {
            $table->id();
            $table->string('nama_sekolah');
            $table->string('kepala_sekolah');
            $table->string('foto');
            $table->string('logo');
            $table->string('npsn');
            $table->string('alamat');
            $table->string('kontak');
            $table->text('visi');
            $table->text('misi');
            $table->year('tahun_berdiri');
            $table->text('deskripsi');
            $table->text('nilai_budaya');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profil_sekolahs');
    }
};
