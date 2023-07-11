import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-tailwind/react";

const ButtonInput = ({ text, onClick }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // ...
    // Close the dialog after form submission
    handleClose();
  };

  return (
    <>
      <Button
        className="bg-primary1 text-white rounded-lg text-sm flex gap-3 h-11 items-center px-3 font-medium"
        onClick={handleOpen}
      >
        <PlusIcon className="w-5" />
        {text ? text : "Input"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Its a simple dialog.</DialogTitle>
        <DialogContent divider>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonInput;
