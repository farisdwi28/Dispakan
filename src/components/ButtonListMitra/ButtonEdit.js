import { Fragment, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import FormBasic from "../../elements/FormBasic";
import { getToken, getUserData } from "../../utils/storage";
import { PencilIcon } from "@heroicons/react/24/solid";
import Toggle from "../../elements/Switch";

export default function Edit() {
  const [open, setOpen] = useState(false);
  const [selectedUmkmId, setSelectedUmkmId] = useState("");
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [umkmData, setUmkmData] = useState({
    id_owner_umkm: "",
    name: "",
    address: "",
    phone: "",
    status: true,
  });

  const handleOpen = (umkmId) => {
    setOpen(!open);
    setSelectedUmkmId(umkmId);
  };

  const editData = async () => {
    setIsLoading(true);
    const token = getToken();
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/umkm/profile/${selectedUmkmId}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Tambahkan header Content-Type untuk POST request
      },
      body: JSON.stringify({
        name: umkmData.name,
        address: umkmData.address,
        phone: umkmData.phone,
        status: umkmData.status,
      }),
    };

    try {
      const response = await fetch(options.url, {
        method: options.method,
        headers: options.headers,
        body: options.body,
      });

      if (response.ok) {
        setButtonContent("Simpan");
      } else {
        console.error("Failed to edit UMKM data.");
      }
    } catch (error) {
      console.error("Error editing UMKM data:", error);
    }

    setIsLoading(false);
  };

  const fetchUmkmData = async () => {
    if (!selectedUmkmId) return;

    setIsLoading(true);
    const token = getToken();
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/umkm/${selectedUmkmId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(options.url, {
        method: options.method,
        headers: options.headers,
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.data && data.data.length > 0) {
          // Map API response data to the umkmData state with the correct property names
          const umkm = data.data[0];
          setUmkmData({
            id_owner_umkm: umkm.id,
            name: umkm.name,
            address: umkm.address,
            phone: umkm.phone,
            status: umkm.status,
          });
        } else {
          console.error("No UMKM data found.");
        }
      } else {
        console.error("Failed to fetch UMKM data.");
      }
    } catch (error) {
      console.error("Error fetching UMKM data:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUmkmData();
  }, [selectedUmkmId]);

  // Update the umkmData state whenever the selectedUmkmId changes
  useEffect(() => {
    // If selectedUmkmId is empty, reset umkmData to default values
    if (!selectedUmkmId) {
      setUmkmData({
        id_owner_umkm: "",
        name: "",
        address: "",
        phone: "",
        status: true,
      });
    }
  }, [selectedUmkmId]);

  return (
    <Fragment>
      <Tooltip content="Edit">
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => handleOpen(selectedUmkmId)}
        >
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Edit Mitra</DialogHeader>
        <DialogBody divider>
          <FormBasic
            label="Nama"
            placeholder="Name"
            type="text"
            value={umkmData.name}
            onChangeValue={(value) => setUmkmData({ ...umkmData, name: value })}
          />
          <FormBasic
            label="Alamat"
            placeholder="Address"
            type="text"
            value={umkmData.address}
            onChangeValue={(value) =>
              setUmkmData({ ...umkmData, address: value })
            }
          />
          <FormBasic
            label="No Telp"
            placeholder="Number"
            type="text"
            value={umkmData.phone}
            onChangeValue={(value) =>
              setUmkmData({ ...umkmData, phone: value })
            }
          />
          <Toggle
            checked={umkmData.status}
            onChange={(value) => setUmkmData({ ...umkmData, status: value })}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen("")} // Reset selectedUmkmId to empty string to clear form on cancel
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={editData}
            disabled={isLoading}
          >
            <span>{isLoading ? "Loading..." : buttonContent}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
