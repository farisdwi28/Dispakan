import React from "react";
import SearchInput from "../../components/Search";
import BreadcrumbsComponent from "../../components/Breadcumbs";
import ImageComponent from "../../components/ImageComponent";

const links = [
  { href: "/", label: "Home" },
  { href: "/DetailProduct", label: "Detail Product" },
];

function DetailProduct() {
  return (
    <div className="container mx-auto ">
      {/* // Nav Detail Product */}
      <div className="py-5 flex gap-24">
        <h1 className="text-lg font-semibold text-primary1">Dispakan.</h1>
        <SearchInput />
      </div>
      <div className="py-2">
        <BreadcrumbsComponent links={links} />
      </div>
      {/* Body */}
      <div className="py-5">
      <ImageComponent 
      className=""
      />
      <div className="flex">
        <div className="flex-1 w-64">
            <h1>main</h1>
        </div>
        <div className="flex-1 w-32">
            <h1>Isi</h1>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DetailProduct;
