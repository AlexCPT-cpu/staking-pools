import { useContractWrite, usePrepareContractWrite } from "wagmi";
import WbnbPool from "../config/json/WbnbPool.json";
import { ethers } from "ethers";

const useWithdraw = (poolAdd: string, amount: string) => {
  const { config } = usePrepareContractWrite({
    //@ts-expect-error contract starts eith 0x${string}
    address: poolAdd,
    abi: WbnbPool,
    functionName: "withdraw",
    args: [ethers.utils.parseUnits(amount.toString(), "ether")],
  });
  const { data: withData, write: callWith } = useContractWrite(config);

  return { withData, callWith };
};

export default useWithdraw;
