import React from "react";
const ProfileImage = (): JSX.Element => {
  return (
    <img
      //src="https://i.imgur.com/eyuaRXI.jpeg"
      src="https://media.licdn.com/dms/image/v2/D5603AQHiq1BTJPYU7Q/profile-displayphoto-crop_800_800/B56ZiUGbTHG0AI-/0/1754831370605?e=1774483200&v=beta&t=lXuownfRezdCwJThEYe8C7dZL3ZJnx-0YwhTogsNdK4"
      alt="profolio"
      className="sm:mb-5 rounded-full mx-auto w-64 h-64 object-cover"
      loading="lazy"
    />
  );
};

export default ProfileImage;
