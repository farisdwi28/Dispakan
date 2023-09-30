import { Fragment, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export default function DetailNews({ data }) {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <Fragment>
      <IconButton variant="text" color="blue-gray" onClick={() => handleOpen("lg")}>
        <EyeIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={size === "lg"} handler={handleOpen} size='lg'>
        <DialogHeader>
          <div>
            <h1>Detail Berita</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          {/* img nya */}
          <Typography className="font-normal max-w-4xl">Nama Produk  :  {data.name}</Typography>
          <Typography className="font-normal max-w-4xl">Harga  :  {data.price}</Typography>
          <Typography className="font-normal max-w-4xl">Deskripsi  :  {data.description}</Typography>
          <Typography className="font-normal max-w-4xl">Kategori  :  {data.category}</Typography>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
