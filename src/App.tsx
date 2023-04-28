import { PoolType } from ".";
import "./App.css";
import Nav from "./components/Nav";
import PoolCard from "./components/PoolCard";
// import StakeCard from "./components/StakeCard";

function App() {
  const pools: PoolType[] = [
    {
      name: "WBNB",
      poolAddress: "0x198C48d3939Eae119306cEB3f540Dfc465Ef0C2d",
      tokenAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    {
      name: "BUSD",
      poolAddress: "0x6D0A9da75f91380e3cbF689F8D1D7658dE3c4C7F",
      tokenAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    {
      name: "USDT",
      poolAddress: "0xf40f1ff7a0Ceb8493AF8118C1db7DED342683177",
      tokenAddress: "0x55d398326f99059ff775485246999027b3197955",
    },
  ];

  return (
    <div className="text-[#909db4] min-h-screen justify-center bg-[#f7f8fb]">
      <Nav />
      <div className="w-fit mt-8 flex flex-col lg:flex-row justify-center mx-auto bg-[#f7f8fb] min-h-screen">
        {/* <div className="flex justify-center mx-auto">
          <StakeCard />
        </div> */}
        <div className="">
          {pools?.map((pool: PoolType) => (
            <PoolCard
              poolAddress={pool.poolAddress}
              tokenAddress={pool.tokenAddress}
              name={pool.name}
              key={pool.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
