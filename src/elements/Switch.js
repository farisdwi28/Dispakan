import { Switch } from "@material-tailwind/react";
 
export default function Toogle() {
  return (
    <div className="flex w-max gap-4">
      <Switch id="green" color="green" defaultChecked />
    </div>
  );
}