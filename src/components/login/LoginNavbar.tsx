import React from 'react';
import AppName from '../common/AppName';

const LoginNavbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex justify-center bg-[#222222] px-5 py-5 shadow-md">
      <AppName />
    </header>
  );
};

export default LoginNavbar;
