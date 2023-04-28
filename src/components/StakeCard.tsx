const StakeCard = () => {
  return (
    <div className="p-4 rounded-lg m-2 bg-[#fff] w-[300px] h-fit">
      <div className="flex flex-row space-x-2">
        <div>NSDX Balance</div>
      </div>
      <hr className="my-3" />
      <div>
        <div className="text-base text-black font-bold">0.0</div>
        <div className="text-sm mb-2 mt-2">≈$0</div>
      </div>
      <div className="p-3 rounded-lg bg-[#F7F7F7] text-left">
          <div className="flex flex-row justify-between items-center text-sm text-black">
            <div>NSDX Price</div>
            <div className="text-base"><span className="text-[#909DB4] text-sm">$</span>0.36</div>
        </div>
      </div>
    </div>
  );
};

export default StakeCard;
