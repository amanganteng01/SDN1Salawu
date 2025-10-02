import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout';
import LayoutAdmin from '@/Layouts/LayoutAdmin';

createInertiaApp({
  // Fungsi untuk menentukan halaman mana yang akan dirender
  resolve: name => {
    // Import semua file di folder Pages
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    // Import semua file di folder Admin
    const admin = import.meta.glob('./Admin/**/*.jsx', { eager: true })

    let page;

    // Jika halaman ada di folder Pages → pakai Layout biasa
    if (pages[`./Pages/${name}.jsx`]) {
        page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <Layout children={page} />);
    // Jika halaman ada di folder Admin → pakai Layout Admin
    } else if (admin[`./Admin/${name}.jsx`]) {
        page = admin[`./Admin/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <LayoutAdmin children={page} />);
    // Jika tidak ditemukan → tampilkan error
    } else {
        console.error(`Page not found: ${name}`);
        return null;
    }

    return page;
  },

  // Fungsi setup untuk merender aplikasi Inertia ke root element
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
