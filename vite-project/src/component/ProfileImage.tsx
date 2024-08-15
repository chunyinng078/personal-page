import React from "react";
const ProfileImage = (): JSX.Element => {
  return (
    <img
      className="rounded-full select-none transition-all pointer-events-none"
      src="https://media.licdn.com/dms/image/v2/D5603AQFfHuAcWR1LQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680277175421?e=1729123200&v=beta&t=YtRgSbKYjUhkOhSyXCRn5ZyC3Zd_EX1eS158G0h8HgY"
      // onMouseOver = {e => e.currentTarget.src = "/images/gelo.HEIC"}
      // onMouseOut = {e => e.currentTarget.src = "/images/me.jpg"}
      draggable={false}
      alt="My profile image"
      width={260}
      height={260}
    />
  );
};

export default ProfileImage;
