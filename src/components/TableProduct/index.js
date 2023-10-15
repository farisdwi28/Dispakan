import React, { useEffect, useState } from "react";
import { Card, Typography, CardBody, Chip } from "@material-tailwind/react";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";
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

export default function TableProduct() {
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    try {
      const token = getToken();
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/product`,
        params: {
          active_on: "sukabirus",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(options);

      if (response && response.data && Array.isArray(response.data)) {
        setTableData(response.data);
      } else {
        console.error("Data from the API is not an array.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
        {tableData.length > 0 ? (
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
                ({
                  id,
                  url_image,
                  name,
                  price,
                  description,
                  category,
                  sale,
                  status,
                  store,
                }) => {
                  const classes = "p-4 border-b border-blue-gray-50";

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
                        {url_image && url_image[0] ? (
                          <img
                            src={url_image[0]}
                            alt={name}
                            className="w-25 h-25 rounded-xl"
                          />
                        ) : (
                          "No Image Available"
                        )}
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
                          <DetailProduct data={tableData} />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        ) : (
          <Typography variant="body" color="blue-gray" className="p-4">
            No data available.
          </Typography>
        )}
      </CardBody>
    </Card>
  );
}
