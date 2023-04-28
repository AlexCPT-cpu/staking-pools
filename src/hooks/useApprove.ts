import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";

const useApprove = (poolAdd: string, tokenAdd: string) => {
  const { address } = useAccount();

  const { data: allowance } = useContractRead({
    //@ts-expect-error contract starts eith 0x${string}
    address: tokenAdd,
    abi: erc20ABI,
    functionName: "allowance",
    //@ts-expect-error contract starts eith 0x${string}
    args: [address, poolAdd],
  });

  const { config } = usePrepareContractWrite({
    //@ts-expect-error contract starts eith 0x${string}
    address: tokenAdd,
    abi: erc20ABI,
    functionName: "approve",
    //@ts-expect-error contract starts eith 0x${string}
    args: [poolAdd, "10000000000000000000000000000000000000000000000"],
  });
  const { data: writeData, write: callApprove } = useContractWrite(config);

  return { allowance, writeData, callApprove };
};

export default useApprove;
