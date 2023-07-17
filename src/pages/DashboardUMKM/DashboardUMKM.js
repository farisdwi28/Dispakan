import React, { useState } from "react";
import SidebarUMKM from "../../components/SidebarUMKM";
import { images } from "../../constans";
// import icon

// import graphic chart
import Productchart from "../../components/GraphicChart/ProductChart";
import Umkmchart from "../../components/GraphicChart/UmkmChart";
import Blogchart from "../../components/GraphicChart/BlogChart";
import BarChart from "../../components/GraphicChart/BarChart";

const DashboardUMKM = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const DummyData4 = [
    {
      id: 9,
      title: "Yanto",
      like: 90
    },
    {
      id: 10,
      title: "Wawan",
      like: 85
    },
    {
      id: 11,
      title: "Bakso Aci Nila",
      like: 80
    },
    {
      id: 12,
      title: "Bakso Aci Pindang",
      like: 75
    },
    {
      id: 13,
      title: "Bakso Aci Gurame",
      like: 70
    },
    {
      id: 14,
      title: "Bakso Aci Belut",
      like: 75
    },
    {
      id: 15,
      title: "Bakso Aci Kodok",
      like: 75
    }
  ];

  return (
    <div className="flex page-container bg-gray-300">
      <SidebarUMKM />
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
              <span className="ml-2">Makpingah</span>
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
        <div className="Title mt-14">
          <h1 className="font-semibold text-primary1 text-3xl">
            Analisa Statistik
          </h1>
        </div>
        {/* container 3 dashboard statistik */}
        <div className="w-full h-[260px] bg-white rounded-lg drop-shadow-2xl flex mt-2">
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
                overflow: "hidden"
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
              Total
            </p>
            <p className="w-[149.33px] left-28 top-16 absolute text-normal text-slate-500 text-[20px] font-bold">
              46
            </p>
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                overflow: "hidden"
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
            <p className="w-auto left-28 top-8 absolute text-normal text-slate-500 text-[20px] font-normal">
              Total Pengunjung
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
                overflow: "hidden"
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
                  Analisa Sosial Media
                </h2>
              </div>
              <a
                href="#"
                className="text-indigo-500 font-bold text-sm text-right"
              >
                View Report
              </a>
            </div>
            <BarChart />
          </div>
          {/* statistik link */}
          {/* statistik rank umkm */}
          <div className="w-full h-[450px] mt-10 p-8 bg-white rounded-lg drop-shadow-2xl flex flex-col justify-between items-center mb-4">
            <div className="flex flex-col">
              <div className="flex flex-row">
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
              {/* rank gold-medal */}
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-left gap-2">
                  <img src={images.goldmedal} className="w-[27px] h-[27px]" />
                  <p>Baso Aci Ikan Nila</p>
                </div>
                <div className="flex flex-row items-right gap-2 items-center">
                  <img src={images.like} className="w-5 h-4" />
                  <p>215</p>
                </div>
              </div>
              {/* rank silver-medal */}
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="flex flex-row items-left gap-2">
                  <img src={images.silvermedal} className="w-[27px] h-[27px]" />
                  <p>Baso Aci Ikan Nila</p>
                </div>
                <div className="flex flex-row items-right gap-2 items-center">
                  <img src={images.like} className="w-5 h-4" />
                  <p>210</p>
                </div>
              </div>
              {/* rank bronze-medal */}
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="flex flex-row items-left gap-2">
                  <img src={images.bronzemedal} className="w-[27px] h-[27px]" />
                  <p>Baso Aci Ikan Nila</p>
                </div>
                <div className="flex flex-row items-right gap-2 items-center">
                  <img src={images.like} className="w-5 h-4" />
                  <p>115</p>
                </div>
              </div>
              {/* rank 4 - 8 */}
              {DummyData4.slice(0, 7).map((data, index) => (
                <div
                  className="flex flex-row justify-between items-center mt-2"
                  key={index}
                >
                  <div className="flex flex-row items-left gap-2">
                    <p>{index + 4}.</p>
                    <p>{data.title}</p>
                  </div>
                  <div className="flex flex-row items-right gap-2 items-center">
                    <img src={images.like} className="w-5 h-4" />
                    <p>{data.like}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardUMKM;
