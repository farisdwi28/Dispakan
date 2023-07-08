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
  "No Berita",
  "Cover Berita",
  "Judul Berita",
  "Tanggal Berita",
  "Penulis Berita",
  "Status",
  "Action"
];

const TABLE_ROWS = [
  {
    id_berita: 1,
    cover: images.news1,
    headline:
      "Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022",
    date_news: "8-Juli-2023",
    news_writter: "Faris Dwi Ramadhan",
    status: 1
  },
  {
    id_berita: 2,
    cover: images.news2,
    headline:
      "Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022",
    date_news: "8-Juli-2023",
    news_writter: "Naura Yasmin",
    status: 0
  }
];

export default function TableNews() {
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
                { id_berita, cover, headline, date_news, news_writter, status },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id_berita}>
                    {/* nomor berita */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {id_berita}
                      </Typography>
                    </td>
                    {/* cover berita */}
                    <td className={classes}>
                      <img src={cover} className="w-60 h-30 rounded-xl" />
                    </td>
                    {/* juduk berita */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-100"
                      >
                        {headline}
                      </Typography>
                    </td>
                    {/* tanggal berita */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-100"
                      >
                        {date_news}
                      </Typography>
                    </td>
                    {/* penulis berita */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-100"
                      >
                        {news_writter}
                      </Typography>
                    </td>
                    {/* status berita */}
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
