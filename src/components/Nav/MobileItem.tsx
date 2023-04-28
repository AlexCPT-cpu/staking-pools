import { NavItemProp } from "../../index";

const MobileItem = ({ name, Icon }: NavItemProp) => {
  return (
      <a
        href="#"
        className="py-1 text-slate-500 rounded md:bg-transparent mx-2"
      >
        <div className={`flex flex-row space-x-1 items-center justify-center text-center
         hover:text-[#909db4] hover:bg-gray-300/40 p-2 rounded-lg transition delay-75 ${name === "Stake" ? 'bg-gray-300/40' : ''}`}>
          <div className="">{name}</div>
          <div>
            <Icon className='w-5' />
          </div>
        </div>
      </a>
  );
};

export default MobileItem;
