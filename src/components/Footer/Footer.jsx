import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-200 border-t border-t-emerald-500 px-3">
      <footer className="footer sm:footer-horizontal py-10 container mx-auto justify-between">
        <div>
          <Link
            to={"/"}
            className="btn p-0 btn-ghost text-xl flex items-center"
          >
            <img className="w-12" src="/logo.png" alt="" />
            <span className="text-xl font-bold">EcoTrack</span>
          </Link>

          <p className="">
            Join our community in making sustainable living
            <br /> accessible and measurable
          </p>
        </div>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://x.com/RakibHassanNay1"
              target="_blank"
              className="cursor-pointer hover:scale-130 transition"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://web.facebook.com/rakibhassannayem26"
              target="_blank"
              className="cursor-pointer hover:scale-130 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/rakibhassan_nayem"
              target="_blank"
              className="cursor-pointer hover:scale-130 transition"
            >
              <FaInstagram size={19} />
            </a>
          </div>
        </nav>
      </footer>

      <div className="container mx-auto text-center pb-10 text-sm flex flex-col items-center gap-3">
        <p>
          Accessibility: This site has theme changing feature for dark and light
          mode. For help, email
          <a
            href="mailto:rakibhassannayem@gmail.com"
            className="link link-hover ml-1"
          >
            rakibhassannayem@gmail.com
          </a>
          .
        </p>
        <div className="flex gap-4">
          <a href="/privacy" className="link link-hover">
            Privacy
          </a>
          <a href="/terms" className="link link-hover">
            Terms
          </a>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} EcoTrack - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;