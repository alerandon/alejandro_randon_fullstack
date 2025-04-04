import { Awake, Logout } from '@carbon/icons-react';
import React from 'react';

const UserNavbar: React.FC = () => {
  return (
    <nav className="flex items-center">
      <p className="pr-1.5 text-sm font-semibold text-[#D6F379] sm:pr-2">
        Buscar
      </p>
      <p className="pr-3 pl-1.5 text-sm font-semibold text-nowrap sm:px-4">
        Mis albumes
      </p>
      <div className="flex h-2/3 items-center border-l-1 border-white px-1.5 sm:px-4">
        <Logout className="h-full w-full" />
      </div>
      <div className="flex h-2/3 items-center border-l-1 border-white px-1.5 sm:px-4">
        <Awake className="h-full w-full" />
      </div>
    </nav>
  );
};

export default UserNavbar;
