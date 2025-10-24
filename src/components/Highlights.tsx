import type { ReactNode } from "react";

import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaLaravel, FaNodeJs, FaPhp, FaReact, FaShopify } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";

const Highlights = () => {
  const iconList = [
    {
      name: "React",
      icon: <FaReact className='w-10 h-10 text-blue-400' />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className='w-10 h-10' />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className='w-10 h-10 text-green-800' />,
    },
    {
      name: "Laravel",
      icon: <FaLaravel className='w-10 h-10 text-red-400' />,
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill className='w-10 h-10 text-yellow-200' />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className='w-10 h-10 text-blue-700' />,
    },
    {
      name: "PHP",
      icon: <FaPhp className='w-10 h-10 text-indigo-400 ' />,
    },
    {
      name: "Liquid",
      icon: <FaShopify className='w-10 h-10 text-lime-400' />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className='w-10 h-10 text-green-700' />,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className='w-10 h-10 text-indigo-500' />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className='w-10 h-10 text-blue-300' />,
    },
  ];

  return (
    <div className='my-5 lg:my-8 pb-2 w-full px-5 md:px-0 lg:w-[90%] xl:w-[70%] flex flex-row flex-nowrap overflow-x-scroll thin-scrollbar'>
      {iconList.map((icon: { name: string; icon: ReactNode }, idx: number) => (
        <div key={idx} className='flex flex-col items-center mx-3 md:mx-5'>
          <div className='border-4 border-neutral-300 flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-0.5'>
            {icon.icon}
          </div>
          <p className='text-sm font-semibold'>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
