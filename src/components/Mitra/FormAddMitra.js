import React, { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import { getToken } from "../../utils/storage";
import FormBasic from "../../elements/FormBasic";
import InputPassword from "../../elements/InputPassword";
import fetch from "../../utils/fetch";

const FormAddMitra = () => {
  const [buttonContent, setButtonContent] = useState("Simpan");

  const [umkmData, setUmkmData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  console.log(umkmData);

  const addData = async e => {
    e.preventDefault();
    if (umkmData.password !== umkmData.passwordConfirmation) {
      console.log("Password and confirmation do not match");
      return;
    }

    const token = getToken();
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
      setButtonContent("Simpan");
    }
  };

  return (
    <div className="absolute inset-x-72 top-10 container align-center max-w-[100rem] pl-20">
      <div className="bg-white m-10 p-6 border shadow-2xl rounded-xl ">
        <h2 className="text-3xl font-semibold text-primary1 my-4 text-center">
          Tambah Mitra UMKM
        </h2>
        <form className="w-90">
          {/* Nama Pemilik */}
          <FormBasic
            label="Nama Pemilik"
            placeholder="Name"
            type="text"
            onChangeValue={value => setUmkmData({ ...umkmData, name: value })}
          />
          {/* Alamat Mitra*/}
          <FormBasic
            label="Alamat Mitra"
            placeholder="Address"
            type="text"
            onChangeValue={value =>
              setUmkmData({ ...umkmData, address: value })
            }
          />
          {/* No Telepon */}
          <FormBasic
            label="No Telepon"
            placeholder="Phone"
            type="text"
            onChangeValue={value => setUmkmData({ ...umkmData, phone: value })}
          />
          {/* Email */}
          <FormBasic
            label="Email"
            placeholder="Email"
            type="text"
            onChangeValue={value => setUmkmData({ ...umkmData, email: value })}
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
                onChange={event =>
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
                onChange={event =>
                  setUmkmData({
                    ...umkmData,
                    passwordConfirmation: event.target.value
                  })
                }
              />
            </div>
          </div>
          <div className="text-right py-10">
            <ButtonSubmit label="Simpan" onClick={addData} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddMitra;
