/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import FootNote from './FootNote';

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Omojola Zion",
    username: "Zicoly",
    email: "omojolazion@gmail.com",
    password: "**********",
    dob: "2006-06-23",
    permanentAddress: "Block I, Leadcity university, Toll-gate Lagos",
    presentAddress: "Block I, Leadcity university, Toll-gate Lagos",
    city: "IB",
    postalCode: "45962",
    country: "Nigeria",
  });
  const [image, setImage] = useState("image/user.png");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <>
    <div className="py-4 bg-white rounded-[24px] flex md:flex-row flex-col gap-x-11">
      <div className="relative h-[199px] w-[199px] self-center md:self-start flex flex-col items-center mr-6">
        <img
          className="w-48 h-48 rounded-full border border-gray-500"
          src={image}
          alt="Profile"
        />
        <label className="absolute bottom-3 right-3 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <FaEdit className="text-[#1814F3] w-8 h-8" />
        </label>
      </div>

      <form action="" className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base font-normal mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>
          <div>
            <label className="block text-base font-normal mb-2">User Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>

          <div>
            <label className="block text-base font-normal mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>
          <div>
            <label className="block text-base font-normal mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>

          <div>
            <label className="block text-base font-normal mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>

          <div>
            <label className="block text-base font-normal mb-2">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>
          <div>
            <label className="block text-base font-normal mb-2">Present Address</label>
            <input
              type="text"
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>

          <div>
            <label className="block text-base font-normal mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>
          <div>
            <label className="block text-base font-normal mb-2">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>

          <div>
            <label className="block text-base font-normal mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`w-full p-2 sm:p-3 border border-[#0D2B78] rounded-xl outline-2 outline-[#0D2B78] ${!isEditing ? 'bg-gray-200' : ''}`}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end items-center gap-x-2">
          <button type="button" onClick={handleEdit} className="px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-[15px]">
            Edit
          </button>
          <button type="button" onClick={handleSave} className="px-6 py-2 bg-[#1814F3] hover:bg-blue-700 text-white rounded-[15px]">
            Save
          </button>
        </div>
      </form>

    </div>
      <FootNote />
      </>
  );
};

export default EditProfile;
