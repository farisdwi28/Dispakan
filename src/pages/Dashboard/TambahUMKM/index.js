import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import FormAddMitra from "../../../components/Mitra/FormAddMitra";
import { images } from "../../../constans";

const AddUMKM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow container mx-auto">
        <div className="flex justify">
          <FormAddMitra />
        </div>
      </main>
    </div>
  );
};

export default AddUMKM;
