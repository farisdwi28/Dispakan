import React from "react";

import MainLayout from "../components/MainLayout";
import Carou from "../components/Carou";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";

import images from "../constans/images";
import { Link } from "react-router-dom";

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
    value: 5
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa Sukapura",
    like: 20,
    value: 5
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 2
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 5
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 5
  }
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
    value: 0
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa Sukapura",
    like: 20,
    value: 0
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0
  }
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
    value: 5
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa Sukapura",
    like: 20,
    value: 0
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 2
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 0
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa Sukapura",
    like: 20,
    value: 10
  }
];

const HomePage = () => {
  const limitedData = DummyData1.slice(0, 4);
  const limitedData1 = DummyData2.slice(0, 4);
  const limitedData2 = DummyData3.slice(0, 4);
  return (
    <MainLayout>
      <section>
        <div class="container mx-auto mb-8">
          <Carou />
          <div class="mt-6 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="relative bg-primary1 p-5 rounded-3xl flex justify-between">
              <div>
                <p class="font-light text-xl text-white">Kategori</p>
                <p class="font-black text-3xl text-white">Makanan</p>
                <button
                  type="button"
                  class="mt-3 text-primary1 bg-white border border-grey-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Lihat Lainnya
                </button>
              </div>
              <div class="relative h-32 w-32">
                <img
                  src={images.category1}
                  alt="kategori-makanan"
                  class="absolute inset-y-0 right-0 w-80"
                />
              </div>
            </div>

            <div class="relative bg-primary3 p-5 rounded-3xl flex justify-between">
              <div>
                <p class="font-light text-xl text-white">Kategori</p>
                <p class="font-black text-3xl text-white">Minuman</p>
                <button
                  type="button"
                  class="mt-3 text-primary1 bg-white border border-grey-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Lihat Lainnya
                </button>
              </div>
              <div class="relative h-32 w-32">
                <img
                  src={images.category2}
                  alt="kategori-minuman"
                  class="absolute inset-y-0 right-0 w-80"
                />
              </div>
            </div>

            <div class="relative bg-primary2 p-5 rounded-3xl flex justify-between">
              <div>
                <p class="font-light text-xl text-white">Kategori</p>
                <p class="font-black text-3xl text-white">Bahan Pangan</p>
                <button
                  type="button"
                  class="mt-3 text-primary1 bg-white border border-grey-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Lihat Lainnya
                </button>
              </div>
              <div class="relative h-32 w-32">
                <img
                  src={images.category3}
                  alt="kategori-bahan-pangan"
                  class="absolute inset-y-0 right-0 w-80"
                />
              </div>
            </div>
          </div>
          {/* Diskon */}
          <div class="flex justify-between pt-8">
            <div class="w-1/2">
              <h1 class="text-3xl font-bold dark:text-white py-4">
                Promo Menarik
              </h1>
            </div>
            <div class="w-1/2 flex justify-end">
              <p class="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Promo Semetara */}
          <Link to="/DetailProduct">
          <div className="flex gap-3 ">
            {limitedData.map(data => (
              <ProductCard key={data.id} {...data}/>
            ))}
          </div>
          </Link>
          {/* Akhir Promo */}
          {/* Terlaris */}
          <div class="flex justify-between pt-8">
            <div class="w-1/2">
              <h1 class="text-3xl font-bold dark:text-white py-4">
                Produk Terlaris
              </h1>
            </div>
            <div class="w-1/2 flex justify-end">
              <p class="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Produk terlaris sementara */}
          <Link to="/DetailProduct">
          <div className="flex gap-3">
            {limitedData1.map(data => (
              <ProductCard key={data.id} {...data} />
            ))}
          </div>
          </Link>
          {/* Akhir Produk Terlaris */}
          {/* UMKM */}
          <div class="flex justify-between pt-8">
            <div class="w-1/2">
              <h1 class="text-3xl font-bold dark:text-white py-4">
                Produk UMKM
              </h1>
            </div>
            <div class="w-1/2 flex justify-end">
              <p class="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Produk UMKM Sementara */}
          <Link to="/DetailProduct">
          <div className="flex gap-3">
            {limitedData2.map(data => (
              <ProductCard key={data.id} {...data} />
            ))}
          </div>
          </Link>
          {/* Akhir Produk UMKM */}
          {/* Berita Desa */}
          <div class="flex justify-between pt-8">
            <div class="w-1/2">
              <h1 class="text-3xl font-bold dark:text-white py-4">
                Berita Desa
              </h1>
            </div>
            <div class="w-1/2 flex justify-end">
              <p class="text-right text-primary1 text-lg font-medium py-4">
                Lihat lainnya
              </p>
            </div>
          </div>
          {/* Berita Desa Sementara */}
          <div className="flex gap-3">
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
