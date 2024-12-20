import React, { ButtonHTMLAttributes } from "react";

type Iprops = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string | React.JSX.Element;
};

const Button: React.FC<Iprops> = ({ label, ...props }) => {
  return (
    <button
      className={`rounded-sm ${props.className} bg-pink-500 text-white hover:bg-pink-700 p-2 sm:min-w-[80px] min-w-[60px] text-center outline-none`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
