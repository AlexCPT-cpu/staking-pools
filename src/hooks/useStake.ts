import { useContractWrite, usePrepareContractWrite } from "wagmi";
import WbnbPool from "../config/json/WbnbPool.json";
import { ethers } from "ethers";

const useStake = (poolAdd: string, amount: string) => {
  const { config } = usePrepareContractWrite({
    //@ts-expect-error contract starts eith 0x${string}
    address: poolAdd,
    abi: WbnbPool,
    functionName: "stake",
    args: [ethers.utils.parseUnits(amount.toString(), "ether")],
  });
  const { data: stakeData, write: callStake } = useContractWrite(config);

  return { stakeData, callStake };
};

export default useStake;
