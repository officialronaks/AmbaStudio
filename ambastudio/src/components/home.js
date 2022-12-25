import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import i1 from '../components/img1.jpg';
import i2 from '../components/img-2.jpg';
import i3 from '../components/img3.jpg';
import ii1 from '../components/img-1.jpg';
import ii2 from '../components/img--2.jpg';
import ii3 from '../components/img-3.png';

export default function Home() {
  return (

    <div className='bg-white'>
    <div className='mx-20 my-20'>
        <Carousel>
        <Carousel.Item interval={2000} className='h-96'>
            <img
            className="flex flex-col h-full w-full"
            src={i1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h1 className='text-white text-6xl mx-11 my-3'>Wedding Photography</h1>
            <button className='bg-green-600 text-white font-serif shadow-lg shadow-black p-3 text-xl my-2'>BOOK NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className='h-96'>
            <img
            className="flex flex-col h-full w-full"
            src={i2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h1 className='bg-black text-white shadow-2xl mx-11 rounded-xl'>Get Your Own Photo-Collage</h1>
            <button className='bg-green-600 text-white font-serif shadow-lg shadow-black p-3 text-xl my-2'>GET NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className='h-96'>
            <img
            className="flex flex-col h-full w-full"
            src={i3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h1 className='text-white font-serif mx-11 rounded-xl'>Wedding Videography</h1>
            <button className='bg-green-600 text-white font-serif shadow-lg shadow-black p-3 text-xl my-2'>BOOK NOW</button>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    <div>
        <div className='container'>
            <div className='flex flex-row'>
                <div className='flex flex-col m-10 bg-slate-100 items-center box-border justify-items-center shadow-2xl shadow-black'>
                    <img src={ii1} className='h-60 p-2'/>
                    <p className='text-center text-4xl font-serif m-3'>SHOOTING</p>
                    <p className='text-center text-xl font-serif block box-border px-5'>Exprienced In Photography For More Than 60 Years.</p> 
                    <p className='text-center text-xl font-serif block box-border'>Check Some Amazing Photos</p>
                    <a href="https://drive.google.com/drive/folders/1GP5Nj9kWuu34pt9_myMjQwdkXMXdqF86?usp=sharing"><button type="submit" className='flex justify-items-center bg-black text-xl text-white m-3 px-2 rounded'>Check</button></a>
                </div>
                <div className='flex flex-col m-10 bg-slate-100 items-center box-border justify-items-center shadow-2xl shadow-black'>
                <img src={ii2} className='h-60 p-2'/>
                    <p className='text-center text-4xl font-serif m-3'>VIDEOS</p>
                    <p className='text-center text-xl font-serif block box-border px-5'>Exprienced In Photography For More Than 60 Years.</p> 
                    <p className='text-center text-xl font-serif block box-border'>Check Some Amazing Videos</p>
                    <button type="submit" className='flex justify-items-center bg-black text-xl text-white m-3 px-2 rounded'>Check</button>
                </div>
                <div className='flex flex-col m-10 bg-slate-100 items-center box-border justify-items-center shadow-2xl shadow-black'>
                <img src={ii3} className='h-60 w-full p-2'/>
                    <p className='text-center text-4xl font-serif m-3'>EDITING</p>
                    <p className='text-center text-xl font-serif block box-border px-5'>Exprienced In Photography For More Than 60 Years.</p> 
                    <p className='text-center text-xl font-serif block box-border'>Check Some Amazing Editings</p>
                    <button type="submit" className='flex justify-items-center bg-black text-xl text-white m-3 px-2 rounded'>Check</button>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}
