import { Search } from "lucide-react";
import logoLight from "../assets/logo-light.png";
import HomeIcon from "./icons/HomeIcon";
import ExploreIcon from "./icons/ExploreIcon";
import ReelsIcon from "./icons/ReelsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import NotificationIcon from "./icons/NotificationIcon";
import type { ReactNode } from "react";
import InstagramIcon from "./icons/InstagramIcon";

const navList = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Search",
    icon: <Search />,
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
  },
  {
    title: "Reels",
    icon: <ReelsIcon />,
  },
  {
    title: "Messages",
    icon: <MessagesIcon />,
  },
  {
    title: "Notifications",
    icon: <NotificationIcon />,
  },
];

const Navbar = () => {
  return (
    <div className='hidden md:flex fixed flex-col w-[10vw] lg:w-[16vw] h-screen border-r border-r-neutral-200 items-start px-3 py-9'>
      <div className='flex w-full md:justify-center lg:justify-start mb-7'>
        <img className='hidden lg:block w-22 ml-2' src={logoLight} alt='Logo' />
        <InstagramIcon iconStyle='hidden md:block lg:hidden' />
      </div>

      <ul className='flex flex-col gap-3 w-full'>
        {navList.map((nav: { title: string; icon: ReactNode }, idx: number) => (
          <li
            className='flex flex-row md:justify-center lg:justify-start gap-4 items-center px-3 py-2.5 rounded-lg hover:bg-neutral-200 hover:cursor-pointer'
            key={idx}>
            {nav.icon}
            <p className='hidden lg:inline'>{nav.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
