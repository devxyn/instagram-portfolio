import { Home, PlusSquare, Search } from "lucide-react";
import profileImg from "../assets/herms profile.png";
import NotificationIcon from "./icons/NotificationIcon";

const BottomNavbar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 h-12 px-6 flex items-center justify-between md:hidden z-50'>
      <Home className='w-6 h-6' />
      <Search className='w-6 h-6 text-neutral-400' />
      <PlusSquare className='w-6 h-6' />
      <NotificationIcon />
      <div className='w-6 h-6 rounded-full bg-neutral-900 overflow-hidden'>
        <img src={profileImg} alt='' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default BottomNavbar;
