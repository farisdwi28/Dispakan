import { Routes, Route } from "react-router-dom";

import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Dashboard from "./pages/Dashboard/dashboard";
import AddUMKM from "./pages/Dashboard/TambahUMKM";
import UMKM from "./pages/Dashboard/UMKM";
import Produk from "./pages/Dashboard/DaftarProduk";
import Berita from "./pages/Dashboard/KelolaBerita";
import Profil from "./pages/Dashboard/PengaturanProfil";
import Notifikasi from "./pages/Dashboard/Notifikasi";
import DetailProduct from "./pages/DetailProduct";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/TambahUMKM" element={<AddUMKM />} />
        <Route path="/UMKM" element={<UMKM />} />
        <Route path="/DaftarProduk" element={<Produk />} />
        <Route path="/KelolaBerita" element={<Berita />} />
        <Route path="/PengaturanProfil" element={<Profil />} />
        <Route path="/Notifikasi" element={<Notifikasi />} />
        <Route path="/DetailProduct" element={<DetailProduct />} />
      </Routes>
    </div>
  );
}
