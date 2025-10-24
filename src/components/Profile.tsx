import { Download, UserPlus } from "lucide-react";
import profileImg from "../assets/herms profile.png";
import VerifiedIcon from "./icons/VerifiedIcon";

import { PROFILE_DATA } from "../constants/data";

const Profile = () => {
  return (
    <div className='w-full px-5 md:px-0 lg:w-[90%] xl:w-[70%]'>
      {/* Profile Content */}
      <div className='flex flex-col items-center xs:flex-row xs:items-start gap-6 mb-4 md:mb-10'>
        {/* Profile Image */}
        <img
          className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full'
          src={profileImg}
          alt='Devxyn profile image'
        />

        {/* Personal Details */}
        <div className='flex sm:block flex-col justify-center'>
          <div className='mb-2 pt-2 text-center xs:text-left'>
            <h1 className='text-2xl sm:text-3xl font-bold '>{PROFILE_DATA.name}</h1>
            <h3 className='text-sm font-semibold flex justify-center xs:justify-start items-center gap-1'>
              {PROFILE_DATA.username}
              <span className='pt-0.5'>
                <VerifiedIcon size={14} />
              </span>
            </h3>
          </div>
          <h2 className='hidden sm:block text-base font-semibold leading-tight'>{PROFILE_DATA.title}</h2>

          <div className='flex flex-row justify-center xs:justify-start gap-2 sm:gap-4 sm:mt-2 md:mt-4 mb-2'>
            <p className='text-sm'>
              <span className='font-semibold'>{PROFILE_DATA.projectCount}</span> projects
            </p>
            <p className='text-sm'>
              <span className='font-semibold'>{PROFILE_DATA.connectionCount}</span> connections
            </p>
            <p className='text-sm'>
              <span className='font-semibold'>{PROFILE_DATA.passion}</span> passion
            </p>
          </div>

          <div className='hidden md:flex flex-col'>
            <span className='text-sm'>{PROFILE_DATA.bio}</span>
            <span className='text-sm'>Followed by aksdhkahsdjhsad + 9 more</span>
          </div>
        </div>
      </div>

      {/* Personal Details for mobile */}
      <h2 className='font-semibold text-base mb-1 sm:hidden leading-tight'>{PROFILE_DATA.title}</h2>
      <div className='flex flex-col md:hidden mb-5'>
        <div className='leading-[4px]'>
          <span className='text-sm'>{PROFILE_DATA.bio}</span>
          <span className='text-sm'>Followed by aksdhkahsdjhsad + 9 more</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className='flex flex-row justify-between'>
        <button className='xs:min-w-[42%] md:min-w-[45%] max-w-[46%] bg-blue-500 text-white py-2 xs:py-3 px-2 xs:px-0 rounded-xl flex justify-center items-center text-xs  xs:text-sm font-semibold hover:cursor-pointer hover:bg-blue-600 active:bg-blue-600'>
          Download CV
          <span className='ml-2'>
            <Download size={20} />
          </span>
        </button>
        <button className='xs:min-w-[42%] md:min-w-[45%] max-w-[46%] bg-neutral-100 py-2 xs:py-3 px-6 xs:px-0 rounded-xl flex justify-center items-center text-xs  xs:text-sm font-semibold hover:cursor-pointer hover:bg-neutral-200 active:bg-neutral-200'>
          Message
        </button>
        <button className='min-w-10 w-[6%] bg-neutral-100 py-2 xs:py-3 rounded-xl flex justify-center items-center hover:cursor-pointer hover:bg-neutral-200 active:bg-neutral-200'>
          <UserPlus className='ml-1' size={20} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
