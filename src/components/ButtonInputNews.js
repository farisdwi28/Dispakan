import { Fragment, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { getToken } from "../utils/storage";
import fetch from "../utils/fetch";
import Loading from "../elements/Spinner";

export default function ButtonInputNews(props) {
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile] = useState(null);
  const { text, Header } = props;
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues({
      ...formValues,
      file: file,
    });
  };

  const [formValues, setFormValues] = useState({
    title: "",
    posted_date: "",
    file: "",
    description: "",
  });

  console.log(formValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = getToken();

    const formData = new FormData();
    formData.append("title", formValues.title);
    formData.append("posted_date", formValues.posted_date);
    formData.append("description", formValues.description);
    formData.append("file", selectedFile);

    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/news/upload`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    };

    try {
      const response = await fetch(options);
      if (response.success) {
        if (window.confirm("Apakah data telah sesuai?")) {
          setButtonContent("Sukses Menyimpan!");
          window.location.reload(true);
        }
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }

    setIsLoading(false);
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
          <form className="w-90">
            {/* title */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Judul Berita
              </label>
              <input
                name="title"
                value={formValues.title}
                onChange={handleChange}
                className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
              />
            </div>
            {/* posted_date */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Tanggal Berita
              </label>
              <input
                name="posted_date"
                value={formValues.posted_date}
                onChange={handleChange}
                className="w-full text-black border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                type="date"
              />
            </div>
            {/* file */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg text-black mr-10 w-64"
              >
                Cover Berita
              </label>
              <input
                name="file"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full file:bg-gradient-to-b file:from-primary1 file:to-amber-500 file:px-6 file:py-3 file:n-5 file:border-none file:rounded-2xl file:text-white file:cursor-pointer file:shadow-lg file:shadow-amber-500/50 text-black/80 rounded-2xl cursor-pointer"
              />
            </div>
            {/* Isi Berita */}
            <div className="mb-2">
              <label>
                <span className="block font-medium text-lg text-black mr-10 w-64">
                  Isi Berita
                </span>
                <textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary1 text-black"
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
            onClick={addData}
          >
            {isLoading ? <Loading /> : buttonContent}
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
