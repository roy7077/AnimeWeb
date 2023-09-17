import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

const InfoCard = () => {
    const {id} = useParams();
    // console.log(id);
    // //state
    const [anime, setAnime] = useState({})
    const [characters, setCharacters] = useState([])
    

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
        console.log(data);
        setAnime(data.data)
    }

    //get characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
    }


    //initial render
    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])

    return (
        <div className='flex p-5 m-5'>
            <div className='p-2 m-2 w-1/2 '>
                <img 
                className='rounded-lg shadow-xl'
                src={images?.webp?.large_image_url} />
                <ul className='m-2 pd-2'>
                    <li>{title}</li>
                    {/* <li>{anime.title_english}</li> */}
                    <li>{rank}</li>
                    <li>{rating}</li>
                    
                </ul>
            </div>
            <div className='w-1/2 p-5 m-10'>
                <h1>{synopsis} </h1>
            </div>
        </div>
      );
}

export default InfoCard;
