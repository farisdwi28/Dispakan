import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import { images } from "../../constans";

const TABLE_HEAD = [
  "ID Usaha",
  "Nama Usaha/Toko",
  "Alamat Usaha",
  "No Telepon",
  "Aspek Usaha",
  "Kategori",
  "Status",
  "Action"
];

//data dummy
const TABLE_ROWS = [
  {
    Id_Usaha: 1,
    nama_usaha: "Mr. Mangkok",
    alamat_usaha: "Permata Buah Batu",
    no_telpon: "08222923",
    aspek_usaha: "PIRT",
    kategori: "Makanan",
    status: 1
  },
  {
    Id_Usaha: 2,
    nama_usaha: "Mr. Mangkok",
    alamat_usaha: "Permata Buah Batu",
    no_telpon: "08222923",
    aspek_usaha: "PIRT",
    kategori: "Makanan",
    status: 1
  },
  {
    Id_Usaha: 3,
    nama_usaha: "Mr. Mangkok",
    alamat_usaha: "Permata Buah Batu",
    no_telpon: "08222923",
    aspek_usaha: "PIRT",
    kategori: "Makanan",
    status: 1
  }
];

export default function TableUsahaMitra() {
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
            {TABLE_ROWS.map(
              (
                {
                  Id_Usaha,
                  nama_usaha,
                  alamat_usaha,
                  no_telpon,
                  aspek_usaha,
                  kategori,
                  status
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={Id_Usaha}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {Id_Usaha}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {nama_usaha}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {alamat_usaha}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {no_telpon}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {aspek_usaha}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {kategori}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={
                            status === 1
                              ? "Active"
                              : status === 0
                              ? "Inactive"
                              : "Inactive"
                          }
                          color={
                            status === 1
                              ? "green"
                              : status === 0
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
