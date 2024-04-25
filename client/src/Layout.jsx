import React, { useState } from 'react';
import LoadingIcon from './pages/LoadingIcon'; // assuming the loading icon component is defined in LoadingIcon.js
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
export default function Layout() {
  const [loading, setLoading] = useState(true);

  // Simulating loading completion after 2 seconds
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <LoadingIcon />
      ) : (
        <div className='py-4 px-8 flex flex-col min-h-screen'>
          <Header />
          <main className="flex-grow mt-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
