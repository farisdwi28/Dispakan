import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
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
  "Kategori",
  "Sales",
  "Link",
  "ID Store",
  "Values",
  "Action"
];

//data dummy
const TABLE_ROWS = [
  {
    Id_Product: 1,
    Image: images.product1,
    Name_product: "Kue Kembang Jahe",
    Price: 15000,
    Description: "Produk Kue Olehan Lokal dengan bahan dasar Jahe",
    Category: "Makanan Instant",
    Sales: 12,
    Link: "https://yanto.group.com",
    Values: 0,
    Id_Store: 1
  },
  {
    Id_Product: 2,
    Image: images.product2,
    Name_product: "Kue Kembang Buah",
    Price: 15000,
    Description: "Produk Kue Olahan Lokal dengan kembang buah",
    Category: "Makanan Instant",
    Sales: 12,
    Link: "https://yanto.group.com",
    Values: 1,
    Id_Store: 1
  },
  {
    Id_Product: 3,
    Image: images.product3,
    Name_product: "Boboko Snack",
    Price: 15000,
    Description: "Bakso Aci Tulang Rangu",
    Category: "Makanan Instant",
    Sales: 12,
    Link: "https://yanto.group.com",
    Values: 1,
    Id_Store: 1
  }
];

export default function TableProdct() {
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
                    className="font-normal leading-none opacity-100"
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
                  Id_Product,
                  Image,
                  Name_product,
                  Price,
                  Description,
                  Category,
                  Sales,
                  Link,
                  Values,
                  Id_Store
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={Id_Product}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {Id_Product}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <img src={Image} className="w-25 h-25 rounded-xl" />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Name_product}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Description}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Category}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Sales}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Link}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {Id_Store}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={
                            Values === 1
                              ? "Active"
                              : Values === 0
                              ? "Inactive"
                              : "Inactive"
                          }
                          color={
                            Values === 1
                              ? "green"
                              : Values === 0
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
