import React from 'react';
import AppNameIcon from '../common/AppNameIcon';
import UserNavbar from './UserNavbar';
import { ParentElementProps } from '../../types/interfaces';
import AppHeader from '../common/AppHeader';
import AppMain from '../common/AppMain';

const UserLayout: React.FC<ParentElementProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center pb-10">
      <AppHeader>
        <AppNameIcon />
        <UserNavbar />
      </AppHeader>
      <AppMain>{children}</AppMain>
    </div>
  );
};

export default UserLayout;
