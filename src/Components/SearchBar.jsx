import React from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";

const SearchBar = () => {
  return (
    <div className="flex-col w-full">
      <div className="flex">
        <input
          className="border border-stone-200 mb-2 p-2 text-stone-200 w-full"
          type="text"
          placeholder="Find rices"
        />
        <button className="border text-stone-200 p-2 mb-2 ml-2">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
