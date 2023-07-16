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
  "ID Produk",
  "Gambar Produk",
  "Nama Produk",
  "Harga",
  "Deskripsi",
  "ID Store",
  "Kategori",
  "Status",
  "Action"
];

const TABLE_ROWS = [
  {
    id_product: 1,
    Image: images.product2,
    name_product: "Bakso Aci Nila",
    price: 15000,
    description: "Wes ngonolah pokok enak wes",
    id_store: 1,
    category: "makanan",
    status: 1
  },
  {
    id_product: 2,
    Image: images.product2,
    name_product: "Bakso Aci Nila",
    price: 15000,
    description: "Wes ngonolah pokok enak wes",
    id_store: 1,
    category: "makanan",
    status: 1
  },
  {
    id_product: 3,
    Image: images.product3,
    name_product: "Bakso Aci Nila",
    price: 15000,
    description: "Wes ngonolah pokok enak wes",
    id_store: 1,
    category: "makanan",
    status: 1
  }
];

export default function TableProductUMKM() {
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
                  id_product,
                  Image,
                  name_product,
                  price,
                  description,
                  id_store,
                  category,
                  status
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id_product}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {id_product}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img
                        src={Image}
                        className="w-20 h-20 rounded-xl"
                        alt="Product Image"
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name_product}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {id_store}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {category}
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
