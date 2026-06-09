import React from "react";
const ProfileImage = (): JSX.Element => {
  return (
    <img
      //src="https://i.imgur.com/eyuaRXI.jpeg"
      src="https://chunyinngsite-portfolio-images.s3.ap-east-1.amazonaws.com/profile-picture.jpg"
      alt="profolio"
      className="sm:mb-5 rounded-full mx-auto w-64 h-64 object-cover"
      loading="lazy"
    />
  );
};

export default ProfileImage;
