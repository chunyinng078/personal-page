import React from "react";
import { FlowBiteHeader } from "./FlowBiteHeader";
import BackToUp from "@uiw/react-back-to-top";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden font-sans text-lg text-black dark:bg-black dark:text-white">
      <FlowBiteHeader />

      {/* card to show my IT projects */}
      <div className="card my-2 bg-base-100 shadow-xl sm:w-full md:w-1/2">
        <div className="card-body">
          <div className="flex flex-col justify-between text-xl md:flex-row">
            <span className="font-bold">
              VR fire training game - IVE Software Engineering FYP
            </span>
            <span className="font-medium">2022</span>
          </div>
          <ul className="list-inside list-disc">
            <li>
              This is a 4 people final year school project in IVE. This
              project uses the VR technologies to simulate the fire training.
            </li>
            <li>
              Implemented the game tools like fire extinguisher and fire sand bucket.
            </li>
            <li>
              Implemented health system and timer system.
            </li>
            <li>Set up domain with Hostinger and database with phpMyAdmin.</li>
          </ul>
          <div className="mt-3 flex flex-row flex-wrap gap-4 text-white">
            <div className="badge badge-primary text-white">VR</div>
            <div className="badge badge-primary text-white">Unity3D</div>
            <div className="badge badge-primary text-white">C#</div>
          </div>
        </div>
      </div>

 {/* one more card */}
 <div className="card my-2 bg-base-100 shadow-xl sm:w-full md:w-1/2">
        <div className="card-body">
          <div className="flex flex-col justify-between text-xl md:flex-row">
            <span className="font-bold">
              Single page website - Internship project
            </span>
            <span className="font-medium">2023</span>
          </div>
          <ul className="list-inside list-disc">
            <li>
              This is an internship experience to implement the front end of the
              website to show information of the customer.
            </li>
            <li>
              Follow Figma UI design wireframe from the designer to modify
              template to complete a responsive website layout with HTML,
              JavaScript, Tailwind CSS, and framer motion
            </li>
            <li>Modify animation</li>
          </ul>
          <div className="mt-3 flex flex-row flex-wrap gap-4 text-white">
            <div className="badge badge-primary text-white">NextJS</div>
            <div className="badge badge-primary text-white">Tailwind</div>
            <div className="badge badge-primary text-white">Framer motion</div>
            <div className="badge badge-primary text-white">
              Responsive web design
            </div>
          </div>
        </div>
      </div>

      <div className="card my-2 bg-base-100 shadow-xl sm:w-full md:w-1/2">
        <div className="card-body">
          <div className="flex flex-col justify-between text-xl md:flex-row">
            <span className="font-bold">
              Environmental sensing with LoRaWAN - PolyU Computing degree FYP
            </span>
            <span className="font-medium">2024</span>
          </div>
          <ul className="list-inside list-disc">
            <li>
              This is a one-person final year school project in PolyU. This
              project explores the possibility of developing a cost-effective
              plant monitoring system to achieve automation of plant monitoring
              using technologies of LoRaWAN and Arduino.
            </li>
            <li>
              Implemented the system by following the LoRaWAN architecture (end nodes,
              gateway, network server, application server)
            </li>
            <li>
              Implemented functions like login/logout, Two-step verification with
              email, Live data view, Record Search, CRUD for account and related
              objects in the project.
            </li>
            <li>Set up domain with Hostinger and database with phpMyAdmin.</li>
            <li>
              Encryption: Encrypts data with AES-256-CBC. Users’ password is
              hashed with sha256 and salt to protect it during data transfer.
            </li>
            <li>
              Set up and create webhook to check data, if environmental data
              exceeding threshold, there will be email notification.
            </li>
            <li>

              <a className="link" href="https://lorawan-plant-monitor.online/" target="_blank" rel="noreferrer">Go to the site</a>
            </li>
          </ul>
          <div className="mt-3 flex flex-row flex-wrap gap-4 text-white">
            <div className="badge badge-primary text-white">IoT</div>
            <div className="badge badge-primary text-white">Arduino</div>
            <div className="badge badge-primary text-white">PHP</div>
            <div className="badge badge-primary text-white">TheThingsStack</div>
            <div className="badge badge-primary text-white">Chart.js</div>
            <div className="badge badge-primary text-white">Encryption</div>
          </div>
        </div>
      </div>

      <div className="card my-2 bg-base-100 shadow-xl sm:w-full md:w-1/2">
        <div className="card-body">
          <div className="flex flex-col justify-between text-xl md:flex-row">
            <span className="font-bold">
              E-commerce website - School project
            </span>
            <span className="font-medium">2024</span>
          </div>
          <ul className="list-inside list-disc">
            <li>
              This is a 4 people school project. An online department store was
              developed. The website called “The Shop”, customers can buy all
              kinds of stuff from the website.
            </li>
            <li>
              Implemented the front end of the customer related parts, including
              login/logout, product list/search/view/filter/cart
            </li>
            <li>Implemented cart with local storage</li>
            <li>
              Building front-end to send customer request to backend with
              Https request (Axios) and handle the responses from the backend
              server
            </li>
            <li>Styling part of the front end with Bootstrap</li>
          </ul>
          <div className="mt-3 flex flex-row flex-wrap gap-4 text-white">
            <div className="badge badge-primary text-white">ReactJS</div>
            <div className="badge badge-primary text-white">Http request</div>
            <div className="badge badge-primary text-white">Axios</div>
            <div className="badge badge-primary text-white">Bootstrap</div>
            <div className="badge badge-primary text-white">Docker</div>
            <div className="badge badge-primary text-white">Front-end</div>
          </div>
        </div>
      </div>

     


       {/* card to show my IT projects */}
       <div className="card my-2 bg-base-100 shadow-xl sm:w-full md:w-1/2">
        <div className="card-body">
          <div className="flex flex-col justify-between text-xl md:flex-row">
            <span className="font-bold">
              A booking app prototpe
            </span>
            <span className="font-medium">2024</span>
          </div>
          <ul className="list-inside list-disc">
            <li>
              This is a booking app prototype. The app is for the user to book a timeslot of a trading shop to exchange the currency.
            </li>
            <li>
              Implemented functions like login/logout/signup, booking, and cancel booking.
            </li>
            <li>
              Fetch API in the backend PHP server to get the latest currency rate set by the shop every few second.
            </li>
            <li> 
              <a className="link" href="https://play.google.com/store/apps/details?id=com.wedragon.exchange" target="_blank" rel="noreferrer">Google Play Store</a></li>
          </ul>
          <div className="mt-3 flex flex-row flex-wrap gap-4 text-white">
            <div className="badge badge-primary text-white">Ionic (ReactJS)</div>
            <div className="badge badge-primary text-white">App</div>
            <div className="badge badge-primary text-white">API</div>
          </div>
        </div>
      </div>

      <BackToUp>Top</BackToUp>



    </div>
  );
};
