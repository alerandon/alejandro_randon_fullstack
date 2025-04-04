import React from 'react';
import { ParentElementProps } from '../types/interfaces';

const AppHeader: React.FC<ParentElementProps> = ({ children }) => {
  return (
    <header className="sticky top-0 z-10 mb-10 flex w-full justify-center bg-[#222222] shadow-md">
      <div className="flex w-full max-w-3xl justify-between p-3 xl:max-w-[1200px]">
        {children}
      </div>
    </header>
  );
};

export default AppHeader;
