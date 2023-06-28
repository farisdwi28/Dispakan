import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip
  } from "@material-tailwind/react";

import {
    HeartIcon, 
} from "@heroicons/react/24/solid";
   
  const EventCard = (props) => {
    const { img, title, price, owner, like, value} = props;
    return (
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="relative h-96">
        <Chip color="red" value={value+"% OFF"} className="absolute w-16 rounded-full mt-3 ml-3"/>  
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
            <HeartIcon className="-mt-0.5 h-5 w-5 text-red-700" />
            {like}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default EventCard