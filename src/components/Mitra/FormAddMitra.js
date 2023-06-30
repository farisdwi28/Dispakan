import React from "react";

const FormAddMitra = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="bg-white m-10 p-6 border shadow-2xl rounded-xl">
      <h2 className="text-3xl font-semibold text-primary1 mb-4">
        Tambah Mitra UMKM
      </h2>
      <form className="w-75 max-w-md mx-auto" onSubmit={handleSubmit}>
        {/* Nama Store */}
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Nama Store
          </label>
          <input className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* Nama Pemilik */}
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Nama Pemilik
          </label>
          <input className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* Alamat Mitra*/}
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Alamat Mitra
          </label>
          <input className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* No Telepon */}
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            No Telepon
          </label>
          <input className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* Email */}
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Email
          </label>
          <input className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* kata Sandi */}
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Kata Sandi
          </label>
          <input
            className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
            type="password"
          />
        </div>
        {/* Re-Type Kata Sandi */}
        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Konfirmasi Kata Sandi
          </label>
          <input
            className="w-full md:w-72 border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
            type="password"
          />
        </div>
        {/* Input File */}
        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10">
            Profile Picture
          </label>
          <input
            className="file:bg-gradient-to-b file:from-primary1 file:to-amber-500 file:px-6 file:py-3 file:n-5 file:border-none file:rounded-2xl file:text-white file:cursor-pointer file:shadow-lg file:shadow-amber-500/50 text-black/80 rounded-2xl cursor-pointer"
            type="file"
          />
        </div>
      </form>
    </div>
  );
};

export default FormAddMitra;
