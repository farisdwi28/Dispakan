import React, { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import { getToken } from "../../utils/storage";
import FormBasic from "../../elements/FormBasic";
import InputPassword from "../../elements/InputPassword";
import fetch from "../../utils/fetch";
import Loading from "../../elements/Spinner";
import { useNavigate } from "react-router-dom";

const FormAddMitra = () => {
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const [umkmData, setUmkmData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const addData = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!umkmData.name || !umkmData.address || !umkmData.phone || !umkmData.email || !umkmData.password) {
      setAlertMessage("Please fill in all required fields");
      return;
    }

    if (umkmData.password !== umkmData.passwordConfirmation) {
      setAlertMessage("Password and confirmation do not match");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(umkmData.password)) {
      setAlertMessage("Password must be at least 8 characters long, contain at least one uppercase letter, and one special character (!, @, #, $, %, ^, &, *)");
      return;
    }

    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/auth/signup/owner-umkm`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        name: umkmData.name,
        address: umkmData.address,
        phone: umkmData.phone,
        email: umkmData.email,
        password: umkmData.password
      }
    };
    const fetchResult = await fetch(options);
    if (fetchResult.success) {
      setButtonContent("Sukses Menyimpan!");
      window.location.reload(true);
      navigate("/UMKM"); 
    }
    setIsLoading(false);
  };

  return (
    <div className="absolute inset-x-72 top-10 container align-center max-w-[100rem] pl-20">
      <div className="bg-white m-10 p-6 border shadow-2xl rounded-xl">
        <h2 className="text-3xl font-semibold text-primary1 my-4 text-center">
          Tambah Mitra UMKM
        </h2>
        {alertMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">{alertMessage}</span>
          </div>
        )}
        <form className="w-90">
          {/* Nama Pemilik */}
          <FormBasic
            label="Nama Pemilik"
            placeholder="Name"
            type="text"
            onChangeValue={(value) => setUmkmData({ ...umkmData, name: value })}
          />
          {/* Alamat Mitra*/}
          <FormBasic
            label="Alamat Mitra"
            placeholder="Address"
            type="text"
            onChangeValue={(value) => setUmkmData({ ...umkmData, address: value })}
          />
          {/* No Telepon */}
          <FormBasic
            label="No Telepon"
            placeholder="Phone"
            type="text"
            onChangeValue={(value) => setUmkmData({ ...umkmData, phone: value })}
          />
          {/* Email */}
          <FormBasic
            label="Email"
            placeholder="Email"
            type="text"
            onChangeValue={(value) => setUmkmData({ ...umkmData, email: value })}
          />
          {/* kata Sandi */}
          <div className="my-4 flex items-center">
            <label
              htmlFor="name"
              className="block font-medium text-lg mr-10 w-64"
            >
              Kata Sandi
            </label>
            <div className="w-full">
              <InputPassword
                placeholder="Password"
                onChange={(event) =>
                  setUmkmData({ ...umkmData, password: event.target.value })
                }
              />
            </div>
          </div>
          {/* Re-Type Kata Sandi */}
          <div className="my-4 flex justify-between items-center">
            <label
              htmlFor="name"
              className="block font-medium text-lg  mr-10 w-64"
            >
              Konfirmasi Kata Sandi
            </label>
            <div className="w-full">
              <InputPassword
                placeholder="Konfirmasi Password"
                onChange={(event) =>
                  setUmkmData({
                    ...umkmData,
                    passwordConfirmation: event.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="text-right ml-auto my-4">
            <ButtonSubmit label={isLoading ? <Loading /> : buttonContent} onClick={addData} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddMitra;
