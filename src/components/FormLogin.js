import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../utils/storage";
import InputBasic from "../elements/InputBasic";
import InputPassword from "../elements/InputPassword";
import ButtonSubmit from "./ButtonSubmit";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const submitLogin = async () => {
    try {
      setLoginMessage("");

      const response = await axios.post("http://168.220.83.84/auth/signin", {
        username: username,
        password: password,
      });

      const userData = response.data.data.user;
      const level = userData.level;
      setUserData(userData)

      if (level === "BUMDES") {
        navigate("/Dashboard");
      } else if (level === "UMKM") {
        navigate("/DashboardUMKM");
      }
    } catch (error) {
      // Failed login
      setLoginMessage("Email or password is incorrect.");
    }
  };

  return (
    <div className="bg-white object-center rounded-3xl border-2 border-primary3-100 p-4 md:p-8">
      <h2 className="text-3xl font-semibold text-center items-center text-primary1 mb-4">
        Dispakan.
      </h2>
      <h2 className="text-2xl font-semibold mb-2">Selamat datang kembali</h2>
      <p className="font-medium text-lg text-primary3 md:text-xl mb-6">
        Masuk sebagai BUMDES atau UMKM
      </p>
      <div className="mt-4 md:mt-8">
        <div>
          <label className="text-base text-lg font-medium px-2 mb-1">
            Email atau username
          </label>
          <InputBasic
            placeholder="Masukkan Email atau Username"
            onChangeValue={(value) => {
              setUsername(value);
            }}
          />
        </div>

        <div>
          <label className="text-base text-lg font-medium px-2 mb-1">
            Password
          </label>
          <InputPassword
            placeholder = "Masukkan Password"
            onChange={(value) => {
              setPassword(value.target.value);
            }}
          />
        </div>

        {loginMessage && (
          <p className="text-red-500 text-sm mt-2">{loginMessage}</p>
        )}

        <div className="mt-4 md:mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Ingatkan saya
            </label>
          </div>
          <button className="font-medium text-base text-primary1">
            Lupa kata sandi?
          </button>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col gap-y-4">
          <ButtonSubmit label="Masuk" onClick={submitLogin} />
        </div>
      </div>
    </div>
  );
}
