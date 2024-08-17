import React from "react";
const ProfileImage = (): JSX.Element => {
  return (
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQFfHuAcWR1LQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680277175421?e=1729123200&v=beta&t=YtRgSbKYjUhkOhSyXCRn5ZyC3Zd_EX1eS158G0h8HgY"
      alt="profolio"
      className="sm:mb-5 rounded-full mx-auto w-64 h-64 object-cover"
      loading="lazy"
    />
  );
};

export default ProfileImage;
