import React from "react";
import ProfileImage from "./ProfileImage";
import personalInfo from "../data/personalInfo.json";
import {
  // MailOutlined,
  // PhoneOutlined,
  // GithubOutlined,
  CloudDownloadOutlined,
  FilePdfOutlined,
  // LinkedinOutlined,
} from "@ant-design/icons";
export const About = (): JSX.Element => {
  return (
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
          <p className="text-xl ">Interest: Web Development, fullstack, IoT</p>
          <br />
          <a
            className="text-xl"
            target="_blank"
            href="https://drive.google.com/file/d/1hCSk6hL0eLiuW4rlWt7av7YHqFT6xnjQ/view?usp=sharing"
          >
            <CloudDownloadOutlined />{" "}
            <span className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline ">
              Resume <FilePdfOutlined />{" "}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
