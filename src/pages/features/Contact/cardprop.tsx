import React from "react";

interface CardProp {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
  button?: string;
}

const Card: React.FC<CardProp> = ({
  icon,
  title,
  subtitle,
  className = "",
  button,
}) => {
  return (
    <div
      className={`w-[392px] h-[226px] p-6 rounded-lg shadow bg-[#F0F2EF] flex flex-col items-center justify-between ${className}`}
    >
      {icon && <div className="mb-3">{icon}</div>}
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-3 text-center">{subtitle}</p>
      {button && (
        <button className="mt-2 px-4 py-2 bg-[#5A6D57] text-white rounded hover:bg-[#46604a] transition">
          {button}
        </button>
      )}
    </div>
  );
};

export default Card;