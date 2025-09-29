<?php

namespace Database\Seeders;

use App\Models\Guru;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Kepala Sekolah',
            'username' => 'admin123',
            'password' => bcrypt('123'),
            'role' => 'Admin',
        ]);
        User::create([
            'name' => 'Guru 1',
            'username' => 'guru1',
            'password' => bcrypt('guru1'),
            'role' => 'Operator',
        ]);
        Guru::create([
            'nama' => 'Guru 1',
            'nip' => '1234567890',
            'mapel' => 'Matematika',
            'foto' => 'guru1.jpg',
        ]);
        Guru::create([
            'nama' => 'Guru 2',
            'nip' => '1234567891',
            'mapel' => 'PAI',
            'foto' => 'guru2.jpg',
        ]);
    }
}
