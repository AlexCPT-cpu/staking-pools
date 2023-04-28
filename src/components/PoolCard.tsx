import Modal from "./Modal";
import ConnectBtn from "./ConnectBtn";
import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";
import Button from "./Button";
import { useEffect, useState } from "react";
import { PoolType } from "..";
import useApprove from "../hooks/useApprove";
import toast from "react-hot-toast";
import useStake from "../hooks/useStake";
import useWithdraw from "../hooks/useWithdraw";
import useClaim from "../hooks/useClaim";
import useTotal from "../hooks/useTotal";
import BUSDP from "../assets/BUSD.png";
import WBNBP from "../assets/WBNB.png";
import USDTP from "../assets/USDT.png";
import Detail from "../hooks/Detail";

const PoolCard = ({ name, poolAddress, tokenAddress }: PoolType) => {
  const UseLogo = ({ name }: { name: string }) => {
    if (name === "USDT") {
      return <img src={USDTP} className="w-6" />;
    } else if (name === "BUSD") {
      return <img src={BUSDP} className="w-6" />;
    } else if (name === "WBNB") {
      return <img src={WBNBP} className="w-6" />;
    }
    return <img src={USDTP} className="w-6" />;
  };

  const { address } = useAccount();
  const { chain } = useNetwork();

  const [rewards, setRewards] = useState(0);
  const [totalS, setTotalS] = useState(0);

  useEffect(() => {
    const Run = async () => {
      /**  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore */
      const { stakeInfo }: any = await Detail(poolAddress, address);
      setRewards(parseInt(stakeInfo?._rewards?._hex));
      setTotalS(parseInt(stakeInfo?._tokensStaked?._hex));
    };
    const X = async () => {
      await Run();
    };
    X();
  }, [address, poolAddress]);

  const [loading, setLoading] = useState<boolean>(false);
  const [apprLoad, setApprLoad] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("0");
  const [withdraw, setWithdraw] = useState<boolean>(false);
  const [claim, setClaim] = useState<boolean>(false);

  const { allowance, writeData, callApprove } = useApprove(
    poolAddress,
    tokenAddress
  );

  const { stakeData, callStake } = useStake(poolAddress, amount);

  const { withData, callWith } = useWithdraw(poolAddress, amount);
  const { claimData, callClaim } = useClaim(poolAddress);
  const { total } = useTotal(poolAddress, tokenAddress);

  const Approve = async () => {
    if (!callApprove) return;
    setApprLoad(true);
    await callApprove?.();
  };

  const Stake = async () => {
    if (!callStake) {
      toast.error("Stake Amount > Balance");
      return;
    }
    setLoading(true);
    await callStake?.();
  };

  const Withdraw = async () => {
    if (!callWith) {
      toast.error("0 Tokens Staked");
      return;
    }
    setWithdraw(true);
    await callWith?.();
  };

  const Claim = async () => {
    if (!callClaim) {
      toast.error("0 Rewards Earned");
      return;
    }
    setClaim(true);
    await callClaim?.();
  };

  useWaitForTransaction({
    confirmations: 5,
    hash: claimData?.hash,
    chainId: chain?.id,
    onSettled(data, error) {
      if (data) {
        setClaim(false);
        toast.success("Tokens Claimed successfully");
        setTimeout(() => window.location.reload(), 2000);
      } else {
        console.log(error);
        setClaim(false);
        toast.error("error Claiming Tokens");
      }
    },
  });

  useWaitForTransaction({
    confirmations: 5,
    hash: stakeData?.hash,
    chainId: chain?.id,
    onSettled(data, error) {
      if (data) {
        setLoading(false);
        toast.success("Tokens Staked successfully");
        setTimeout(() => window.location.reload(), 2000);
      } else {
        console.log(error);
        setLoading(false);
        toast.error("error Staking Tokens");
      }
    },
  });

  useWaitForTransaction({
    confirmations: 5,
    hash: withData?.hash,
    chainId: chain?.id,
    onSettled(data, error) {
      if (data) {
        setWithdraw(false);
        toast.success("Tokens Withdrawn successfully");
        setTimeout(() => window.location.reload(), 2000);
      } else {
        console.log(error);
        setWithdraw(false);
        toast.error("error Withdrawing Tokens");
      }
    },
  });

  useWaitForTransaction({
    confirmations: 5,
    hash: writeData?.hash,
    chainId: chain?.id,
    onSettled(data, error) {
      if (data) {
        setApprLoad(false);
        toast.success("Tokens Approved successfully");
        setTimeout(() => window.location.reload(), 2000);
      } else {
        console.log(error);
        setApprLoad(false);
        toast.error("error Approving Tokens");
      }
    },
  });

  return (
    <div className="p-4 rounded-lg my-4  bg-[#fff] w-[390px] lg:w-[400px]">
      <div className="p-4 rounded-lg bg-[#f2f4fc] text-left">
        <div className="flex justify-between items-center mb-8 w-full">
          <div className="flex flex-row space-x-2 mr-5 items-center text-center">
            <div>
              <UseLogo name={name} />
            </div>
            <div className="font-bold text-sm lg:text-lg uppercase text-black">
              {name}
            </div>
          </div>
          {/* <div className="text-xs flex flex-row whitespace-nowrap bg-[#d6e4ff] border hover:border-blue-800 cursor-pointer text-[#909db4] h-fit p-2 rounded-2xl">
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
          </div> */}
        </div>
        <div className="flex flex-col md:justify-between items-center">
          <div className="flex flex-row justify-between w-full mb-3 items-center">
            <div className="flex flex-col">
              <div className="text-black font-semibold">
                {/**  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore */}
                {parseInt(total?._hex)?.toLocaleString()}
              </div>
              <div className="text-xs">Total Staked ({name})</div>
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

          <div className="flex flex-row justify-between w-full mb-5 items-center">
            <div className="flex flex-col">
              <div className="text-black font-semibold">{totalS}</div>
              <div className="text-xs">Tokens Staked ({name})</div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="text-black font-semibold">{rewards}</div>
                <div className="text-xs">Rewards Earned</div>
              </div>
            </div>
          </div>

          <input
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            type="number"
            placeholder="Amount ..."
            className="outline-none peer text-center p-2 border text-black placeholder:text-gray-400 border-blue-400/60 rounded-lg mb-3 
              bg-transparent focus:border-blue-600 w-full"
          />
          <div className="flex flex-row items-center">
            {address ? (
              <div className="flex flex-row space-x-2">
                {/**  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                   //@ts-ignore */}
                {Number(parseInt(allowance?._hex)) > Number(amount) ? (
                  <Button onClick={Stake} loading={loading}>
                    Stake
                  </Button>
                ) : (
                  <Button onClick={Approve} loading={apprLoad}>
                    Approve
                  </Button>
                )}
                <Button onClick={Withdraw} loading={withdraw}>
                  Withdraw
                </Button>
                <Button onClick={Claim} loading={claim}>
                  Claim
                </Button>
              </div>
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
