import { Fragment, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography
} from "@material-tailwind/react";
import InputSearch from "./InputSearch";
import TableUsahaMitra from "./Mitra/UsahaMitra";

export default function DetailMitra({ data }) {
  const [size, setSize] = useState(null);

  const handleOpen = value => setSize(value);

  return (
    <Fragment>
      <IconButton
        variant="text"
        color="blue-gray"
        onClick={() => handleOpen("lg")}
      >
        <EyeIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={size === "lg"} handler={handleOpen} size="lg">
        <DialogHeader>
          <div>
            <h1>Detail Mitra UMKM</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          {/* mitra name */}
          <div className="my-5 flex justify-between items-center">
            <label className="block font-medium text-lg text-black mr-10 w-64">
              Nama Mitra
            </label>
            <label className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1">
              Yanto Supratman
            </label>
          </div>
          {/* alamat mitra */}
          <div className="my-5 flex justify-between items-center">
            <label className="block font-medium text-lg text-black mr-10 w-64">
              Alamat Mitra
            </label>
            <label className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1">
              Jl. Sukabirus No.59a, Citereup, Kec. Dayeuhkolot, Kabupaten
              Bandung, Jawa Barat 40257
            </label>
          </div>
          {/* no telp */}
          <div className="my-5 flex justify-between items-center">
            <label className="block font-medium text-lg text-black mr-10 w-64">
              No Telpon Mitra
            </label>
            <label className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1">
              085123145962
            </label>
          </div>
          {/* email */}
          <div className="my-5 flex justify-between items-center">
            <label className="block font-medium text-lg text-black mr-10 w-64">
              Email
            </label>
            <label className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1">
              ritakusmiati2023@gmail.com
            </label>
          </div>
          {/* SEARCH AND ADD BUTTON COMP */}
          <div className="flex gap-3">
            <InputSearch placeholder="Cari Usaha" width="10" />
            {/* BUTTON INPUT USAHA */}
          </div>
          {/* TABLE USAHA MITRA */}
          <TableUsahaMitra />
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
