import React from 'react'
import { useSelector } from 'react-redux'
import FavCard from './FavCard';

const FavList = () => {

  const data = useSelector((d)=>d.counter.items);
  return (
    <div className='p-2 m-2 flex flex-wrap items-center justify-center text-center '>
        {
            data &&
            data.map((Data)=>(
                <FavCard id={Data}/>
            ))
        }
    </div>
  )
}

export default FavList
