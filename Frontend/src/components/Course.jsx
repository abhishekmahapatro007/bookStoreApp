import React from 'react'
import list from "../../public/list.json"
import Cards from "../components/Cards";
import { Link } from 'react-router-dom';

function Course() {
  return (
  <>
    <div className='max-w-screen-2x1 container mx-auto md: px-20'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
            <p className='mt-12 text-xl'>Welcome to our vibrant learning hub, where knowledge knows no bounds! Delve into our extensive collection of courses spanning diverse topics and disciplines. Whether you're a novice or an expert, there's something here to pique your curiosity and expand your horizons. Join us as we embark on a journey of discovery, together shaping a brighter future through the power of learning.</p>
            <Link to = '/'>
                <button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item) => (
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
  </>
  )
}

export default Course
