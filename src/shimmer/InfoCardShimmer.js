import React from 'react'

const InfoCardShimmer = () => {
  return (
    <div className='flex flex-wrap text-center items-center justify-center'>
      {Array(30)
                .fill("")
                .map((e, index) => (
                <div 
                className="bg-gray-300 m-5 p-5 h-96 w-56 rounded-lg shadow-lg" 
                key={index}
                >
                  
                </div>
        ))}
    </div>
  )
}

export default InfoCardShimmer
