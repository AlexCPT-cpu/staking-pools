import { useContractWrite, usePrepareContractWrite } from "wagmi";
import WbnbPool from "../config/json/WbnbPool.json";

const useClaim = (poolAdd: string) => {
  const { config } = usePrepareContractWrite({
    //@ts-expect-error contract starts eith 0x${string}
    address: poolAdd,
    abi: WbnbPool,
    functionName: "claimRewards",
  });
  const { data: claimData, write: callClaim } = useContractWrite(config);

  return { claimData, callClaim };
};

export default useClaim;
