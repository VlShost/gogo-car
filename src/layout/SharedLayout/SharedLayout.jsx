import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import css from './SharedLayout.module.css';

import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
