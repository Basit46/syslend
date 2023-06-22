import React from "react";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-white px-[40px] md:px-[60px] lg:px-[170px] pb-[40px] bg-[#0C0150]">
      <div className="links-wrap flex flex-col md:flex-row gap-[30px] md:gap-[200px] pb-[50px] border-b-[1px] border-b-white/[0.2]">
        <ul>
          <h1>SYSLEND</h1>
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li>
            <Link to="roadmap" smooth={true} duration={500}>
              Roadmap
            </Link>
          </li>
        </ul>

        <ul>
          <h1>Other</h1>
          <li>
            <a
              target="blank"
              href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83"
            >
              Team & Governance
            </a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <ul>
          <h1>Legal & Disclaimer links</h1>
          <li>
            <a href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83">
              Disclaimer
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-[4px] flex pb-[60px] vsm:pb-0 justify-between items-center">
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
