import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

import {
    HeartIcon, 
    MapPinIcon,
} from "@heroicons/react/24/solid";
   
  const NormalCard = (props) => {
    const { img, title, price, owner, like, address} = props;
    return (
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-96">  
          <img 
            src={img}
            className="w-full h-full object-cover"
          />
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
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            {owner}
          </Typography>
          <Typography variant="small" color="gray" className="flex items-center gap-1.5 font-normal opacity-75">
            <MapPinIcon className="-mt-0.5 h-5 w-5" />
            {address}
          </Typography>
          <Typography variant="small" color="gray" className="flex items-center gap-1.5 font-normal opacity-75">
            <HeartIcon className="-mt-0.5 h-5 w-5 text-red-700" />
            {like}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default NormalCard