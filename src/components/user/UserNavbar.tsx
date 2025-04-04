import { Awake, Logout } from '@carbon/icons-react';
import React from 'react';

const UserNavbar: React.FC = () => {
  return (
    <nav className="flex items-center">
      <p className="pr-1.5 text-[12px] font-medium text-[#D6F379] sm:pr-2 sm:text-xs lg:text-sm">
        Buscar
      </p>
      <p className="pr-3 pl-1.5 text-[12px] font-medium text-nowrap sm:px-4 sm:text-xs lg:text-sm">
        Mis albumes
      </p>
      <div className="h4 flex h-5 items-center border-l-1 border-white pl-3 sm:px-4">
        <Logout className="h-full w-full" />
      </div>
      {/* <div className="flex h-2/3 items-center border-l-1 border-white px-1.5 sm:px-4">
        <Awake className="h-full w-full" />
      </div> */}
    </nav>
  );
};

export default UserNavbar;
