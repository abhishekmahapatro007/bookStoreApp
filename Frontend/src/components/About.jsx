import React from 'react';
import Navbar from './Navbar';

function About() {
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto px-4 md:px-20 py-16 mt-5'>
                <h1 className='text-4xl font-bold text-center mb-8 text-green-400'>About Us</h1>
                
                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4 text text-pink-500'>Our Company</h2>
                    <p className='text-lg leading-relaxed'>
                        Welcome to bookStore, where we are dedicated to providing the best service and products to our customers. Founded in [Year], we have consistently focused on quality, innovation, and customer satisfaction. Our goal is to make a positive impact through our offerings and to build lasting relationships with our clients.
                    </p>
                </section>
                
                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4 text-pink-500'>Our Mission</h2>
                    <p className='text-lg leading-relaxed'>
                        Our mission at bookStore is to deliver exceptional value and exceed our customers' expectations. We strive to lead our industry through innovation, sustainable practices, and a commitment to excellence. We believe in the power of collaboration and integrity to achieve great results.
                    </p>
                </section>
                
                <section className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4 text-pink-500'>Our Team</h2>
                    <p className='text-lg leading-relaxed'>
                        Our team is composed of passionate professionals who are experts in their fields. From our customer service representatives to our product developers, each member plays a crucial role in our success. We are committed to fostering a collaborative and inclusive work environment where every voice is heard and valued.
                    </p>
                </section>
                
                <section>
                    <h2 className='text-2xl font-semibold mb-4 text-pink-500'>Contact Us</h2>
                    <p className='text-lg leading-relaxed'>
                        If you have any questions, feedback, or just want to say hello, feel free to reach out to us. We are always here to help and look forward to hearing from you.
                    </p>
                </section>
            </div>
        </>
    );
}

export default About;
