import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserPlusIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  GlobeAsiaAustraliaIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Card className="h-[calc(101vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h3" className="text-primary1 text-center">
          Dispakan.
        </Typography>
      </div>
      <List>
        <NavLink
          to="/Dashboard"
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
          to="/TambahUMKM"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <UserPlusIcon className="h-5 w-5" />
            </ListItemPrefix>
            Tambah UMKM
          </ListItem>
        </NavLink>
        <NavLink
          to="/UMKM"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            UMKM
          </ListItem>
        </NavLink>
        <NavLink
          to="/DaftarProduk"
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
          to="/KelolaBerita"
          className={({ isActive }) =>
            isActive ? "bg-primary1 text-white rounded-2xl" : ""
          }
        >
          <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
            <ListItemPrefix>
              <GlobeAsiaAustraliaIcon className="h-5 w-5" />
            </ListItemPrefix>
            Kelola Berita
          </ListItem>
        </NavLink>
        <NavLink
          to="/PengaturanProfil"
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
