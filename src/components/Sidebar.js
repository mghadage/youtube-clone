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
    { icon: MdExplore, label: "Shorts", link: "/" },
    { icon: MdSubscriptions, label: "Subscriptions", link: "/" },
    { icon: MdVideoLibrary, label: "Library", link: "/" },
    { icon: MdHistory, label: "History", link: "/" },
    { icon: MdWatchLater, label: "Watch Later", link: "/" },
    { icon: MdThumbUp, label: "Liked Videos", link: "/" },
    { icon: MdWhatshot, label: "Trending", link: "/" },
    { icon: MdLiveTv, label: "Live", link: "/" },
  ];

  return (
    <div className="p-3 shadow-lg w-56">
      <ul className="">
        {menuItems.map((item, index) => (
          <Link to={item.link}>
            <li
              key={index}
              className="flex w-full p-2 mb-1 hover:bg-gray-200 hover:rounded-lg"
            >
              <item.icon className="mr-4" size={24} />
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
