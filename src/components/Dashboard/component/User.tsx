function User() {
  return (
    <div className="rounded-[40px] bg-white text-[#040428] flex items-center sm:p-2 p-1 gap-2">
      <img
        src="/image/user.png"
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <h2 className='font-medium sm:text-base text-sm'>Omojola Zion</h2>
        <span className='font-normal sm:text-xs text-[10px]'>User Account</span>
      </div>
    </div>
  );
}

export default User;
