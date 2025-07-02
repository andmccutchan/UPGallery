import React from "react";
import SearchBar from "../Components/SearchBar";

const Gallery = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 border border-stone-200 ml-2 mr-1 p-2">
          <SearchBar />
        </div>
        <div className="w-3/4 border border-stone-200 ml-1 mr-2 p-2"></div>
      </div>
    </>
  );
};

export default Gallery;
