import React from "react";
import ButtonSubmit from "../ButtonSubmit";

const FormAddMitra = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
  <div className="absolute inset-x-72 top-10 container align-center max-w-[100rem] pl-20">
    <div className="bg-white m-10 p-6 border shadow-2xl rounded-xl ">
      <h2 className="text-3xl font-semibold text-primary1 my-4 text-center">
        Tambah Mitra UMKM
      </h2>
      <form className="w-90" onSubmit={handleSubmit}>
        {/* Nama Store */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg mr-10 w-64">
            Nama Store
          </label>
          <input className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* Nama Pemilik */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10 w-64">
            Nama Pemilik
          </label>
          <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* Alamat Mitra*/}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10 w-64">
            Alamat Mitra
          </label>
          <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* No Telepon */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10 w-64">
            No Telepon
          </label>
          <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* Email */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10 w-64">
            Email
          </label>
          <input className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1" />
        </div>
        {/* kata Sandi */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10 w-64">
            Kata Sandi
          </label>
          <input
            className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
            type="password"
          />
        </div>
        {/* Re-Type Kata Sandi */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg  mr-10 w-64">
            Konfirmasi Kata Sandi
          </label>
          <input
            className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
            type="password"
          />
        </div>
        {/* Input File */}
        <div className="my-4 flex justify-between items-center">
          <label htmlFor="name" className="block font-medium text-lg">
            Profile Picture
          </label>
          <input
            className="absolute ml-[15.5rem] file:bg-gradient-to-b file:from-primary1 file:to-amber-500 file:px-6 file:py-3 file:n-5 file:border-none file:rounded-2xl file:text-white file:cursor-pointer file:shadow-lg file:shadow-amber-500/50 text-black/80 rounded-2xl cursor-pointer "
            type="file"
          />
        </div>
        <div className="text-right py-10">
          <ButtonSubmit 
          label = "Simpan"
          />
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormAddMitra;
