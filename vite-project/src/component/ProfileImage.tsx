import React from "react";
const ProfileImage = (): JSX.Element => {
  return (
    <img
      src="https://media.licdn.com/dms/image/v2/D5635AQHdjmGLnwpcyA/profile-framedphoto-shrink_400_400/B56ZWZreoVGsAc-/0/1742040066941?e=1742648400&v=beta&t=O-QjAfOhimPxmYvb3LpEvW09pAs4pXyWfxPXtF0IrKc"
      alt="profolio"
      className="sm:mb-5 rounded-full mx-auto w-64 h-64 object-cover"
      loading="lazy"
    />
  );
};

export default ProfileImage;
