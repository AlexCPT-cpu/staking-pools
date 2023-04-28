import "./App.css";
import Nav from "./components/Nav";
import PoolCard from "./components/PoolCard";
import StakeCard from "./components/StakeCard";

function App() {
  const pools: string[] = ["usdt", "eth", "bnb"];

  return (
    <div className="text-[#909db4] min-h-screen justify-center bg-[#f7f8fb]">
      <Nav />
      <div className="w-fit mt-8 flex flex-col lg:flex-row justify-center mx-auto bg-[#f7f8fb] min-h-screen">
        <div className="flex justify-center mx-auto">
          <StakeCard />
        </div>
        <div className="">
          {pools?.map((pool: string, index) => (
            <PoolCard name={pool} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
