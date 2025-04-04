import { Awake, Logout } from "@carbon/icons-react";
import React from "react";

const UserNavbar: React.FC = () => {
  return (
    <nav className="flex items-center">
      <p className="text-[#D6F379] font-semibold text-[10px]">Buscar</p>
      <p className="font-semibold text-[10px] text-nowrap px-2">Mis albumes</p>
      <div className="flex items-center border-white border-l-1 h-2/3 px-2">
        <Logout className="w-full h-full" />
      </div>
      <div className="flex items-center border-white border-l-1 h-2/3 px-2">
        <Awake className="w-full h-full" />
      </div>
    </nav>
  );
};

export default UserNavbar;
