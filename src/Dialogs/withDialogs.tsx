import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "../components/Button";

type Iprops = {
  openDialog: boolean;
  onCloseDialog?: () => void;
  title: string;
  onConfirm?: () => void;
};

export default function withDialogs<T>(WrappedComponent: any) {
  return function NewComponent(props: T & Iprops) {
    return (
      <Dialog
        open={props.openDialog}
        onClose={props.onCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers>
          <WrappedComponent {...props} />
        </DialogContent>
        <DialogActions>
          <Button
            label={"cancel"}
            onClick={props.onCloseDialog}
            type="button"
            className="rounded-sm bg-[#d3d3d3] text-black hover:bg-[#555] p-2 sm:min-w-[80px] min-w-[60px] outline-none text-center"
          />
          <Button label={"Confirm"} onClick={props.onConfirm} type="button" />
        </DialogActions>
      </Dialog>
    );
  };
}
