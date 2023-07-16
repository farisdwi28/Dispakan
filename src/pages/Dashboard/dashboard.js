import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { clearDataLogin, getUserData, getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";
import { images } from "../../constans";
// import icon

// import graphic chart
import Productchart from "../../components/GraphicChart/ProductChart";
import Umkmchart from "../../components/GraphicChart/UmkmChart";
import Blogchart from "../../components/GraphicChart/BlogChart";
import Categorychart from "../../components/GraphicChart/CategoryChart";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [totalActiveAccounts, setTotalActiveAccounts] = useState(0);

  useEffect(() => {
    const userdata = getUserData();
    if (!userdata) {
      clearDataLogin();
      navigate("/login");
    } else {
      getData();
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    clearDataLogin();
    navigate("/");
  };

  const getData = async () => {
    const token = getToken();
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/umkm?status=active`, // Menambahkan query parameter untuk filter status
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(options);
      setTotalActiveAccounts(response.data.length); // Menggunakan panjang array data untuk mendapatkan total akun aktif
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow container mx-auto p-6">
        <div className="Title">
          <div className="flex justify-between items-center h-auto pb-10">
            <h1 className="font-semibold text-primary1 text-3xl">
              Analisa Statistik
            </h1>
            <div className="relative inline-block text-left">
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
              {isOpen && (
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                  <div className="py-1">
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* container 3 dashboard statistik */}
        <div className="w-full h-[260px] bg-white rounded-lg drop-shadow-2xl flex mt-5">
          {/* statistik 1 */}
          <div class="w-full h-[212px] bg-slate-300 rounded-lg border border border border border-pink-50 m-5 drop-shadow-xl">
            <img
              src={images.boxIcon}
              className="w-20 h-20 left-5 top-5 relative bg-pink-400 bg-opacity-10 rounded-full"
            />
            <p className="w-[149.33px] left-28 top-8 absolute text-normal text-slate-500 text-[20px] font-normal">
              Total Produk
            </p>
            <p className="w-[149.33px] left-28 top-16 absolute text-normal text-slate-500 text-[20px] font-bold">
              215
            </p>
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                overflow: "hidden",
              }}
            >
              <Productchart />
            </div>
          </div>
          {/* statistik 2 */}
          <div class="w-full h-[212px] bg-slate-300 rounded-lg border border border border border-indigo-50 m-5 drop-shadow-xl">
            <img
              src={images.groupIcon}
              className="w-20 h-20 left-5 top-5 relative bg-pink-400 bg-opacity-10 rounded-full"
            />
            <p className="w-[149.33px] left-28 top-8 absolute text-normal text-slate-500 text-[20px] font-normal">
              Total UMKM
            </p>
            <p className="w-[149.33px] left-28 top-16 absolute text-normal text-slate-500 text-[20px] font-bold">
            {totalActiveAccounts || '-'}
            </p>
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                overflow: "hidden",
              }}
            >
              <Umkmchart />
            </div>
          </div>
          {/* statistik 3 */}
          <div class="w-full h-[212px] bg-slate-300 rounded-lg border border border border border-orange-50 m-5 drop-shadow-xl">
            <img
              src={images.viewsIcon}
              className="w-20 h-20 left-5 top-5 relative bg-pink-400 bg-opacity-10 rounded-full"
            />
            <p className="w-[149.33px] left-28 top-8 absolute text-normal text-slate-500 text-[20px] font-normal">
              Total Blog
            </p>
            <p className="w-[149.33px] left-28 top-16 absolute text-normal text-slate-500 text-[20px] font-bold">
              62
            </p>
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                overflow: "hidden",
              }}
            >
              <Blogchart />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          {/* statistik top kategori */}
          <div className="w-full h-[450px] mt-10 p-8 bg-white rounded-lg drop-shadow-2xl flex flex-col justify-between items-center mb-4">
            <div className="flex">
              <div className="items-left mb-4 mr-10">
                <h2 className="text-xl font-semibold text-left">
                  Kategori UMKM
                </h2>
                <p className="text-gray-500 text-sm text-left">
                  Terhitung dari 24 Juni 2023
                </p>
              </div>
              <a
                href="#"
                className="text-indigo-500 font-bold text-sm text-right"
              >
                View Report
              </a>
            </div>
            <Categorychart />
          </div>
          {/* statistik link */}
          {/* statistik rank umkm */}
          <div className="w-full h-[450px] mt-10 p-8 bg-white rounded-lg drop-shadow-2xl flex flex-col justify-between items-center mb-4">
            <div className="flex">
              <div className="items-left mb-4 mr-10">
                <h2 className="text-xl font-semibold text-left">
                  Rank Like Terbanyak
                </h2>
                <p className="text-gray-500 text-sm text-left">
                  Terhitung dari 24 Juni 2023
                </p>
              </div>
              <a
                href="#"
                className="text-indigo-500 font-bold text-sm text-right"
              >
                View Report
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
