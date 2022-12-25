import React from 'react'
import {AiFillCamera} from 'react-icons/ai';
import {FaFacebook,FaYoutube,FaInstagram} from 'react-icons/fa';
import {IoMdMore} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
export default function Footer() {
  return (
    <>
        <footer className='bg-black'>
            <div className='container items-start'>
                <div className='flex flex-row text-white justify-around'>
                    <div className='flex flex-col p-5 m-2 bg-black'>
                        <div>
                            <div className='flex flex-row m-2'>
                                <h3><AiFillCamera/></h3>
                                <h3 className='font-serif px-2'>AMBA STUDIO</h3>
                            </div>
                            <div>
                                <p className='px-2'>2312, Clock Tower, Subzi Mandi, Delhi-7</p>
                                <p className='flex px-2 text-xs'>+918178372426 <IoMdMore className='text-sm mx-1'/> <p className='text-xs'>dineshsharma0090090@gamil.com</p></p>
                            </div>
                            <div className='flex flex-rows'>
                                    <button className='px-2 text-2xl text-white '>
                                        <FaFacebook><a href='www.google.com'/></FaFacebook>
                                    </button>
                                    <button className='px-4 text-2xl'>
                                        <FaYoutube><a href='www.google.com'/></FaYoutube>
                                    </button>
                                    <button className='px-2 text-2xl'>
                                        <FaInstagram><a href='www.google.com'/></FaInstagram>
                                    </button>
                            </div>
                        </div>
                    </div>
            
                    <div className='flex flex-col p-5 m-2 bg-black'>
                        <h4>Quick Links</h4>
                        <div className='flex flex-row'>

                            <div className='flex flex-col py-4'>
                                <a href='/home'><p>Home</p></a>
                                <a href='/aboutus'><p>About Us</p></a>
                                <a href='/contact'><p>Contact</p></a>
                            </div>
                            
                            <div className='flex flex-col py-4 px-4'>
                                <a href='/gallery'><p>Gallery</p></a>
                                <a href='/services'><p>Services</p></a>
                                <a href='/terms'><p>T&C</p></a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col p-5 m-2 bg-black'>

                        <div>
                            <h4>Subscribe</h4>
                            <div className='flex py-4'>
                            <input type='text'/>
                            <button className='px-2'><MdEmail className='text-3xl'/></button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex text-gray-800 justify-center'>

                    <p>Copyright © 2022 | All rights reserved</p>

                </div>
            </div>
        </footer>
    </>
  )
}
