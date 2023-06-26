import * as React from "react";
import { images } from "../constans";
import { Link } from "react-router-dom";

export default function FormLogin() {
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
          <input className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mb-4 bg-transparent" />
        </div>

        <div>
          <label className="text-base text-lg font-medium px-2 mb-1">
            Password
          </label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mb-4 bg-transparent" />
        </div>

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
          <Link to="/Dashboard" className="mt-6 md:mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-primary1 text-white text-lg font-bold md:text-xl">
            Masuk
          </button>
          </Link>
          <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <img src={images.google} className="w-6 h-6 md:w-8 md:h-8" />
            <span className="align-middle text-base">Masuk dengan Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
