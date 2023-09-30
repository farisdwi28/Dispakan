import { useState } from "react"
import { getUserData, setStoreUMKM } from "../../utils/storage"
import { Navigate } from "react-router-dom";

export default function UMKMSelectStore() {

  const [store, setStore] = useState()
  const userData = getUserData();

  const dummy = [{
    "media_ordered": null,
    "media_contact": null,
    "katagori_umkm": null,
    "id": "f3961919-aaeb-4903-b29c-3d82a15dbcfc",
    "name": "sukabirus umkm",
    "address": "",
    "phone": "",
    "mediaOrdered": null,
    "mediaContact": null,
    "omset": "",
    "filename": null,
    "image": null,
    "katagoriSaved": null,
    "aspek": "",
    "mediaId": "3660a9d4-616c-472e-9d28-a6ba4e0ce354",
    "active_on": "sukabirus",
    "status": false,
    "createdAt": "2023-09-17T01:16:19.992Z",
    "updatedAt": "2023-09-17T01:16:19.992Z",
    "url_image": "https://storage.googleapis.com/dispakan-bucket-general/umkm/sukabirus/3660a9d4-616c-472e-9d28-a6ba4e0ce354.png"
  }, {
    "media_ordered": null,
    "media_contact": null,
    "katagori_umkm": null,
    "id": "f3961919-aaeb-4903-b29c-3d82a15dbcfc",
    "name": "sukabirus umkm",
    "address": "",
    "phone": "",
    "mediaOrdered": null,
    "mediaContact": null,
    "omset": "",
    "filename": null,
    "image": null,
    "katagoriSaved": null,
    "aspek": "",
    "mediaId": "3660a9d4-616c-472e-9d28-a6ba4e0ce354",
    "active_on": "sukabirus",
    "status": false,
    "createdAt": "2023-09-17T01:16:19.992Z",
    "updatedAt": "2023-09-17T01:16:19.992Z",
    "url_image": "https://storage.googleapis.com/dispakan-bucket-general/umkm/sukabirus/3660a9d4-616c-472e-9d28-a6ba4e0ce354.png"
  },
  {
    "media_ordered": null,
    "media_contact": null,
    "katagori_umkm": null,
    "id": "f3961919-aaeb-4903-b29c-3d82a15dbcfc",
    "name": "sukabirus umkm",
    "address": "",
    "phone": "",
    "mediaOrdered": null,
    "mediaContact": null,
    "omset": "",
    "filename": null,
    "image": null,
    "katagoriSaved": null,
    "aspek": "",
    "mediaId": "3660a9d4-616c-472e-9d28-a6ba4e0ce354",
    "active_on": "sukabirus",
    "status": false,
    "createdAt": "2023-09-17T01:16:19.992Z",
    "updatedAt": "2023-09-17T01:16:19.992Z",
    "url_image": "https://storage.googleapis.com/dispakan-bucket-general/umkm/sukabirus/3660a9d4-616c-472e-9d28-a6ba4e0ce354.png"
  },
  {
    "media_ordered": null,
    "media_contact": null,
    "katagori_umkm": null,
    "id": "22880c36-a398-47f5-87a8-7eaff72ab61f",
    "name": "Pawon Lamajang 76",
    "address": "",
    "phone": "",
    "mediaOrdered": null,
    "mediaContact": null,
    "omset": "",
    "filename": null,
    "image": null,
    "katagoriSaved": null,
    "aspek": "",
    "mediaId": null,
    "active_on": "lengkong",
    "status": false,
    "createdAt": "2023-09-17T04:28:16.626Z",
    "updatedAt": "2023-09-17T04:28:16.626Z",
    "url_image": "https://storage.googleapis.com/dispakan-bucket-general/umkm/lengkong/null.png"
  },
  {
    "media_ordered": null,
    "media_contact": null,
    "katagori_umkm": null,
    "id": "22880c36-a398-47f5-87a8-7eaff72ab61f",
    "name": "Pawon Lamajang 76",
    "address": "",
    "phone": "",
    "mediaOrdered": null,
    "mediaContact": null,
    "omset": "",
    "filename": null,
    "image": null,
    "katagoriSaved": null,
    "aspek": "",
    "mediaId": null,
    "active_on": "lengkong",
    "status": false,
    "createdAt": "2023-09-17T04:28:16.626Z",
    "updatedAt": "2023-09-17T04:28:16.626Z",
    "url_image": "https://storage.googleapis.com/dispakan-bucket-general/umkm/lengkong/null.png"
  }]

  return (
    <div className="overflow-auto max-h-screen grid justify-items-center max-w-full">
      <div className="bg-white h-4/5 w-4/6 z-50 rounded-xl shadow-2xl fixed p-6 mt-28 flex flex-col overflow-auto">
        <h2 className="text-2xl font-semibold text-center items-center text-primary1 mb-4">
          Abdimas.
        </h2>
        <h1 className="text-3xl font-semibold text-center items-center mb-4">
          Selamat Datang Kembali, {userData.name}
        </h1>
        <div className="w-full overflow-scroll">
          <div className="flex flex-row justify-center overflow-x-scroll py-7 min-w-screen w-max space-x-3">
            {dummy.map((store, i) => {
              const userStore = store.id;
              const setStore = () => {
                setStoreUMKM(userStore);
                window.location = "/DashboardUMKM"
              }
              return (
                <div
                  className="border-2 border-gray-300 min-w-[300px] min-h-[350px] bg-gray rounded-lg flex flex-col hover:bg-gray-100 cursor-pointer mt-28"
                  onClick={setStore}
                >
                  <h3 className="mx-auto font-normal mt-4">
                    Usaha {i + 1}
                  </h3>
                  <div className="mx-auto my-auto">
                    <img className="rounded-full w-36 h-36 border-2 border-gray-200" src={store.url_image} ></img>
                  </div>
                  <h3 className="mx-auto mb-7 font-semibold">
                    {store.name}
                  </h3>
                </div>
              )
            }
            )
            }
          </div>
        </div>
      </div>
      <div className="bg-primary1 w-screen h-screen z-10 fixed"></div>
      <div className="bg-white rounded-full h-[2500px] w-[3000px] fixed z-20 mt-[700px] mx-auto"></div>
    </div>
  )
}