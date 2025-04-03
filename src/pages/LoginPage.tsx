import { FC } from 'react';
import LoginContent from '../components/login/LoginContent';
import LoginNavbar from '../components/login/LoginNavbar';
import DiagonalArrow from '../assets/icons/DiagonalArrow.svg';

const LoginPage: FC = () => {
  return (
    <div className="flex flex-col w-full max-w-xl lg:max-w-none mx-auto">
      <LoginNavbar />
      <main className="flex flex-col items-center md:items-start justify-center h-full pt-16 md:pt-28 gap-12 md:gap-20">
        <div
          className="
          w-[222px] h-[222px]
          md:w-[400px] md:h-[400px]
        "
        >
          <DiagonalArrow />
        </div>
        <LoginContent />
      </main>
    </div>
  );
};

export default LoginPage;
