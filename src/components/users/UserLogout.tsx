import React from 'react';
import { Logout } from '@carbon/icons-react';
import { useNavigate } from 'react-router';

const UserLogout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('spotifyAccess');
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="h4 flex h-5 cursor-pointer items-center border-l-1 border-white pl-3 sm:px-4"
    >
      <Logout className="h-full w-full sm:hidden" />
      <span className="hidden text-[12px] font-medium sm:inline lg:text-sm">
        Cerrar sesión
      </span>
    </button>
  );
};

export default UserLogout;
