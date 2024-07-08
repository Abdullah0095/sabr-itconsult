import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navList = <>
  
  <li><Link className="hover:bg-gray-900 text-lg" href="/">Home</Link></li>
  <li><Link className="hover:bg-gray-900 text-lg" href="/service">Service</Link></li>
  <li><Link className="hover:bg-gray-900 text-lg" href="/aboutUs">About Us</Link></li>
  <li><Link className="hover:bg-gray-900 text-lg" href="/contact">Contact</Link></li>

  </>;

  return (
    <div>
      <div className="navbar bg-slate-900 z-[1] fixed top-0 left-0 right-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-accent btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-lg bg-teal-700 rounded-box z-[1]  mt-3 w-40 p-2 text-white "
            >
              {navList}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost ml-[-30px] text-2xl text-white">sabrIT</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
