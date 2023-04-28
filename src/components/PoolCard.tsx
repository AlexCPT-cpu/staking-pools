import Modal from "./Modal";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Quick from "../assets/quick.png";
import ConnectBtn from "./ConnectBtn";
import { useAccount } from "wagmi";

const PoolCard = ({ name }: { name: string }) => {
  const { address } = useAccount();

  return (
    <div className="p-4 rounded-lg my-4  bg-[#fff] w-[390px] lg:w-[400px]">
      <div className="p-4 rounded-lg bg-[#f2f4fc] text-left">
        <div className="flex justify-between items-center mb-8 w-full">
          <div className="flex flex-row space-x-2 mr-5 items-center text-center">
            <div>Logo</div>
            <div className="font-bold text-sm lg:text-lg uppercase text-black">
              {name}
            </div>
          </div>
          <div className="text-xs flex flex-row whitespace-nowrap bg-[#d6e4ff] border hover:border-blue-800 cursor-pointer text-[#909db4] h-fit p-2 rounded-2xl">
            <a
              target="_blank"
              href="https://quickswap.exchange"
              className="flex flex-row items-center space-x-1"
            >
              <div>From </div>
              <div>
                <img src={Quick} className="w-5" />
              </div>
              <div> Get NSDX-USDT LPT </div>
              <div>
                <ArrowUpRightIcon className="w-4 ml-2 stroke-black" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:justify-between items-center">
          <div className="flex flex-row justify-between space-x-5 mb-5 lg:space-x-14 items-center">
            <div className="flex flex-col">
              <div className="text-black font-semibold">3845613.1577</div>
              <div className="text-xs">Total Staked (NSDX)</div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="text-black font-semibold">71.75%</div>
                <div className="text-xs">APR</div>
              </div>

              <div className="items-center justify-center mt-1 mx-2 lg:mx-8">
                <Modal />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            {address ? (
              <button
                className="bg-[#005AFF] text-white px-4 py-2 rounded-lg text-center whitespace-nowrap"
                type="button"
              >
                Stake
              </button>
            ) : (
              <ConnectBtn />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolCard;
