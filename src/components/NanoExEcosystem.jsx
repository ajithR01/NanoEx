import React from "react";

//icons
import NanoEcoImage from "../assets/NanoExEcoSystem/NanoEX_Rectangle_10.png";

export default function NanoExEcosystem() {
  const ecosystemFeatures = [
    {
      title: "RWA Marketplace",
      description:
        "A blockchain-powered platform for tokenizing real-world assets, enabling fractional ownership, enhanced liquidity, and secure global asset trading.",
    },
    {
      title: "Affiliate Program",
      description:
        "Earn rewards by referring users, promoting the platform, and growing the ecosystem through strategic partnerships and community-driven incentives.",
    },
    {
      title: "Fiat-to-Crypto (P2P)",
      description:
        "Convert fiat to crypto securely through a decentralized peer-to-peer network, enabling fast and transparent transactions without intermediaries.",
    },
    {
      title: "Nano Pay (Bank Transfers)",
      description:
        "Facilitate seamless and instant bank transfers for crypto-related transactions, bridging traditional finance with blockchain-powered payments.",
    },
  ];

  return (
    <div className="w-full bg-black text-white py-16 md:mt-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <div className="relative">
              <img
                src={NanoEcoImage}
                alt="NanoEx Ecosystem Illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="pr-6">
              <h2 className="text-4xl font-bold mb-4">
                NanoEx <span className="text-green-400">Ecosystem</span>
              </h2>

              <p className="mb-8 text-sm">
                Our ecosystem supports the entire lifecycle of digital asset
                trading and investment, offering seamless transactions, secure
                payments, automation, and rewarding opportunities.
              </p>

              <div className="space-y-6">
                {ecosystemFeatures.map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
