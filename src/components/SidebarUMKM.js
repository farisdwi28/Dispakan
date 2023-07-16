import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  PlusCircleIcon
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function SidebarUMKM() {
  return (
    <Card className="h-[calc(101vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h3" className="text-primary1 text-center">
          Dispakan.
        </Typography>
      </div>
      <List>
        <NavLink
          to="/DashboardUMKM"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </NavLink>
        <NavLink
          to="/TambahProdukUMKM"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <PlusCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Tambah Produk
          </ListItem>
        </NavLink>
        <NavLink
          to="/DaftarProdukUMKM"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Daftar Produk
          </ListItem>
        </NavLink>
        <NavLink
          to="/PengaturanProfilUMKM"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Pengaturan Profil
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
}
