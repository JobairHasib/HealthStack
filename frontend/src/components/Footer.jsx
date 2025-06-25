import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Saturday",
      time: "8:00 AM - 12:00 AM",
    },
    {
      id: 2,
      day: "Sunday",
      time: "8:00 AM - 12:00 AM",
    },
    {
      id: 3,
      day: "Monday",
      time: "8:00 AM - 12:00 AM",
    },
    {
      id: 4,
      day: "Tuesday",
      time: "8:00 AM - 12:00 AM",
    },
    {
      id: 5,
      day: "Wednesday",
      time: "8:00 AM - 2:00 AM",
    },
    {
      id: 6,
      day: "Thursday",
      time: "8:00 AM - 2:00 AM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>+880 123 456 7890</span>
            </div>
            <div>
              <MdEmail />
              <span>contact@healthstack.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Chattgram, Bangladesh</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
