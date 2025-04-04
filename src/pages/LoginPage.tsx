import React from 'react';
import LoginNavbar from '../components/login/LoginNavbar';
import LoginMain from '../components/login/LoginMain';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full mx-auto pb-10">
      <LoginNavbar />
      <LoginMain />
    </div>
  );
};

export default LoginPage;
