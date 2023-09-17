import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SEARCH_API from '../utils/const';
import PlanetCard from './PlanetCard';
import { Link } from 'react-router-dom';

const Body = () => {

  const [data,setData]=useState(null);
  const planet=useSelector((S)=>S.counter.name);

  const getdata=async ()=>{
    const d=await fetch(SEARCH_API+planet+"&sfw");
    const json=await d.json();
    setData(json.data);
    console.log(json.data);
  }

  useEffect(()=>{
    getdata();
  },[planet]);

  return (
    <div className='p-2 m-2 flex flex-wrap items-center justify-center text-center '>
        {
            data &&
            data.map((Data)=>(
                <Link to={"searched/"+Data.mal_id} key={Data.mal_id}>
                     <PlanetCard info={Data} />
                </Link>
               
            ))
        }
    </div>
  )
}

export default Body
