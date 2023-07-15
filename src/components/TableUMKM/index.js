import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";

const TABLE_HEAD = [
  "ID UMKM",
  "Nama",
  "Alamat",
  "No Telp",
  "Email",
  "Status",
  "Action"
];

const TABLE_ROWS = [
  {
    id: 123123,
    name: "Firstki Aditya",
    address: "Nganjuk",
    phone: "08123123123",
    email: "adit@gmail.com",
    status: 1,
  },
  {
    id: 123321,
    name: "Faris Dwi Ramadhan",
    address: "Malang",
    phone: "081231312312",
    email: "Faris@gmail.com",
    status:1,
  },
  {
    id: 321123,
    name: "Saputra Ari Wijaya",
    address: "Bali",
    phone: "081231123",
    email: "ari@gmail.com",
    status: 1,
  },
  {
    id: 231132,
    name: "Naura Yasmin",
    address: "Tulungagung",
    phone: "08123112332",
    email: "naura@gmail.com",
    status: 1,
  }
];

export default function TableUMKM() {

  const [tableRows, setTableRows] = useState(TABLE_ROWS);

  const getData = async () => {
    const token = getToken()
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/umkm`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
    try {
      const response = await fetch(options);
      setTableRows(response.data)
    } catch (err) {
      alert(JSON.stringify(err))
    }
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(
              ({ id, name, address, phone, email, status }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {address}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {phone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={
                            status === true
                              ? "Active"
                              : status === false
                              ? "Inactive"
                              : "Inactive"
                          }
                          color={
                            status === true
                              ? "green"
                              : status === false
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-2">
                        <Tooltip content="Edit ">
                          <IconButton variant="text" color="blue-gray">
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit ">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <IconButton variant="text" color="blue-gray">
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
