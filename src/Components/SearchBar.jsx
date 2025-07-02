import React from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";

const SearchBar = () => {
  return (
    <div className="flex-col">
      <form>
        <input
          className="border border-stone-200 p-2 text-stone-200 rounded"
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
