import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar";

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  return (
    <>
      <div className="flex">
        <div className="w-1/4 border border-stone-200 ml-2 mr-1 p-2">
          <SideBar />
        </div>
        <div className="w-3/4 border border-stone-200 ml-1 mr-2 p-2">
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Gallery;
