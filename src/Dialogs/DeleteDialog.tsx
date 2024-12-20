import withDialogs from "./withDialogs";
import { FiInfo } from "react-icons/fi";

const DeleteDialog = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl">Are you sure you want to delete this task?</h2>
      <FiInfo size={70} className="mx-auto" color="orange" />
    </div>
  );
};

export default withDialogs<{}>(DeleteDialog);
