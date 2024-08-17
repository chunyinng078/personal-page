import React from "react";


export const Chat = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://media.licdn.com/dms/image/v2/D5603AQFfHuAcWR1LQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680277175421?e=1729123200&v=beta&t=YtRgSbKYjUhkOhSyXCRn5ZyC3Zd_EX1eS158G0h8HgY"
            />
          </div>
        </div>
        <div className="chat-header">
          Edwin
          <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="chat-bubble bg-slate-700	">Lets know more about me!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          You
          <time className="text-xs opacity-50"> 12:46</time>
        </div>
        <div className="chat-bubble bg-slate-700	">Let's see!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </>
  );
};
