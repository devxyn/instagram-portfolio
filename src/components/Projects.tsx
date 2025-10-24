import { useState, type ReactNode } from "react";
import { BookmarkIcon, Github, Grid3x3, Heart, MessageCircle, MoreHorizontal, Send, X } from "lucide-react";
import ReelsIcon from "./icons/ReelsIcon";
import TagIcon from "./icons/TagIcon";
import profileImg from "../assets/herms profile.png";

import { PROFILE_DATA, PROJECTS } from "../constants/data";
import VerifiedIcon from "./icons/VerifiedIcon";

const tabs = [
  {
    name: "Projects",
    icon: <Grid3x3 />,
  },
  {
    name: "Reels",
    icon: <ReelsIcon />,
  },
  {
    name: "Taged",
    icon: <TagIcon />,
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <div className='w-full md:pb-20'>
      {/* Tabs */}
      <div className='flex flex-row justify-center gap-14 sm:gap-30'>
        {tabs.map((tab: { name: string; icon: ReactNode }, idx: number) => (
          <button
            key={idx}
            type='button'
            aria-label='Projects'
            className={`${
              activeTab === idx
                ? "text-black border-b-2 border-black hover:cursor-pointer active:cursor-pointer"
                : "text-neutral-400"
            } h-10 px-6`}
            onClick={() => setActiveTab(idx)}
            disabled={idx !== 0}>
            {tab.icon}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className='grid grid-cols-3 gap-0.5 mt-0.5'>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className='relative aspect-square group cursor-pointer bg-neutral-100'>
            <img src={project.image} alt={project.title} className='w-full h-full object-cover' />

            {/* Hover Overlay (Desktop) */}
            <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-6 text-white font-bold'>
              <div className='flex items-center gap-2'>
                <Heart className='w-6 h-6 fill-white' />
                <span>{project.likes}</span>
              </div>
              <div className='flex items-center gap-2'>
                <MessageCircle className='w-6 h-6 fill-white' />
                <span>{project.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- PROJECT DETAIL MODAL --- */}
      {selectedProject && (
        <div
          className='fixed inset-0 z-60 flex items-center justify-center md:p-8'
          onClick={() => setSelectedProject(null)}>
          {/* Backdrop */}
          <div className='absolute inset-0 bg-black/60' />

          {/* Close Button Mobile */}
          <button className='absolute top-4 right-4 text-white md:hidden z-70'>
            <X className='w-8 h-8' />
          </button>

          {/* Modal Content */}
          <div
            className='bg-white w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl md:aspect-video md:rounded-sm flex flex-col md:flex-row overflow-hidden relative z-65'
            onClick={(e) => e.stopPropagation()}>
            {/* Left Side: Image */}
            <div className='bg-black flex items-center justify-center md:flex-[1.5] h-[40vh] md:h-auto shrink-0'>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className='max-h-full max-w-full object-contain'
              />
            </div>

            {/* Right Side: Details (Scrollable) */}
            <div className='flex flex-col flex-1 h-full overflow-y-auto bg-white'>
              {/* Header */}
              <div className='p-3 md:p-4 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white z-10'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 rounded-full bg-neutral-200 overflow-hidden'>
                    <img src={profileImg} className='w-full h-full object-cover' />
                  </div>
                  <span className='font-semibold text-sm flex gap-1'>
                    {PROFILE_DATA.username}
                    <span className='pt-1'>
                      <VerifiedIcon size={14} />
                    </span>
                  </span>
                </div>
                <MoreHorizontal className='w-5 h-5 text-neutral-500' />
              </div>

              {/* Comments/Description Area */}
              <div className='p-3 md:p-4 flex-1 overflow-y-auto'>
                {/* Main Caption */}
                <div className='flex gap-3 mb-4'>
                  <div className='w-8 h-8 rounded-full bg-neutral-200 overflow-hidden shrink-0'>
                    <img src={profileImg} className='w-full h-full object-cover' />
                  </div>
                  <div className='text-sm'>
                    <span className='font-semibold mr-2 flex gap-1'>
                      {PROFILE_DATA.username}
                      <span className='pt-1'>
                        <VerifiedIcon size={14} />
                      </span>
                    </span>
                    {selectedProject.description}
                    <br />
                    <br />
                    <span className='font-semibold'>Tech Stack:</span>
                    <div className='flex flex-wrap gap-1 mt-2'>
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className='text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-xs font-medium'>
                          #{tech.replace(/\.|\s/g, "")}
                        </span>
                      ))}
                    </div>
                    <div className='text-neutral-400 text-xs mt-3'>{selectedProject.date}</div>
                  </div>
                </div>

                {/* Faux Comments */}
                <div className='flex gap-3 mb-3'>
                  <div className='w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0'>
                    <Github className='w-4 h-4 text-purple-600' />
                  </div>
                  <div className='text-sm'>
                    <span className='font-semibold mr-2'>github_bot</span>
                    <span className='text-neutral-900'>Check out the source code! </span>
                    <a href='#' className='text-blue-800'>
                      github.com/{PROFILE_DATA.username}
                    </a>
                    <div className='flex items-center gap-3 text-xs text-neutral-400 mt-1'>
                      <span>1w</span>
                      <span>1 likes</span>
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className='border-t border-neutral-100 p-3 md:p-4 bg-white sticky bottom-0'>
                <div className='flex justify-between mb-3'>
                  <div className='flex gap-4'>
                    <Heart className='w-6 h-6 hover:text-neutral-500 cursor-pointer' />
                    <MessageCircle className='w-6 h-6 hover:text-neutral-500 cursor-pointer' />
                    <Send className='w-6 h-6 hover:text-neutral-500 cursor-pointer' />
                  </div>
                  <BookmarkIcon className='w-6 h-6 hover:text-neutral-500 cursor-pointer' />
                </div>
                <div className='font-semibold text-sm mb-1'>{selectedProject.likes} likes</div>
                <div className='text-[10px] text-neutral-400 uppercase tracking-wide'>{selectedProject.date}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
