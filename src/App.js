import { Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Dashboard from "./pages/Dashboard/dashboard";
import DashboardUMKM from "./pages/DashboardUMKM/DashboardUMKM";
import AddUMKM from "./pages/Dashboard/TambahUMKM";
import UMKM from "./pages/Dashboard/UMKM";
import Produk from "./pages/Dashboard/DaftarProduk";
import Berita from "./pages/Dashboard/KelolaBerita";
import Profil from "./pages/Dashboard/PengaturanProfil";
import Notifikasi from "./pages/Dashboard/Notifikasi";
import DetailProduct from "./pages/DetailProduct";
import TambahProduk from "./pages/DashboardUMKM/TambahProduk";
import PengaturanProfilUMKM from "./pages/DashboardUMKM/PengaturanProfile";
import DaftarProdukUMKM from "./pages/DashboardUMKM/DaftarProduk";
import UMKMRoute from "./components/UmkmRoute";
import BumdesRoute from "./components/BumdesRoute";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route
          path="/Dashboard"
          element={
            <BumdesRoute>
              <Dashboard />
            </BumdesRoute>
          }
        />
        <Route
          path="/DashboardUMKM"
          element={
            <UMKMRoute>
              <DashboardUMKM />
            </UMKMRoute>
          }
        />
        <Route
          path="/TambahUMKM"
          element={
            <BumdesRoute>
              <AddUMKM />
            </BumdesRoute>
          }
        />
        <Route
          path="/UMKM"
          element={
            <BumdesRoute>
              <UMKM />
            </BumdesRoute>
          }
        />
        <Route
          path="/DaftarProduk"
          element={
            <BumdesRoute>
              <Produk />
            </BumdesRoute>
          }
        />
        <Route
          path="/KelolaBerita"
          element={
            <BumdesRoute>
              <Berita />
            </BumdesRoute>
          }
        />
        <Route
          path="/PengaturanProfil"
          element={
            <BumdesRoute>
              <Profil />
            </BumdesRoute>
          }
        />

        <Route
          path="/Notifikasi"
          element={
            <UMKMRoute>
              <Notifikasi />
            </UMKMRoute>
          }
        />
        <Route path="/DetailProduct" element={<DetailProduct />} />
        <Route
          path="/TambahProdukUMKM"
          element={
            <UMKMRoute>
              <TambahProduk />
            </UMKMRoute>
          }
        />
        <Route
          path="/DaftarProdukUMKM"
          element={
            <UMKMRoute>
              <DaftarProdukUMKM />
            </UMKMRoute>
          }
        />
        <Route
          path="/PengaturanProfilUMKM"
          element={
            <UMKMRoute>
              <PengaturanProfilUMKM />
            </UMKMRoute>
          }
        />
      </Routes>
    </div>
  );
}
