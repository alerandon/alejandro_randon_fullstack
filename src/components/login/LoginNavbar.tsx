import React from 'react';
import AppName from '../common/AppName';

const LoginNavbar: React.FC = () => {
  return (
    <header className="py-5 px-5 sticky top-0 flex justify-center bg-[#222222] z-10 shadow-md">
      <AppName />
    </header>
  );
};

export default LoginNavbar;
