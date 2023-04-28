import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MobileProps, NavItemProp } from "../..";
import {
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MobileItem from "./MobileItem";
import ConnectBtn from "../ConnectBtn";

const MobileNav = ({ navOpen, setNavOpen }: MobileProps) => {
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
    <div className="transition flex flex-col">
      <div className="">
        {navOpen ? (
          <XMarkIcon
            className="w-8 transition delay-75"
            onClick={() => setNavOpen(false)}
          />
        ) : (
          <Bars3Icon
            className="w-8 transition delay-75"
            onClick={() => setNavOpen(true)}
          />
        )}
      </div>

      <div
        className={`w-full transition-all relative delay-200 ${
          navOpen ? "h-96" : "h-3"
        }`}
      ></div>
      <div
        className={`w-full absolute transition-all flex flex-col top-16 left-0 delay-300 ${
          navOpen ? "block" : "hidden"
        }`}
      >
        {navItems?.map((item: NavItemProp, index) => (
          <MobileItem name={item.name} Icon={item.Icon} key={index} />
        ))}
        <div className="flex justify-center items-center mt-4">
          <ConnectBtn />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
