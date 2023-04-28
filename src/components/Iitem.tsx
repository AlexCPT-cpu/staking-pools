import { ItemProps } from "../index";

const Iitem = ({ title, subTitle }: ItemProps) => {
  return (
    <div className="text-sm flex flex-row justify-between text-gray-500 w-full my-3">
      <div className="text-xs text-[#909DB4]">{title}</div>
      <div className="font-semibold text-[#333333]">{subTitle}</div>
    </div>
  );
};

export default Iitem;
