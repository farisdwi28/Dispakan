import React from "react";
import Sidebar from "../../../components/Sidebar";
import FormAddMitra from "../../../components/Mitra/FormAddMitra";

const AddUMKM = () => {
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow justify-items-center">
        <div className="flex justify">
          <FormAddMitra />
        </div>
      </main>
    </div>
  );
};

export default AddUMKM;
