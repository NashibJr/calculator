import React, { InputHTMLAttributes } from "react";
import Input from "./Input";
import Button from "./Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

type Iprops = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  onDelete: () => void;
  onEdit: () => void;
  completed?: boolean;
};

const Todo: React.FC<Iprops> = ({
  title,
  onDelete,
  onEdit,
  completed,
  ...props
}) => {
  return (
    <div className="flex justify-between border-b border-[#d3d3d3] pt-4 pb-4">
      <div className="flex gap-2">
        <Input type="checkbox" className="mt-[6px]" {...props} />
        <p style={{ textDecoration: completed ? "line-through" : "" }}>
          {title}
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          type="button"
          label={<RiDeleteBin6Line size={20} className="mx-auto" />}
          onClick={onDelete}
        />
        <Button
          type="button"
          label={<CiEdit size={20} className="mx-auto" />}
          onClick={onEdit}
        />
      </div>
    </div>
  );
};

export default Todo;
