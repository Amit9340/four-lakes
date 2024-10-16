import React, { useEffect } from "react";
import FrontPage from "../CommonComponents/FrontPage";
import ContactUs from "../Components/ContactUs";
import { FaRegEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footer from "../Components/Footer";

function Contact() {
  const data = [
    { icon: <FaRegEnvelope />, text: "Email Us:", para1: "info@fourlakes.in" },
    {
      icon: <FaGlobe />,
      text: "Social Media Links:",
      ic1: <FaFacebook />,
      ic2: <FaInstagram />,
      ic3: <FaYoutube />,
    },
    {
      icon: <BiLocationPlus />,
      text: "Bhopal",
      para1: "Sahara bypass road, katara hills extention, Bhopal MP",
      para2: "462022",
    },
    { icon: <FiPhoneCall />, text: "Call Us:", para1: "+91 91 1147 9109" },
  ];
  return (
    <div className="absolute top-24">
      <FrontPage
        imgUrl="https://fourlakes.in/assets/img/contact/contactcover.png"
        firstHead="Contact Us"
        customClassDiv="lg:h-[63.5vh] h-[81rem]"
        customClassImg="lg:h-[125vh] h-[81rem] scale-[1.049] lg:-top-[14.5rem] -top-[2.5rem]"
        customClassFirstHead="relative lg:top-11 top-44 lg:text-[2.41rem] text-[7rem]"
        customClassthirdHead='hidden'
      />

      <ContactUs
        customClass1="relative -top-28"
        customClassIcon="gap-[2rem]"
        data1={data}
      />

      <iframe
        className="relative lg:h-[30rem] lg:w-full h-[125rem] w-[400vw] -top-[7rem]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29337.77486794127!2d77.520907!3d23.198584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41b98e81b8a7%3A0x65a1aa7e32e73e59!2sFour%20lakes!5e0!3m2!1sen!2sin!4v1728104843244!5m2!1sen!2sin"
        width="1349"
        height="482"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer />
    </div>
  );
}

export default Contact;
