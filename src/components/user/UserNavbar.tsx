import { Logout } from '@carbon/icons-react';
import React from 'react';
import { Link, useNavigate } from 'react-router';

const UserNavbar: React.FC = () => {
  const navigate = useNavigate();
  const searchPathname = '/search';
  const myAlbumsPathname = '/my-albums';

  const handleLinkTextColor = (link: string) => {
    const textColor =
      window.location.pathname === link ? 'text-[#D6F379]' : 'text-white';
    return textColor;
  };
  const handleLogout = () => {
    localStorage.removeItem('spotifyAccess');
    navigate('/');
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

      <button
        onClick={handleLogout}
        className="h4 flex h-5 items-center border-l-1 border-white pl-3 sm:px-4"
      >
        <Logout className="h-full w-full" />
      </button>
    </nav>
  );
};

export default UserNavbar;
