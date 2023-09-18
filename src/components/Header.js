import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setname } from '../utils/Slice';
import { Link } from 'react-router-dom';

const Header = () => {

    const [searchText,setSearchText]=useState("dbz");
    const dispatch=useDispatch();

  return (
    <div className=' shadow-lg flex justify-between bg-gray-800 sticky top-0'>
      <div className=''>
        <img 
        alt="logo"
        className='rounded shadow-lg h-12 w-12 ml-5'
        src="https://i.pinimg.com/736x/85/53/9b/85539b9ed619c9423eec9476d970b93c.jpg"
        />
      </div>
      <div className='flex'>
        <input 
        className='p-2 m-2 rounded-lg'
        type='text'
        placeholder='Search'
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}

        onKeyDown={(e)=>{
            if(e.keyCode==13)
            {
               dispatch(setname(searchText));
            }
        }}
        />
        <img 
        className='rounded shadow-lg h-12 w-12 cursor-pointer'
        alt="search logo"
        src="https://static.vecteezy.com/system/resources/previews/015/337/677/original/transparent-search-icon-free-png.png"
        onClick={()=>{
            dispatch(setname(searchText));
        }}
        />
      </div>
      <div className='p-2 m-2'>
        <ul className='flex text-white'>
        <li><Link to="/" className='ml-5 hover:text-red-500 cursor-pointer'>Home</Link></li>
        <li><Link to="/about" className='ml-5 hover:text-red-500 cursor-pointer'>About</Link></li>
        <li><Link to="/contact" className='ml-5 hover:text-red-500 cursor-pointer' >Contact</Link></li>
        <li><Link to="/favlist" className='ml-5 hover:text-red-500 cursor-pointer'>Favourite</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
