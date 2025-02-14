import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useSelector } from "react-redux";

function Footer() {
  const totalUsers = useSelector((state) => state.auth.userCount)
  return (
    <section className="relative overflow-hidden py-10 bg-gray-700 border-t-2 border-t-gray-600">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center text-center md:text-left">
          {/* Company Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 mb-6 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-white mb-3">Company</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Features</Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">Press Kit</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 mb-6 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-white mb-3">Support</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Account</Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Help</Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Contact Us</Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">Customer Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/12 mb-6 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-white mb-3">Legals</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link className="text-gray-300 hover:text-white transition" to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white transition" to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo & Copyright - Placed at Bottom */}
        <div className="mt-10 flex flex-col items-center border-t border-gray-600 pt-6">
          <Logo width="100px" />
          <p className="text-sm text-gray-300 mt-3">&copy; 2025. All Rights Reserved by Blog.</p>
          <p className="text-sm text-gray-300 mt-3">Developed with ❤️ by Abdurrab</p>
          <p className="text-sm text-gray-300 mt-3">Total users created: {totalUsers}</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
