import React from "react";

export default function BenefitCard({
  title,
  subtitle,
  description,
  icon,
  gradientColor,
}) {
  const baseClasses = "rounded-lg p-4 h-50 transition-all duration-300";
  const bgClasses = gradientColor
    ? "bg-gradient-to-br from-yellow-300 to-green-400 text-white"
    : "bg-white hover:bg-gradient-to-br hover:from-yellow-300 hover:to-green-400 text-black hover:text-white";

  return (
    <div className={`${baseClasses} ${bgClasses}`}>
      <div className={`flex flex-col h-full`}>
        <img src={icon} alt="icon" className="h-10 w-10 mb-3" />
        <h3 className="text-lg font-bold mb-0 leading-tight">{title}</h3>
        <h3 className="text-base font-bold mb-3 leading-tight mt-0">
          {subtitle}
        </h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
