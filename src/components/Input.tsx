import React, { InputHTMLAttributes } from "react";

type Iprops = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input: React.FC<Iprops> = ({ label, error, ...props }) => {
  return (
    <label className="flex flex-col gap-1">
      {label && (
        <span className="text-sm font-semibold opacity-80">
          {label}{" "}
          <span className={`text-red-600 ${!props.required && "hidden"}`}>
            *
          </span>
        </span>
      )}
      <input
        className={`border border-[#d3d3d3] w-full rounded-md p-[6px] outline-none ${props.className}`}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </label>
  );
};

export default Input;
