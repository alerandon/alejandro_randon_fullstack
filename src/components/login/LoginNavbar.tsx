import { FC } from 'react';
import AppName from '../common/AppName';

const LoginNavbar: FC = () => {
  return (
    <header className="py-4 px-4 md:px-0">
      <AppName />
    </header>
  );
};

export default LoginNavbar;
