import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip
} from "@material-tailwind/react";
import { HeartIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ProductCard = props => {
  const { img, title, price, owner, address, like, value } = props;

  return (
    <Card className="w-full md:w-96 lg:w-[calc(25%-1rem)] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative h-[24rem] md:h-96"
      >
        {value !== 0 && (
          <Chip
            color="red"
            value={value + "% OFF"}
            className="text-base absolute w-17 rounded-full mt-3 ml-3"
          />
        )}
        <img src={img} className="w-full h-full object-cover" alt="Product" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Rp.{price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {owner}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="flex items-center gap-1.5 font-normal opacity-75"
        >
          <MapPinIcon className="-mt-0.5 h-5 w-5 text-red-700" />
          {address}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="flex items-center gap-1.5 font-normal opacity-75"
        >
          <HeartIcon className="-mt-0.5 h-5 w-5 text-red-700" />
          {like}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
