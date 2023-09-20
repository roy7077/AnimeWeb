import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SEARCH_API from '../utils/const';
import PlanetCard from './PlanetCard';
import { Link } from 'react-router-dom';
import InfoCardShimmer from '../shimmer/InfoCardShimmer';
import { closeshow } from '../utils/Slice';

const Body = () => {

  const [data,setData]=useState(null);
  const planet=useSelector((S)=>S.counter.name);
  const dispatch=useDispatch();

  const getdata=async ()=>{
    const d=await fetch(SEARCH_API+planet+"&sfw");
    const json=await d.json();
    setData(json.data);
    //console.log(json.data);
  }

  useEffect(()=>{
    getdata();
  },[planet]);

  if(!data)
  return <InfoCardShimmer/>;

  dispatch(closeshow())
  
  return (
    
    <div 
    onClick={()=>{
      dispatch(closeshow())
    }}
    className='p-2 m-2 flex flex-wrap items-center justify-center text-center '>
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
