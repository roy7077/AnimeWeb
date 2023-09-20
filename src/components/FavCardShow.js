import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import { useDispatch } from "react-redux";
import { clearitems, removeitems } from "../utils/Slice";
import { Link } from "react-router-dom";

const FavCardShow = ({ info }) => {
    //console.log(info)
  const dispatch = useDispatch();
  return (
    <div className=" p-2 m-2 shadow-lg rounded-lg  w-56 ">
      <Link to={"/searched/"+info?.mal_id}>
        <div>
          <img className="rounded-lg " src={info?.images?.jpg?.image_url} />
          <ul className="text-left my-2 p-2">
            <li className="bold text-lg">{info?.title_english}</li>
            <li className="text-gray-700">{info?.duration}</li>
            <li className="text-gray-700">{info?.episodes} episodes</li>
            <li className="text-gray-700">{info?.score} Rating</li>
          </ul>
        </div>
      </Link>
      <div className=" ">
        <div
          onClick={() => {
            // console.log(info?.mal_id);
            dispatch(removeitems(info?.mal_id));
          }}
          className=" p-2 m-2 flex shadow-sm cursor-pointer "
        >
          <img
            className="p-2 rounded-xl mr-3 h-10 w-10"
            alt="delete"
            src="data:image/png;base64,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"
          />
          <h1 className="p-2">Remove</h1>
        </div>
      </div>
    </div>
  );
};

export default FavCardShow;
