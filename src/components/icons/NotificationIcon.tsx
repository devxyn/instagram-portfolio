import { Heart } from "lucide-react";

interface NotificationIconProps {
  size?: number;
}

const NotificationIcon = ({ size = 24 }: NotificationIconProps) => {
  return (
    <div className='relative'>
      <Heart size={size} />
      <div className='absolute w-3 h-3 bg-red-500 rounded-full -top-0.5 -right-1 border-2 border-white' />
    </div>
  );
};

export default NotificationIcon;
