import { FC } from "react";
import LoginContent from "../components/login/LoginContent";
import LoginNavbar from "../components/login/LoginNavbar";
import DiagonalArrow from "../assets/icons/DiagonalArrow.svg";

const LoginPage: FC = () => {
  return (
    <div className="flex flex-col w-full max-w-2xl lg:max-w-7xl mx-auto">
      <LoginNavbar />
      <main className="flex flex-col items-center md:items-start justify-center h-full pt-16 gap-12 ">
        <div className="w-[222px] h-[222px] md:w-[400px] md:h-[400px]">
          <DiagonalArrow />
        </div>
        <LoginContent />
      </main>
    </div>
  );
}

export default LoginPage;
