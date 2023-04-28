import { useAccount, useContractRead } from "wagmi";
import WbnbPool from "../config/json/WbnbPool.json";

const useStakeDetails = (poolAdd: string) => {
  const { address } = useAccount();

  const { data: stakeInfo } = useContractRead({
    //@ts-expect-error contract starts eith 0x${string}
    address: poolAdd,
    abi: WbnbPool,
    functionName: "getStakeInfo",
    args: [address],
  });

  return { stakeInfo };
};

export default useStakeDetails;
