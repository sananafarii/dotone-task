import React from 'react';
import Header from '../layout/Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container-custom">
        {children}
      </main>
    </div>
  );
};

export default Layout;