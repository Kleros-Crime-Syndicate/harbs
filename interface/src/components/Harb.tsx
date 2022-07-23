import React from "react";

interface IHarb {
  valuation: number
}

const Harb: React.FC<IHarb> = ({ valuation }) => {
  return (
    <div className={`
      w-full
      pb-[100%]
      bg-red-600
      relative
      hover:cursor-pointer
    `}>
      <div className={`
        absolute
        inset-x-0
        bottom-0
        bg-stone-800/70
        p-4
        flex
        justify-between
      `}>
        <p className={`
          text-white
          text-2xl
        `}>
          Valuation:
        </p>
        <p className={`
          text-white
          text-2xl
        `}>
          {valuation} ETH
        </p>
      </div>
    </div>
  );
};

export default Harb;