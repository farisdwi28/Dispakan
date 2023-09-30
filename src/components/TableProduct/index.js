import {
  Card,
  Typography,
  CardBody,
  Chip,
} from "@material-tailwind/react";
import { images } from "../../constans";
import { useEffect, useState } from "react";
import fetch from "../../utils/fetch";
import { getToken } from "../../utils/storage";
import DetailProduct from "../Product/DetailProduct";

const TABLE_HEAD = [
  "ID Produk",
  "Gambar Produk",
  "Nama Produk",
  "Harga",
  "Deskripsi",
  "Kategori",
  "Sales",
  "ID Store",
  "Status",
  "Action",
];

const TABLE_ROWS = [
  {
    Id_Product: 1,
    Image: images.product1,
    name: "Kue Kembang Jahe",
    price: 15000,
    description: "Produk Kue Olehan Lokal dengan bahan dasar Jahe",
    category: "Makanan Instant",
    sales: 12,
    url_image: "https://yanto.group.com",
    Values: 0,
    Id_Store: 1,
  },
  {
    Id_Product: 2,
    Image: images.product2,
    name: "Kue Kembang Buah",
    price: 15000,
    description: "Produk Kue Olahan Lokal dengan kembang buah",
    category: "Makanan Instant",
    sales: 12,
    url_image: "https://yanto.group.com",
    Values: 1,
    Id_Store: 1,
  },
  {
    Id_Product: 3,
    Image: images.product3,
    name: "Boboko Snack",
    price: 15000,
    description: "Bakso Aci Tulang Rangu",
    category: "Makanan Instant",
    sales: 12,
    url_image: "https://yanto.group.com",
    Values: 1,
    Id_Store: 1,
  },
];

export default function TableProdct() {
  const [tableData, setTableData] = useState(TABLE_ROWS);

  const getData = async () => {
    try {
      const token = getToken();
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/product`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await fetch(options);
      setTableData(data.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
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
            {tableData.map(
              (
                {
                  id,
                  url_image,
                  name,
                  price,
                  description,
                  category,
                  sale,
                  status,
                  store,
                },
                index
              ) => {
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
                      <img
                        src={url_image[0]}
                        className="w-25 h-25 rounded-xl"
                      />
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
                        {category}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sale}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {store && store.id}
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
                        <DetailProduct data={tableData[index]}></DetailProduct>
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
