import React from 'react'
import banner from '../../public/Banner.gif';

function Banner() {
  return (
    <>
        <div className='max-w-screen-2x1 container mx-auto md: px-20 px-4 flex flex-col md:flex-row my-10'>
            <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold'>
                    Where stories come alive and  <span className='text-pink-500'>adventures begin.</span>
                    </h1>
                    <p className='text-xl'>
                    Welcome to our bookstore, a heaven for book lovers of all ages and interests. Here, you'll find a curated collection of literature that spans genres and generations, from timeless classics to contemporary bestsellers. Whether you're seeking inspiration, knowledge, or simply a new world to get lost in, our shelves are filled with treasures waiting to be discovered. Step inside and embark on a literary journey that promises to ignite your imagination and enrich your mind.
                    </p>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                </div>
                <button className="btn mt-6 btn-secondary">Get Started</button>
            </div>
            <div className='order-1 w-full md:w-1/2 flex justify-center md:justify-end items-center'>
                <img src={banner} alt="" className='w-full md:w-2/3 h-auto object-cover rounded-lg shadow-lg mt-14 mr-4 md:mt-0 md:ml-auto md:mr-14' />
            </div>
        </div>
    </>
  )
}

export default Banner
