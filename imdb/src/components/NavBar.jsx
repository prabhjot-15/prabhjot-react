import React from 'react'


function NavBar() {
return (
    <div className='border
    flex items-center
    space-x-8
    pl-12 py-4 bg-gray-900
    '>
        
        <img className='w-[60px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' alt='imdb'/>
        <h3 className='font-bold text-2xl text-blue-500'>Movies</h3>
        <h3 className='font-bold text-2xl text-blue-500'>Favorites</h3>
        <div className='ml-auto'>
        <h3 className='font-bold text-2xl text-blue-500 '>About</h3>
        </div>
    </div>
)
}

export default NavBar