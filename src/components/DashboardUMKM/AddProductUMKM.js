import React, { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";

const FormAddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Makanan & Minuman",
    "Fashion",
    "Elektronik",
    "Otomotif",
    "Kerajinan Tangan"
  ];

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const [selectedDescription, setSelectedDescription] = useState("");

  const descriptioncategories = ["Varian Rasa", "Tipe", "Seri", "Jenis Bahan"];

  const handleDescriptionChange = event => {
    setSelectedDescription(event.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="container mx-auto">
      <div className="m-20">
        <h2 className="text-3xl font-semibold text-primary1 my-4 text-left">
          Tambah Produk Baru Mr. Mangkok
        </h2>
        <div className="bg-white p-6 md:p-8 border shadow-2xl rounded-xl">
          {/* form */}
          <form className="w-full">
            {/* nama product */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Nama Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Sertakan min. 40 karakter agar lebih menarik
              </p>
              <input
                type="text"
                class="peer ... w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please masukan judul produk.
              </p>
              {/* https://tailwindcss.com/docs/hover-focus-and-other-states?email=&password=Bosco */}
            </div>
            {/* foto product */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Foto Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Format foto .jpg .jpeg .png dan minimal ukuran 300 x 300px
                (maks. 10 foto)
              </p>
              {/* kotak input file gambar */}
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="peer ... w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <p className="block text-gray-600 font-medium text-sm mt-2">
                  {selectedFile.name}
                </p>
              )}
            </div>
            {/* harga product */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                harga Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Sertakan harga yang sesuai dengan produk
              </p>
              <input
                type="text"
                class="peer ... w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please masukan harga produk.
              </p>
            </div>
            {/* Deskripsi Produk */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Deskripsi Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Sertakan min. 100 karakter untuk memudahkan pembeli memahami dan
                menemukan produk Anda
              </p>
              <textarea
                className="peer ... w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                rows="4"
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please deskripsi yang sesuai dengan produk.
              </p>
            </div>
            {/* kategori produk */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Kategori Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Pilih kategori yang sesuai dengan produk
              </p>
              {/* dropdown */}
              <select
                className="peer ... w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="" disabled selected>
                  Pilih Kategori
                </option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* deskripsi lainnya */}
            <div className="mb-8">
              <label className="block text-black font-medium text-lg mb-2">
                Deskripsi Lainnya
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Pilih kategori yang sesuai dengan produk
              </p>
              {/* dropdown */}
              <select
                className="peer ... w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                value={selectedDescription}
                onChange={handleDescriptionChange}
              >
                <option value="" disabled selected>
                  Pilih Untuk Lainnya
                </option>
                {descriptioncategories.map(descriptioncategories => (
                  <option
                    key={descriptioncategories}
                    value={descriptioncategories}
                  >
                    {descriptioncategories}
                  </option>
                ))}
              </select>
            </div>
            <ButtonSubmit label="Simpan" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
