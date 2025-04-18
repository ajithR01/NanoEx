import React from "react";

//icons
import PercentIcon from "../assets/NanoExRWAImages/Rectangle_8_from_NanoEX.png";
import VoteIcon from "../assets/NanoExRWAImages/Rectangle_9_from NanoEX.png";
import ChartIcon from "../assets/NanoExRWAImages/NanoEX_Rectangle_10.png";
import LayersIcon from "../assets/NanoExRWAImages/NanoEX_Rectangle_11.png";
import CreditCardIcon from "../assets/NanoExRWAImages/Rectangle _2_from_NanoEX.png";

import BenefitCard from "./BenefitCard";

export default function NanoExRWA() {
  return (
    <div className="w-full bg-black text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-green-400">NanoEx RWA</h1>
        <h2 className="text-3xl font-bold mb-8">
          Transforming Real-World Assets into
          <br />
          Digital Investments!
        </h2>

        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="mb-16">
            Welcome to NanoEx RWA, the ultimate platform for tokenizing
            real-world assets (RWAs) and unlocking a new era of liquidity,
            accessibility, and security in the investment landscape. The nRWA
            token is the backbone of the NanoEx RWA ecosystem, providing
            utility, governance, and exclusive investment opportunities for
            investors. By transforming traditionally illiquid assets—like real
            estate, fine art, commodities, and infrastructure—into
            fractionalized digital tokens, NanoEx RWA enables seamless trading,
            transparency, and enhanced liquidity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4">
        <BenefitCard
          title="Up to 50%"
          subtitle="Fee Discounts"
          description="Reduced trading, tokenization, and custody fees."
          icon={PercentIcon}
          gradientColor={true}
        />

        <BenefitCard
          title="Governance &"
          subtitle="Voting Rights"
          description="Influence platform upgrades, fees, and asset listings."
          icon={VoteIcon}
        />

        <BenefitCard
          title="Exclusive"
          subtitle="Investment Access"
          description="Early participation in premium tokenized assets."
          icon={ChartIcon}
        />

        <BenefitCard
          title="Staking"
          subtitle="& Rewards"
          description="Earn high APY staking rewards and platform incentives."
          icon={LayersIcon}
        />

        <BenefitCard
          title="Global"
          subtitle="Crypto Card"
          description="Use tokenized assets for real-world transactions."
          icon={CreditCardIcon}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center mt-16 px-4">
        <p>
          NanoEx RWA is pioneering the future of asset ownership by bridging the
          gap between physical assets and blockchain technology. Join us in
          reshaping the future of real-world asset investment with blockchain
          technology!
        </p>
      </div>
    </div>
  );
}
