import { Awake, Logout } from "@carbon/icons-react";
import React from "react";

const UserNavbar: React.FC = () => {
  return (
    <nav className="flex items-center">
      <p className="text-[#D6F379] font-semibold text-sm pr-1.5 sm:pr-2">Buscar</p>
      <p className="font-semibold text-sm text-nowrap pl-1.5 pr-3 sm:px-4">Mis albumes</p>
      <div className="flex items-center border-white border-l-1 h-2/3 px-1.5 sm:px-4">
        <Logout className="w-full h-full" />
      </div>
      <div className="flex items-center border-white border-l-1 h-2/3 px-1.5 sm:px-4">
        <Awake className="w-full h-full" />
      </div>
    </nav>
  );
};

export default UserNavbar;
