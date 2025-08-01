import React from "react";

interface ButtonProp {
  title?: string;
  className: string;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProp> = ({ title, className, type }) => {
  return (
    <div>
      <button className={className} type={type}>
        {title}
      </button>
    </div>
  );
};

export default Button;
