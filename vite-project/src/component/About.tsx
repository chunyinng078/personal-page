import React from "react";
// import Image from 'next/image';

// import ExtLink from './ExtLink';
import ProfileImage from "./ProfileImage";
import personalInfo from "../data/personalInfo.json";

export const About = (): JSX.Element => {
  return (
    <section className="grid gap-12" id="about">
      <div className="flex justify-between">
        <div className="mr-8 hidden md:block rounded-md">
          <ProfileImage></ProfileImage>
        </div>
        <div className="flex flex-col max-w-xl w-full justify-evenly">
          <h1 className="text-4xl font-bold pb-8 md:pb-0">
            {personalInfo.name}
          </h1>
          <p>
            I am a web developer and a graduate student at the Hong Kong Polytechnic University of the Philippines. 
         
            <br />
            <a className="text-sm">✉️ {personalInfo.about.email}</a>
          </p>
          <p className="text-sm ">
            Interest: {personalInfo.about.interest}
          </p>

        </div>
      </div>
    </section>
  );
};
