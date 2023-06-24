import * as React from "react";
import { images } from "../constans";

export default function FormLogin() {
  return (
    <div className="bg-white object-center rounded-3xl border-2 border-gray-100 px-8 py-8">
      <h2 className="text-3xl font-semibold text-center items-center text-primary1">
        Dispakan.
      </h2>
      <h1 className="text-3xl font-semibold">Selamat datang kembali</h1>
      <p className="font-medium text-lg text-primary3">
        Masuk sebagai BUMDES atau UMKM
      </p>
      <div className="mt-8">
        <div>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Masukan Email"
          />
        </div>

        <div>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Masukan Password"
          />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label className="ml-2 font-medium text-base" for="remember">
              Ingatkan saya
            </label>
          </div>
          <button className="font-medium text-base text-primary1">
            Lupa kata sandi?
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-primary1 text-white text-lg font-bold">
            Sign in
          </button>
          <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <img src={images.google} className="w-8 h-8" />
            <span className="align-middle">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
