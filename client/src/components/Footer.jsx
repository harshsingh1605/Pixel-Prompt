import React from 'react';
import { assets } from '../assets/assets';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-purple-50 to-teal-50 text-gray-700 py-8 px-6 md:px-16 lg:px-28 shadow-inner">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={assets.logo} alt="Logo Icon" className="w-28 mb-4" />
          <h3 className="text-lg font-bold mb-2">Pixel Prompt</h3>
          <p className="text-gray-600 max-w-xs">
            Empowering creativity with cutting-edge AI tools. Transform your imagination into stunning visuals effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
          <div>
            <h4 className="text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/features" className="hover:text-purple-700 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-purple-700 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-700 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/help" className="hover:text-purple-700 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-700 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-purple-700 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="text-lg font-semibold mb-3 ">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src={assets.instagram_icon}
                alt="Instagram"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Pixel Prompt | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
