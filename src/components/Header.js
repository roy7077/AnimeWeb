import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeshow, openshow, setname } from "../utils/Slice";
import { Link } from "react-router-dom";
import SearchSuggestion from "./SearchSuggestion";

const Header = () => {
  const [searchText, setSearchText] = useState("dbz");
  const [suggestionSearch,setSuggestionSearch]=useState("");
  const dispatch = useDispatch();

  return (
    <div className="sm:flex shadow-lg block justify-between bg-gray-800 sticky top-0">
      <div 
      onClick={()=>{
        dispatch(closeshow())
      }}
      className="">
        <Link to="/">
          <img
            alt="logo"
            className="rounded shadow-lg h-12 w-12 ml-5  invisible sm:visible "
            src="https://i.pinimg.com/736x/85/53/9b/85539b9ed619c9423eec9476d970b93c.jpg"
          />
        </Link>
      </div>


      <div className="flex ml-10 sm:m-0 ">
        <div className="block relative">
          <input
            className="p-2 m-2 rounded-lg"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              setSuggestionSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode == 13) {
                dispatch(setname(searchText));
                dispatch(closeshow())
              }
            }}

            onFocus={()=>{
              dispatch(openshow());
            }}

            // onBlur={()=>{
            //   dispatch(closeshow());
            // }}

          />
          <div className="absolute z-10 mt-1 w-56 bg-white border border-gray-300 shadow-lg rounded-lg">
            <SearchSuggestion  searchName={suggestionSearch}/>
          </div>
        </div>

        <img

          className="rounded shadow-lg h-12 w-12 cursor-pointer"
          alt="search logo"
          src="https://static.vecteezy.com/system/resources/previews/015/337/677/original/transparent-search-icon-free-png.png"
          onClick={() => {
            dispatch(setname(searchText));
            dispatch(closeshow())
          }}
        />
      </div>
      
      <div 
      onClick={()=>{
        dispatch(closeshow())
      }}
      className="p-2 m-2">
        <ul className="flex text-white">
          <li>
            <Link 
            onClick={()=>{
              dispatch(setname("nobita"))
            }}
            to="/" className="ml-5 hover:text-red-500 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="ml-5 hover:text-red-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="ml-5 hover:text-red-500 cursor-pointer"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/favlist"
              className="ml-5 hover:text-red-500 cursor-pointer"
            >
              Favourite
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
