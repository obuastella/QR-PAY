import { useState, useEffect, useRef } from 'react';
import ProfileMenu from './ProfileMenu';

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative w-auto">
      <button
        ref={buttonRef}
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="rounded-[40px] bg-white text-[#040428] flex items-center sm:p-2 p-1 gap-2"
      >
        <img
          src="/image/user.png"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="font-medium sm:text-base text-sm">Omojola Zion</h2>
          <span className="font-normal sm:text-xs text-[10px] text-left">
            User Account
          </span>
        </div>
      </button>

      {isModalOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 md:right-0 md:left-auto top-14 mt-2 z-50"
        >
          <ProfileMenu
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default User;
