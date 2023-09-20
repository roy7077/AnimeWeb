import React from 'react'
import { useSelector } from 'react-redux'
import FavCard from './FavCard';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { closeshow } from "../utils/Slice";

const FavList = () => {
  const dispatch=useDispatch();
  dispatch(closeshow());
  
  const data = useSelector((d)=>d.counter.items);

  if(data.length===0)
  return <h1 className='h-screen flex items-center justify-center shadow-lg blod'>Nothing to show </h1>

  return (
    <div className='p-2 m-2 flex flex-wrap items-center justify-center text-center '>
        {
            data &&
            data.map((Data)=>(
                <FavCard id={Data} key={data}/>
            ))
        }
    </div>
  )
}

export default FavList
