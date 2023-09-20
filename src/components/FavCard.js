import React, { useEffect, useState } from 'react'
import PlanetCard, { FavRender } from './PlanetCard';
import { Link } from 'react-router-dom';
import FavCardShow from './FavCardShow';

const FavCard = ({id}) => {

  const [data,setData]=useState({});
  
  const getdata=async ()=>{
    const d= await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const temp=await d.json();
    //console.log(temp.data);
    setData(temp.data);
  }
  useEffect(()=>{
    getdata();
  },[])

  
  return (
    <div className=''>
      <FavCardShow info={data}/>
    </div>
  )
}

export default FavCard
