import AppIcon from "../common/AppIcon";
import UserNavbar from "./UserNavbar";

const UserHeader: React.FC = () => {
  return (
    <header className="flex justify-center w-full shadow-md mb-10 sticky top-0 z-10 bg-[#222222]">
      <div className="p-3 flex justify-between w-full max-w-3xl xl:max-w-[1200px]">
        <AppIcon />
        <UserNavbar />
      </div>
    </header>
  );
}

export default UserHeader;
