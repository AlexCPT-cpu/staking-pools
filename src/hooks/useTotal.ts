import {
    erc20ABI,
    useContractRead,
  } from "wagmi";
  
  const useTotal = (poolAdd: string, tokenAdd: string) => {
  
    const { data: total } = useContractRead({
      //@ts-expect-error contract starts eith 0x${string}
      address: tokenAdd,
      abi: erc20ABI,
      functionName: "balanceOf",
      //@ts-expect-error contract starts eith 0x${string}
      args: [poolAdd],
    });

  
    return { total };
  };
  
  export default useTotal;
  