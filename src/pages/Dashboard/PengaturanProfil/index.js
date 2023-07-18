import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@material-tailwind/react";
import { images } from "../../../constans";
import ButtonSubmit from "../../../components/ButtonSubmit";
import { getToken } from "../../../utils/storage";
import fetch from "../../../utils/fetch";

const Profil = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [akunData, setAkunData] = useState({
    email: "",
    password: ""
  });

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const [adminData, setAdminData] = useState({
    id_bumdes_umkm: "",
    name: "",
    address: "",
    phone: "",
    file: ""
  });

  const fetchEmail = async () => {
    const token = getToken();
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/auth/signup/bumdes`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        email: akunData.email,
        password: akunData.password
      },
    };

    try {
      const response = await fetch(options);
      setAkunData({
        email: response.data.email,
        password: response.data.password
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil email:", error);
    }
  };

  const handleSubmitProfile = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user/bumdes/profil`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id_bumdes_umkm: adminData.id_bumdes_umkm,
        name: adminData.name,
        address: adminData.address,
        phone: adminData.phone,
        file: adminData.file,
        email: akunData.email,
        password: akunData.password
      },
    };

    try {
      const response = await fetch(options);
      if (response.success) {
        setButtonContent("Simpan");
      } else {
        console.error("Gagal memperbarui profil");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Terjadi kesalahan saat memperbarui profil:", error);
      setIsLoading(false);
    }
  };

  const handleSubmitPassword = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user/bumdes/password`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        email: akunData.email,
        password: akunData.password
      },
    };

    try {
      const response = await fetch(options);
      if (response.success) {
        setButtonContent("Simpan");
      } else {
        console.error("Gagal memperbarui password");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Terjadi kesalahan saat memperbarui password:", error);
      setIsLoading(false);
    }
  };

  const fetchAdminData = async () => {
    const token = getToken();
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/bumdes`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      const response = await fetch(options);
      if (response.success) {
        const adminData = response.data.find(
          (admin) => admin.email === akunData.email
        );
        setAdminData(adminData);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data admin:", error);
    }
  };
  
  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    fetchAdminData();
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-grow flex flex-col justify-center m-4 md:m-32 shadow-xl mt-20">
          {/* pengaturan profile */}
          <div className="relative max-w-full overflow-hidden">
            <input
              type="checkbox"
              className="peer absolute top-0 insert-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
              checked={isOpen}
              onChange={handleDropdownToggle}
            />
            <div className="bg-white h-20 w-full pl-5 flex items-center">
              <h1 className="text-lg font-semibold text-black">Profile</h1>
            </div>
            <div className="absolute top-7 right-8 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <Tooltip content="View More">
                <ChevronDownIcon className="w-6 h-6" />
              </Tooltip>
            </div>
            {/* content */}
            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
              <div className="p-4 flex flex-col justify-center">
                <div className="flex flex-col items-center">
                  <img
                    src={images.banner1}
                    className="rounded-full flex justify-center w-[114px] h-[114px] mt-10"
                  />
                  <p className="mt-4 text-center text-sm text-gray-600">
                    Gambar yang diunggah harus berukuran lebar 500px dan panjang
                    500px
                  </p>
                </div>
                {/* form profile */}
                <div className="w-full mt-8">
                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {/* nama profile */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="nama"
                      >
                        Nama Tampilan Bumdes
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="Desa Sukapura"
                        value={adminData.name}
                        onChange={(e) =>
                          setAdminData({ ...adminData, name: e.target.value })
                        }
                      />
                    </div>
                    {/* alamat bumdes */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="alamat"
                      >
                        Alamat Desa
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="Jalan Sukapura"
                        value={adminData.address}
                        onChange={(e) =>
                          setAdminData({ ...adminData, address: e.target.value })
                        }
                      />
                    </div>
                    {/* kontak bumdes */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="kontak"
                      >
                        Kontak Desa
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="0822249823"
                        value={adminData.phone}
                        onChange={(e) =>
                          setAdminData({ ...adminData, phone: e.target.value })
                        }
                      />
                    </div>
                    {/* email */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="admin@gmail.com"
                        value={akunData.email}
                        onChange={(e) =>
                          setAkunData({ ...akunData, email: e.target.value })
                        }
                      />
                    </div>
                    <ButtonSubmit
                      label="Update Profile"
                      onClick={handleSubmitProfile}
                      isLoading={isLoading}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* pengaturan password */}
          <div className="relative max-w-full overflow-hidden">
            <input
              type="checkbox"
              className="peer absolute top-0 insert-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
            />
            <div className="bg-white h-20 w-full pl-5 flex items-center">
              <h1 className="text-lg font-semibold text-black">Password</h1>
            </div>
            <div className="absolute top-7 right-8 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <Tooltip content="View More">
                <ChevronDownIcon className="w-6 h-6" />
              </Tooltip>
            </div>
            {/* content */}
            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
              <div className="p-4">
                {/* form password */}
                <div className="w-full mt-8">
                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {/* password */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="password"
                        placeholder="Password"
                        value={akunData.password}
                        onChange={(e) =>
                          setAkunData({ ...akunData, password: e.target.value })
                        }
                      />
                    </div>
                    {/* re-type password */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="password"
                      >
                        Retype Password
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="password"
                        placeholder="Password"
                        value={akunData.password}
                        onChange={(e) =>
                          setAkunData({ ...akunData, password: e.target.value })
                        }
                      />
                    </div>
                    <ButtonSubmit
                      label="Update Password"
                      onClick={handleSubmitPassword}
                      isLoading={isLoading}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
