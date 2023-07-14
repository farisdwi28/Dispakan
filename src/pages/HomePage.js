import React from "react";

import MainLayout from "../components/MainLayout";
import Carou from "../components/Carou";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";

import images from "../constans/images";
import { Link } from "react-router-dom";
import axios from "axios";

// dummy card diskon
const DummyData1 = [
  {
    id: 1,
    img: `${images.product1}`,
    title: "Kue Kembang Jahe",
    price: 23000,
    owner: "Ainun Cake",
    address: "Desa Sukapura",
    like: 20,
    value: 5,
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa Sukapura",
    like: 20,
    value: 5,
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 2,
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 5,
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 5,
  },
];
// datadummy card tidak diskon
const DummyData2 = [
  {
    id: 1,
    img: `${images.product1}`,
    title: "Kue Kembang Jahe",
    price: 23000,
    owner: "Ainun Cake",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
];
//datadummy card UMKM All
const DummyData3 = [
  {
    id: 1,
    img: `${images.product1}`,
    title: "Kue Kembang Jahe",
    price: 23000,
    owner: "Ainun Cake",
    address: "Desa Sukapura",
    like: 20,
    value: 5,
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 2,
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0,
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 10,
  },
];

const HomePage = () => {
  const limitedData = DummyData1.slice(0, 4);
  const limitedData1 = DummyData2.slice(0, 4);
  const limitedData2 = DummyData3.slice(0, 4);
  return (
    <MainLayout>
      <section>
        <div className="container mx-auto mb-8">
          <Carou />
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 justify-between pt-10 gap-3">
            <div className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1 ">
              <img src={images.MM} alt="Makanan & Minuman"/>
              <p className="pt-4 text-center">Makanan & Minuman</p>
            </div>
            <div className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1">
              <img src={images.Kue} alt="Kue" />
              <p className="pt-4">Kue</p>
            </div>
            <div className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1">
              <img src={images.Hangar} alt="Fashion" />
              <p className="pt-4">Fashion</p>
            </div>
            <div className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1">
              <img src={images.KT} alt="Kerajinan Tangan" />
              <p className="pt-4">Kerajinan Tangan</p>
            </div>
            <div className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1">
              <img src={images.Daun} alt="Tanaman" />
              <p className="pt-4">Tanaman</p>
            </div>
            <div className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1">
              <img src={images.Otomotif} alt="Otomotif" />
              <p className="pt-4">Otomotif</p>
            </div>
          </div>

          {/* Diskon */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4">
                Promo Menarik
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <p className="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Promo Sementara */}
          <Link to="/DetailProduct">
            <div className="flex gap-3 overflow-x-auto">
              {limitedData.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </Link>
          {/* Akhir Promo */}
          {/* Terlaris */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4">
                Produk Terlaris
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <p className="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Produk Terlaris Sementara */}
          <Link to="/DetailProduct">
            <div className="flex gap-3 overflow-x-auto">
              {limitedData1.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </Link>
          {/* Akhir Produk Terlaris */}
          {/* UMKM */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4">
                Produk UMKM
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <p className="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Produk UMKM Sementara */}
          <Link to="/DetailProduct">
            <div className="flex gap-3 overflow-x-auto">
              {limitedData2.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </Link>
          {/* Akhir Produk UMKM */}
          {/* Berita Desa */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4">
                Berita Desa
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <p className="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Berita Desa Sementara */}
          <div className="flex gap-3 overflow-x-auto">
            <NewsCard
              img={images.news1}
              title="Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022"
              description="Desa Sekarpura"
            />
            <NewsCard
              img={images.news2}
              title="Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022"
              description="Desa Sekarpura"
            />
          </div>
          {/* Berita Desa End */}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
