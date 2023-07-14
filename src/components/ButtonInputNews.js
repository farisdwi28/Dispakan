import { Fragment, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";

export default function ButtonInputNews(props) {
  const { text, Header, body } = props;
  const [size, setSize] = useState(null);

  const handleOpen = value => setSize(value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <Fragment>
      <div className="flex gap-3 ">
        <Button
          className="flex gap-2 bg-primary1 text-white hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shadow-none hover:shadow-none"
          onClick={() => handleOpen("lg")}
        >
          <PlusIcon className="w-5" />
          {text ? text : "Input"}
        </Button>
      </div>
      <Dialog open={size === "lg"} handler={handleOpen}>
        <DialogHeader>{Header}</DialogHeader>
        <DialogBody divider>
          {/* form  seperti login dan button*/}
          <form className="w-90" onSubmit={handleSubmit}>
            {/* nama */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Judul Berita
              </label>
              <input className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* alamat */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Tanggal Berita
              </label>
              <input
                className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                type="date"
              />
            </div>
            {/* no telepon */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Penanggung Jawab
              </label>
              <input className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
            </div>
            {/* input profile */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Cover Berita
              </label>
              <input
                className="w-full file:bg-gradient-to-b file:from-primary1 file:to-amber-500 file:px-6 file:py-3 file:n-5 file:border-none file:rounded-2xl file:text-white file:cursor-pointer file:shadow-lg file:shadow-amber-500/50 text-black/80 rounded-2xl cursor-pointer "
                type="file"
              />
            </div>
            {/* Isi Berita */}
            <div className="mb-2">
              <label>
                <span className="block font-medium text-lg text-black mr-10 w-64">
                  Isi Berita
                </span>
                <textarea
                  name="message"
                  className="
                        block
                        w-full
                        px-4 py-2 mt-2 
                        border-2
                        border-gray-300
                        rounded-md
                        shadow-sm
                        focus:outline-none 
                        focus:border-primary1
                        text-black
                    "
                  rows="5"
                ></textarea>
              </label>
            </div>
          </form>
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
            className="bg-primary1 text-white hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shadow-none hover:shadow-none"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
