import React from 'react';
import defaultAvatar from '@/assets/default-avatar.png'; 

const UserCard = ({ name, ageRange, gender, year, category, profileLink, avatar }) => {
  return (
    <a href={profileLink} className="flex items-center justify-between p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 no-underline">
      <div className="flex items-center">
        <div className="bg-pink-200 rounded-full h-10 w-10 flex items-center justify-center mr-4">
          <img src={avatar || defaultAvatar} alt="User Avatar" className="h-6 w-6" /> {/* Use default avatar if no avatar is provided */}
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div>Age Range: {ageRange} Gender: {gender} Year: {year}</div>
        </div>
      </div>
      <div className="font-bold">
        {category}
      </div>
    </a>
  );
};

export default UserCard;
