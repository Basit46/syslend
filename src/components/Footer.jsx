import React from "react";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white px-[170px] pb-[40px] bg-[#0C0150]">
      <div className="links-wrap flex gap-[200px] pb-[50px] border-b-[1px] border-b-white/[0.2]">
        <ul>
          <h1>SYSLEND</h1>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
        </ul>

        <ul>
          <h1>Other</h1>
          <li>
            <a href="#">Team & Governance</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <ul>
          <h1>Legal & Disclaimer links</h1>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Disclaimer</a>
          </li>
        </ul>
      </div>

      <div className="mt-[4px] flex justify-between items-center">
        <p className="text-[14px] font-[500] text-[#999999]">© 2023 SYSLEND.</p>
        <div className="flex gap-[20px] text-[33px] text-[#6666FF]">
          <FaTwitter />
          <FaTelegram />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
