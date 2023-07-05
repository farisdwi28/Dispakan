import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["ID UMKM", "Nama", "Alamat", "No Telp", "Email", "Kategori", "Status", ""];
 
const TABLE_ROWS = [
  {
    ID : 123123, 
    Name : "Firstki Aditya", 
    Address : "Nganjuk", 
    Telp : "08123123123", 
    Email : "adit@gmail.com", 
    Catagory : "Kuliner", 
    status : 1
  },
  {
    ID : 123321, 
    Name : "Faris Dwi Ramadhan", 
    Address : "Malang", 
    Telp : "081231312312", 
    Email : "Faris@gmail.com", 
    Catagory : "Desert", 
    status : 0
  },
  {
    ID : 321123, 
    Name : "Saputra Ari Wijaya", 
    Address : "Bali", 
    Telp : "081231123", 
    Email : "ari@gmail.com", 
    Catagory : "Kuliner", 
    status : 1
  },
  {
    ID : 231132, 
    Name : "Naura Yasmin", 
    Address : "Tulungagung", 
    Telp : "08123112332", 
    Email : "naura@gmail.com", 
    Catagory : "Kuliner", 
    status : 0
  },
];
 
export default function TableUMKM() {
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
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
              ({ID, Name, Address, Telp, Email, Catagory, status}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={ID}>
                    <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {ID}
                        </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Address}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Telp}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Catagory}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status === 1 ? "Active" : status === 0 ? "Inactive" : "Inactive"}
                          color={
                            status === 1 ? "green" : status === 0 ? "amber" : "red"
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
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

