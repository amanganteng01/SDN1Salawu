import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout';
import LayoutAdmin from '@/Layouts/LayoutAdmin';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const admin = import.meta.glob('./Admin/**/*.jsx', { eager: true })

    let page;

    if (pages[`./Pages/${name}.jsx`]) {
        page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <Layout children={page} />);
    } else if (admin[`./Admin/${name}.jsx`]) {
        page = admin[`./Admin/${name}.jsx`];
        page.default.layout = page.default.layout || ((page) => <LayoutAdmin children={page} />);
    } else {
        console.error(`Page not found: ${name}`);
        return null;
    }

    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
