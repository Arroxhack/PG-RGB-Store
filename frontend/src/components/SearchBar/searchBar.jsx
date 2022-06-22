import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../redux/actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchProducts(search));
    setSearch("");
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);

    console.log(search);
  }
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <form onSubmit={onSubmit}>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={onInputChange}
        ></input>
        <input type="submit" class="absolute right-0 top-0 mt-5 mr-4" value='🔍'>
        </input>
      </form>
    </div>
  );
}
