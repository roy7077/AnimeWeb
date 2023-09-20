import React, { useEffect, useState } from "react";
import { SUGGESTION_API } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { setname } from "../utils/Slice";

const SearchSuggestion = ({ searchName }) => {
  const [searchData, setSearchData] = useState([]);

  const getSearchData = async () => {
    const data = await fetch(SUGGESTION_API + searchName);
    const json = await data.json();
    //console.log(json[1]);
    setSearchData(json[1]);
  };
  useEffect(() => {
    getSearchData();
  }, [searchName]);

  const show = useSelector((d) => d.counter.searchshow);
  const dispatch=useDispatch();
  return (
    <>
      {
       searchData.length!=0 && show && searchData && (
        <div className="absoute bg-white py-2 px-2 w-70 overflow-y-scroll max-h-64 shadow-lg border border-gray-200">
          {searchData.map((d) => (
            <div 
            className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
            onClick={()=>{
                // console.log("click , ",d);
                dispatch(setname(d));
            }}
            key={d}
            >{d}</div>
          ))}
        </div>
      )
      }
    </>
  );
};

export default SearchSuggestion;
