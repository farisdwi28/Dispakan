import { Fragment, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

export default function EditNews() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Tooltip content="Edit">
        <IconButton variant="text" color="blue-gray" onClick={handleOpen}>
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit Berita</DialogHeader>
        <DialogBody divider></DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
