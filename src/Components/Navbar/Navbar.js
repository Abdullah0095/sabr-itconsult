"use client";

import Lottie from "lottie-react";
import Link from "next/link";

import HomeBarAnimation from "../../Lotties/navbarLottie.json";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <Link className="hover:bg-gray-900 hover:text-white text-xl font-semibold" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-900 hover:text-white text-xl font-semibold" href="/service">
          Service
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-900 hover:text-white text-xl font-semibold" href="/aboutUs">
          About Us
        </Link>
      </li>
      <li>
        <Link className="hover:bg-gray-900 hover:text-white text-xl font-semibold" href="/contact">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="flex h-20 -mt-5 fixed top-0 left-0 right-0 bg-slate-900 z-[1]">
      <section>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className=" drawer-button"
            >
              <Lottie
               
                animationData={HomeBarAnimation}
                loop={true}
                autoplay={true}
                style={{ width: 100, height: 100}}
              />
            </label>
          </div>
          <div className="drawer-side z-[1]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-gray-300 text-black  min-h-full w-48 md:w-60">
              {navList}
            </ul>
          </div>
        </div>
      </section>
      <section className="text-3xl py-8">
        <Link href="/">Sabr IT</Link>
      </section>
    </div>
  );
};

export default Navbar;

// daisyui navbar

// <div>
//   <div className="navbar bg-slate-900 z-[1] fixed top-0 left-0 right-0">
//     <div className="navbar-start">
//       <div className="dropdown">
//         <div
//           tabIndex={0}
//           role="button"
//           className="btn btn-accent btn-circle"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h7"
//             />
//           </svg>
//         </div>
//         <ul
//           tabIndex={0}
//           className="menu menu-sm dropdown-content text-lg bg-teal-700 rounded-box z-[1]  mt-3 w-40 p-2 text-white "
//         >
//           {navList}
//         </ul>
//       </div>
//     </div>
//     <div className="navbar-center">
//       <Link href="/" className="btn btn-ghost ml-[-30px] text-2xl text-white">sabrIT</Link>
//     </div>
//   </div>

// </div>
