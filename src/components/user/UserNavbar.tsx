import React from 'react';
import { Link } from 'react-router';
import UserLogout from './UserLogout';

const UserNavbar: React.FC = () => {
  const searchPathname = '/search';
  const myAlbumsPathname = '/my-albums';

  const handleLinkTextColor = (link: string) => {
    const textColor =
      window.location.pathname === link ? 'text-[#D6F379]' : 'text-white';
    return textColor;
  };

  return (
    <nav className="flex items-center">
      <Link
        to={searchPathname}
        className={`pr-1.5 text-[12px] font-medium sm:pr-2 sm:text-xs lg:text-sm ${handleLinkTextColor(searchPathname)}`}
      >
        Buscar
      </Link>
      <Link
        to={myAlbumsPathname}
        className={`pr-3 pl-1.5 text-[12px] font-medium text-nowrap sm:px-4 sm:text-xs lg:text-sm ${handleLinkTextColor(myAlbumsPathname)}`}
      >
        Mis albumes
      </Link>
      <UserLogout />
    </nav>
  );
};

export default UserNavbar;
