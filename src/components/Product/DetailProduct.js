import { Fragment, useState } from "react";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { getToken } from "../utils/storage";
import fetch from "../utils/fetch";
import Loading from "../elements/Spinner";
import { useForm } from "react-hook-form";
import Toggle from "../elements/Switch";
import SearchInput from "./Search";
import InputSearch from "./InputSearch";

export default function DetailNews({ data }) {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <Fragment>
      <IconButton variant="text" color="blue-gray" onClick={() => handleOpen("lg")}>
        <PencilIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={size === "lg"} handler={handleOpen} size='lg'>
        <DialogHeader>
          <div>
            <h1>Detail Berita</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          {/* img nya */}
          <Typography className="font-normal max-w-4xl">Nama Produk  :  {data.description}</Typography>
          <Typography className="font-normal max-w-4xl">Harga  :  {data.description}</Typography>
          <Typography className="font-normal max-w-4xl">Deskripsi  :  {data.description}</Typography>
          <Typography className="font-normal max-w-4xl">Nama Usaha  :  {data.description}</Typography>
          <Typography className="font-normal max-w-4xl">Kategori  :  {data.description}</Typography>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
