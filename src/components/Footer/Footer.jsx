import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand Section */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4 group">
            <img className="w-10 group-hover:rotate-12 transition-transform" src="/logo.png" alt="EcoTrack" />
            <span className="text-2xl font-bold tracking-tight">EcoTrack</span>
          </Link>
          <p className="text-secondary leading-relaxed max-w-sm">
            Join our global community in making sustainable living accessible, measurable, and impactful for everyone.
          </p>
          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaXTwitter size={20} />, href: "https://x.com/RakibHassanNay1" },
              { icon: <FaFacebookF size={20} />, href: "https://www.facebook.com/rhnayem23" },
              { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/nayem.23_" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary/10 hover:text-primary transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title opacity-100 font-bold mb-2">Explore</h6>
          <Link to="/" className="link link-hover text-secondary hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="link link-hover text-secondary hover:text-primary transition-colors">About Us</Link>
          <Link to="/challenges" className="link link-hover text-secondary hover:text-primary transition-colors">Challenges</Link>
          <Link to="/add-challenge" className="link link-hover text-secondary hover:text-primary transition-colors">Add Challenge</Link>
        </nav>

        {/* Account & Community */}
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title opacity-100 font-bold mb-2">Community</h6>
          <Link to="/my-activities" className="link link-hover text-secondary hover:text-primary transition-colors">My Activities</Link>
          <Link to="/my-challenges" className="link link-hover text-secondary hover:text-primary transition-colors">My Challenges</Link>
          <Link to="/login" className="link link-hover text-secondary hover:text-primary transition-colors">Login</Link>
          <Link to="/register" className="link link-hover text-secondary hover:text-primary transition-colors">Register</Link>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <div className="border-t border-base-300">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-secondary text-sm">
              Copyright © {new Date().getFullYear()} <span className="font-bold">EcoTrack</span>. All rights reserved.
            </p>
            <p className="text-secondary/70 text-xs max-w-md">
              Accessibility Note: Use the theme switcher in the navigation bar to toggle between light and dark modes for better visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
