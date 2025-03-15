import React from "react";


export const Chat = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://media.licdn.com/dms/image/v2/D5635AQHdjmGLnwpcyA/profile-framedphoto-shrink_400_400/B56ZWZreoVGsAc-/0/1742040066941?e=1742648400&v=beta&t=O-QjAfOhimPxmYvb3LpEvW09pAs4pXyWfxPXtF0IrKc"
            />
          </div>
        </div>
        <div className="chat-header">
          Edwin
          <time className="text-xs opacity-50"> 12:45</time>
        </div>
        <div className="chat-bubble bg-slate-700 text-white">Lets know more about me!</div>
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
        <div className="chat-bubble bg-slate-700 text-white">Let's see!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </>
  );
};
