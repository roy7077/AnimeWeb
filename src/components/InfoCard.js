import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { additems, closeshow } from '../utils/Slice';

const InfoCard = () => {
    const {id} = useParams();
    const [anime, setAnime] = useState({})
     
    const dispatch=useDispatch();
    dispatch(closeshow());
    //destructure anime
    const {
        title, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        //console.log(data);
        setAnime(data.data)
    }

    //initial render
    useEffect(() => {
        getAnime(id)
    }, [])


    return (
        <div className='sm:flex block sm:p-5 sm:m-5 w-full p-1 m-2'>
            <div className='sm:p-2 sm:m-2 sm:w-1/2 w-full p-2 m-2 '>
                <img 
                className='rounded-lg shadow-xl '
                src={images?.webp?.large_image_url} />
                <ul className='m-2 pd-2'>
                    <li>{title}</li>
                    {/* <li>{anime.title_english}</li> */}
                    <li>{rank}</li>
                    <li>{rating}</li>
                    
                </ul>
            </div>
            <div className='sm:w-1/2 sm:p-5 sm:m-10 w-full p-5  m-5 border-t-black border mr-5'>
                <h1>{synopsis} </h1>
                <div className='m-2 p-2 shadow-lg sm:flex block text-center justify-center items-center'>
                    <h1 className='block font-bold' >Trailer</h1>
                    <div className='m-2 p-2 shadow-lg flex'>
                    <img 
                    className='h-16 w-16 rounded-lg'
                    alt="youtube"
                    src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg"
                    />
                    <Link to={trailer?.embed_url}>
                        <button
                        className='ml-2 rounded-lg bg-gray-800 text-white p-2 m-2 hover:bg-gray-700'
                        >Click To watch </button>
                    </Link>
                    <button 
                    onClick={()=>{
                        dispatch(additems(id));
                    }}
                    className='ml-2 rounded-lg bg-gray-800 text-white p-2 m-2 hover:bg-gray-700'>
                    SAVE</button>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default InfoCard;
