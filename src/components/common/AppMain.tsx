import React from 'react';
import { ParentElementProps } from '../../types/parentElement';

const AppMain: React.FC<ParentElementProps> = ({ children }) => {
  return (
    <main className="mx-5 flex h-full max-w-md flex-col items-center justify-center pt-4 md:max-w-lg md:items-start md:pt-6 lg:max-w-3xl xl:max-w-4xl">
      {children}
    </main>
  );
};

export default AppMain;
