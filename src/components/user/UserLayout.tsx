import React from 'react';
import AppIcon from '../common/AppIcon';
import UserNavbar from './UserNavbar';

interface UserLayoutProps {
  children: React.ReactNode;
}

// TODO: close up header and main elements on their own components
const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center pb-10">
      <header className="sticky top-0 z-10 mb-10 flex w-full justify-center bg-[#222222] shadow-md">
        <div className="flex w-full max-w-3xl justify-between p-3 xl:max-w-[1200px]">
          <AppIcon />
          <UserNavbar />
        </div>
      </header>
      <main className="mx-5 flex h-full max-w-md flex-col items-center justify-center gap-8 pt-4 md:max-w-lg md:items-start md:gap-20 md:pt-6 lg:max-w-2xl lg:gap-12 xl:max-w-4xl">
        {children}
      </main>
    </div>
  );
};

export default UserLayout;
