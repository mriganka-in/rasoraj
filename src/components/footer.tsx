import React, { Component } from "react";

import { SiNextdotjs } from "react-icons/si";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function footer() {
  return (
    <div className="flex gap-6 px-20 pt-15 pb-5 justify-between items-start bg-[#F5E5CB] text-black">

      <section id="about" className="flex flex-col gap-4">
        <span className="flex items-center gap-2">
          {/* <img src="" alt="" /> */}
          <SiNextdotjs className="text-orange-500 text-4xl" />
          <h1 className="text-[#52332b] text-2xl font-semibold font-serif">Rasoraj</h1>
        </span>

        <p id="about" className="text-[#52332b] text-lg">
          Wide varieties of sweets and <br /> delicacies to choose from Explore
          the <br /> deliciousness that awaits you!
        </p>

        <span id="social" className="flex gap-4">
            <a href=""><FaInstagram className="text-2xl" /></a>
            <a href=""><FaFacebookF className="text-2xl" /></a>
            <a href=""><FaYoutube className="text-2xl" /></a>
        </span>
      </section>

      <section id="branches" className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">Branches</h1>
        <ul className="flex flex-col gap-2 text-xl">
          <li>Madhyamgram</li>
          <li>Basunagar</li>
          <li>Doltala</li>
        </ul>
      </section>

      <section id="contact" className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">Contact Info</h1>
        <section className="flex flex-col gap-3">
          <span className="flex gap-2 items-start">
            <FaLocationDot className="text-2xl" />
            <a href="https://www.google.com/maps/dir//MFV6%2BJ83,+Sodepur+Rd,+Gate+Number+2+Rd,+Basunagar,+Madhyamgram,+Kolkata,+West+Bengal+700129/@22.6944665,88.3800901,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f89f47968df387:0xfaa8287b02c53fbd!2m2!1d88.4624917!2d22.6944876?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D">
              Sodepur Rd, Gate Number 2 Rd, <br /> Basunagar, Madhyamgram, <br /> Kolkata,
              West Bengal 700129
            </a>
          </span>
          <span className="flex gap-2 items-center">
            <IoCall className="text-2xl" />
            <a href="tel:+91 98304 67269">98304 67269</a>
          </span>
          <span className="flex gap-2 items-center">
            <IoMdMail className="text-2xl" />
            <a href="mailto:contact@rasoraj.com">contact@rasoraj.com</a>
          </span>
        </section>
      </section>
    </div>
  );
}
