import React from "react";
import ProfileImage from "./ProfileImage";
import personalInfo from "../data/personalInfo.json";
import {
  // MailOutlined,
  // PhoneOutlined,
  // GithubOutlined,
  CloudDownloadOutlined ,
  FilePdfOutlined,
  // LinkedinOutlined,
} from "@ant-design/icons";
export const About = (): JSX.Element => {
  return (
    <>
      <section className="grid  md:grid-cols-2  items-center justify-center">
        <ProfileImage></ProfileImage>
        <div className="flex flex-col">
          <div className="flex flex-col max-w-xl w-full justify-evenly">
            <h1 className="text-4xl font-bold pb-8 md:pb-0">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl font-semibold">Web developer</h2>
            <p>
              I am a computing student graduated at the Hong Kong Polytechnic
              University this year (2024).
            </p>
            <br />
            <p className="text-xl ">
              Interest: Web Development, fullstack, IoT
            </p>
            <br />
            {/* <a className="text-xl" href="mailto:chunyinng078@gmail.com">
              <MailOutlined /> chunyinng078@gmail.com
            </a>
            <a className="text-xl">
              <PhoneOutlined /> 852-95652421
            </a>
            <a
              className="text-xl"
              target="_blank"
              href="https://github.com/chunyinng078"
            >
              <GithubOutlined /> chunyinng078
            </a>
            <a
              className="text-xl"
              target="_blank"
              href="https://www.linkedin.com/in/edwin-ng-59675623a/"
            >
              <LinkedinOutlined /> Ng Chun Yin
            </a> */}
            <a
              className="text-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1hCSk6hL0eLiuW4rlWt7av7YHqFT6xnjQ/view?usp=sharing"
            >
              <CloudDownloadOutlined /> <span className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline ">Resume <FilePdfOutlined /> </span>
            </a>
          </div>
        </div>
      </section>
      {/* <section id="about">
        <div className="flex justify-between">
          <div className="mr-8 hidden md:block rounded-md">
            <ProfileImage></ProfileImage>
          </div>
          <div className="flex flex-col max-w-xl w-full justify-evenly">
            <h1 className="text-4xl font-bold pb-8 md:pb-0">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl font-semibold">Web developer</h2>
            <p>
              I am a computing student graduated at the Hong Kong Polytechnic
              University this year (2024).
            </p>
            <p className="text-sm ">
              Interest: Web Development, fullstack, IoT
            </p>
            <br />
            <a className="text-sm">
              <MailOutlined /> chunyinng078@gmail.com
            </a>
            <a className="text-sm">
              <PhoneOutlined /> 852-95652421
            </a>
            <a className="text-sm" href="">
              <GithubOutlined /> chunyinng078
            </a>
            <a className="text-xl" href="">
              <FilePdfOutlined /> Resume
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};
