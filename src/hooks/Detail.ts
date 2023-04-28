// import { useAccount, useContractRead } from "wagmi";
import WbnbPool from "../config/json/WbnbPool.json";
import { ethers } from "ethers";

const Detail = async (poolAdd: string, address: string) => {
//   const { address } = useAccount();

  // const { data: stakeInfo } = useContractRead({
  //   //@ts-expect-error contract starts eith 0x${string}
  //   address: poolAdd,
  //   abi: WbnbPool,
  //   functionName: "getStakeInfo",
  //   args: [address],
  // });
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc")
  const contract = new ethers.Contract(poolAdd, WbnbPool, provider)
  const stakeInfo = await contract.getStakeInfo(address)

  return { stakeInfo };
};

export default Detail;
