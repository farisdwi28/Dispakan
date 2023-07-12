import { Fragment, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function ButtonInput(props) {
  const {text,Header,body} = props
  const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <Fragment>
      <div className="flex gap-3 ">
        <Button className="flex gap-2 bg-primary1 text-white hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shadow-none hover:shadow-none" onClick={() => handleOpen("lg")} >
        <PlusIcon className="w-5" />
        {text ? text : "Input"}
        </Button>
      </div>
      <Dialog
        open={
          size === "lg" 
        }
        handler={handleOpen}
      >
        <DialogHeader>{Header}</DialogHeader>
        <DialogBody divider>
          {body}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}