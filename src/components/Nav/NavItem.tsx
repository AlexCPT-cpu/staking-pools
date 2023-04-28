import { NavItemProp } from "../../index";

const NavItem = ({ name, Icon }: NavItemProp) => {
  return (
    <li>
      <a
        href="#"
        className="block py-1 text-slate-500 rounded md:bg-transparent mx-2"
        aria-current="page"
      >
        <div className={`flex flex-row space-x-1 items-center justify-center text-center
         hover:text-[#909db4] hover:bg-gray-300/40 p-2 rounded-lg transition delay-100 ${name ==="Stake" ? 'bg-gray-300/40' : ''}`}>
          <div className="">{name}</div>
          <div>
            <Icon className='w-5' />
          </div>
        </div>
      </a>
    </li>
  );
};

export default NavItem;
