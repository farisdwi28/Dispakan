import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { images } from "../../../constans";
import InputSearch from "../../../components/InputSearch";
import ButtonExcel from "../../../components/ButtonExel";
import TableProduct from "../../../components/TableProduct";

const Produk = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow container mx-auto p-6">
        <div className="absolute right-32 inline-block text-left ">
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-800 bg-white border border-none rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={images.profil1}
                alt="Profile"
              />
              <span className="ml-2">Desa Sukapura</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M6 8l4 4 4-4h-8z" />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
              <div className="py-1">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="Title">
          <h1 className="font-semibold text-primary1 mt-20 text-3xl">
            Daftar Produk UMKM Desa Sukapura
          </h1>
        </div>
        <div className="absolute flex gap-2 pt-4">
          <InputSearch placeholder="Cari Produk" width="10" />
          <ButtonExcel />
          <div className="">{/* Show Entries */}</div>
        </div>
        <div className="py-20 w-[80rem]">
          <TableProduct />
        </div>
      </main>
    </div>
  );
};

export default Produk;
