import {
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import { NavItemProp } from "../../index";
import MobileNav from "./MobileNav";
import { useState } from "react";
import ConnectBtn from "../ConnectBtn";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems: NavItemProp[] = [
    {
      name: "Profile",
      Icon: UserIcon,
    },
    {
      name: "Swap",
      Icon: ArrowsRightLeftIcon,
    },
    {
      name: "Mint",
      Icon: CurrencyDollarIcon,
    },
    {
      name: "Farm",
      Icon: ChartBarIcon,
    },
    {
      name: "Stake",
      Icon: ArrowTrendingUpIcon,
    },
    {
      name: "Bridge",
      Icon: ArrowsRightLeftIcon,
    },
  ];

  return (
    <nav className="bg-[#fff] w-full h-full">
      <div className="min-w-full flex items-center justify-between mx-auto py-2 px-6 overflow-scroll">
        <div className={`flex flex-row justify-between w-full items-center`}>
          <div className={`${navOpen && 'hidden'}`}>
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black mr-10">
                Flowbite
              </span>
            </a>
          </div>
          <div className="block md:hidden ml-auto">
            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
          </div>
        </div>

        <div className="hidden w-full md:block" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-3">
            {navItems?.map((item: NavItemProp, index) => (
              <NavItem name={item.name} Icon={item.Icon} key={index} />
            ))}
          </ul>
        </div>
        <div className="hidden md:flex justify-center items-center mt-4 mx-3">
          <ConnectBtn />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
