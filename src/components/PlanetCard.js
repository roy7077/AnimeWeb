import React from 'react'

const PlanetCard = ({info}) => {
  return (
    <div className='p-2 m-2 shadow-lg rounded-lg'>
      <img 
      className='rounded-lg '
      src={info.images.jpg.image_url}
      />
      <ul className='text-left my-2 p-2'>
       <li className='bold text-lg'>{info.title_english}</li>
        <li className='text-gray-700'>{info.duration}</li>
        <li className='text-gray-700'>{info.episodes} episodes</li>
        <li className='text-gray-700'>{info.rating}</li>
      </ul>
    </div>
  )
}

export default PlanetCard
