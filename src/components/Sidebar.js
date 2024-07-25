import React from "react";
import { useSelector } from "react-redux";
import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdThumbUp,
  MdWhatshot,
  MdLiveTv,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null; // this is known as early return pattern

  const menuItems = [
    { icon: MdHome, label: "Home", link: "/" },
    { icon: MdExplore, label: "Explore", link: "/" },
    { icon: MdSubscriptions, label: "Subscriptions", link: "/" },
    { icon: MdVideoLibrary, label: "Library", link: "/" },
    { icon: MdHistory, label: "History", link: "/" },
    { icon: MdWatchLater, label: "Watch Later", link: "/" },
    { icon: MdThumbUp, label: "Liked Videos", link: "/" },
    { icon: MdWhatshot, label: "Trending", link: "/" },
    { icon: MdLiveTv, label: "Live", link: "/" },
  ];

  return (
    // <div className="p-5 shadow-lg w-48">
    <div className="w-64 h-screen sticky top-16 ">
      <div className="flex flex-col items-start p-4 space-y-1">
        {menuItems.map((item, index) => (
          <Link to={item.link}>
            <button
              key={index}
              className="flex items-center w-full p-2 rounde hover:bg-gray-200"
            >
              <item.icon className="mr-4" size={24} />
              <span>{item.label}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
