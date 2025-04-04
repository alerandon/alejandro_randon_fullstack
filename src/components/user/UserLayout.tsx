import React from 'react';
import AppIcon from '../common/AppIcon';
import UserNavbar from './UserNavbar';
import { ParentElementProps } from '../types/interfaces';
import AppHeader from '../common/AppHeader';
import AppMain from '../common/AppMain';

// TODO: close up header and main elements on their own components
const UserLayout: React.FC<ParentElementProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center pb-10">
      <AppHeader>
        <AppIcon />
        <UserNavbar />
      </AppHeader>
      <AppMain>{children}</AppMain>
    </div>
  );
};

export default UserLayout;
