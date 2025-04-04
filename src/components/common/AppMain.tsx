import React from 'react';
import { ParentElementProps } from '../types/interfaces';

const AppMain: React.FC<ParentElementProps> = ({ children }) => {
  return (
    <main className="mx-5 flex h-full max-w-md flex-col items-center justify-center gap-8 pt-4 md:max-w-lg md:items-start md:gap-20 md:pt-6 lg:max-w-2xl lg:gap-12 xl:max-w-4xl">
      {children}
    </main>
  );
};

export default AppMain;
