import React from "react";
import ProfileImage from "./ProfileImage";
import personalInfo from "../data/personalInfo.json";
import { Chat } from "./Chat";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  CloudDownloadOutlined,
  FilePdfOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export const About = (): JSX.Element => {
  return (
    <section className="my-3 grid items-center justify-center md:grid-cols-2">
      <ProfileImage></ProfileImage>
      <div className="flex flex-col">
        <div className="flex w-full max-w-xl flex-col justify-evenly">
          <h1 className="pb-8 text-4xl font-bold md:pb-0">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl font-semibold">Web developer</h2>
          <p>
            I am a computing student graduated at the Hong Kong Polytechnic
            University this year (2024).
          </p>
          <br />
          <p className="text-xl">Interest: Web Development, fullstack, IoT</p>
          <br />
          <a
            className="text-xl"
            target="_blank"
            href="https://drive.google.com/file/d/1D9ng6TfP-dCUZog9HNcKWc4xPxyDcjiN/view?usp=sharing"
          >
            <CloudDownloadOutlined />{" "}
            <span className="font-medium text-blue-600 underline hover:no-underline dark:text-blue-500">
              Resume <FilePdfOutlined />{" "}
            </span>
          </a>
          <button
            className="btn text-white mt-4"
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              )?.showModal()
            }
          >
            Contact me
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="text-lg font-bold">
                {" "}
                Please feel free to contact me at:
              </h3>
              <p className="py-4">
                <br />
                <MailOutlined /> Email:{" "}
                <a
                  href="mailto:
                {personalInfo.email}"
                  className="text-blue-500 underline hover:no-underline dark:text-blue-400"
                >
                  {personalInfo.email}
                </a>
                <br />
                <PhoneOutlined /> Phone:{" "}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-blue-500 underline hover:no-underline dark:text-blue-400"
                >
                  {personalInfo.phone}
                </a>
                <br />
                <GithubOutlined /> Github:{" "}
                <a
                  href={personalInfo.github}
                  className="text-blue-500 underline hover:no-underline dark:text-blue-400"
                >
                  {personalInfo.github}
                </a>
                <br />
                <LinkedinOutlined /> Linkedin:{" "}
                <a
                  href={personalInfo.linkedin}
                  className="text-blue-500 underline hover:no-underline dark:text-blue-400"
                >
                  {personalInfo.linkedin}
                </a>
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </section>
  );
};
