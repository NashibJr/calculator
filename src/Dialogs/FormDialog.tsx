import React, { InputHTMLAttributes } from "react";
import withDialogs from "./withDialogs";
import Input from "../components/Input";

type FormProps = InputHTMLAttributes<HTMLInputElement> & {
  onSubmitForm?: () => void;
  error?: string;
};

const FormDialog: React.FC<FormProps> = ({ onSubmitForm, error, ...props }) => {
  return (
    <form className="flex flex-col gap-5 min-w-[250px]" onSubmit={onSubmitForm}>
      <Input
        label="Task"
        placeholder="Enter task title"
        error={error}
        {...props}
      />
    </form>
  );
};

export default withDialogs<FormProps>(FormDialog);
