import AppIcon from "../common/AppIcon";
import UserNavbar from "./UserNavbar";

const UserHeader: React.FC = () => {
  return (
    <div className="flex flex-col w-full mx-auto pb-10">
      <header className="p-3 sticky top-0 flex justify-between bg-[#222222] z-10 shadow-md">
        <AppIcon />
        <UserNavbar />
      </header>
    </div>
  );
}

export default UserHeader;
