function User() {
  return (
    <div className="rounded-[40px] bg-white text-[#040428] flex items-center p-2 gap-2">
      <img
        src="/image/user.png"
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <h2 className='font-medium text-base'>Omojola Zion</h2>
        <span className='font-normal text-xs'>User Account</span>
      </div>
    </div>
  );
}

export default User;
