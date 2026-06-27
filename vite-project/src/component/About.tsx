import ProfileImage from "./ProfileImage";
import personalInfo from "../data/personalInfo.json";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
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
          <h2 className="text-2xl font-semibold">Web developer / Programmer</h2>
          <p>
            I am a junior programmer graduated at the Hong Kong Polytechnic
            University in 2024.
          </p>
          <br />
          <p className="text-xl">Experience in: Web Development, IoT, Digital Report</p>
          <br />
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
