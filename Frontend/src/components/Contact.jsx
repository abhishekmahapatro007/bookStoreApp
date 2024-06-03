import React from 'react';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='mt-28 flex items-center justify-center text-center'>
                    <div className='w-full max-w-md p-8 rounded-lg shadow-md'>
                        <h2 className='text-2xl font-bold mb-6'>Contact Us</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                            {/* Name */}
                            <div>
                                <label className='block text-left font-medium mb-1'>Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div>
                                <label className='block text-left font-medium mb-1'>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Message */}
                            <div>
                                <label className='block text-left font-medium mb-1'>Message</label>
                                <textarea
                                    placeholder="Enter your message"
                                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    {...register("message", { required: true })}
                                />
                                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Submit Button */}
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
