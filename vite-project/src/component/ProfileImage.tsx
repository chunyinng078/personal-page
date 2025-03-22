import React from "react";
const ProfileImage = (): JSX.Element => {
  return (
    <img
      src="https://media.licdn.com/dms/image/v2/D5635AQHdjmGLnwpcyA/profile-framedphoto-shrink_400_400/B56ZWZreoVGsAc-/0/1742040066941?e=1742648400&v=beta&t=O-https://media.licdn.com/dms/image/v2/D5635AQHdjmGLnwpcyA/profile-framedphoto-shrink_200_200/B56ZWZreoVGsAY-/0/1742040066976?e=1743267600&v=beta&t=NmdpjBBSpxbfR7PRplh7HHSQ86hwgCQ0V00l5_UN-G4"
      alt="profolio"
      className="sm:mb-5 rounded-full mx-auto w-64 h-64 object-cover"
      loading="lazy"
    />
  );
};

export default ProfileImage;
