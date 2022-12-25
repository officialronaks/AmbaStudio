import React from 'react'
import i from '../components/contact.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ImLocation2} from 'react-icons/im';
import {MdEmail,MdCall} from 'react-icons/md';

export default function Contactus() {
  return (
    <div style={{ backgroundImage: `url(${i})`}}>
        <div className='container flex flex-col justify-items-center'>
            <h1 className='container text-center text-black shadow-transparent my-32 backdrop-blur-sm'>CONTACT US</h1>
            <div className='flex flex-row self-center'>
                <div className='container flex justify-center '>
                <div className='flex flex-col backdrop-blur-sm px-8 py-2 space-y-7 text-white'>
                    <h1 className='text-left'>Contact Information</h1>
                    <div>
                    <p>Fill Up The Form And Then Click Send</p>
                    <p className='flex'><MdCall className='text-2xl mx-3'/>+918178372426</p>
                    <p className='flex'><MdEmail className='text-2xl mx-3'/>dineshsharma@gmail.com</p>
                    <p className='flex'><ImLocation2 className='text-2xl mx-3'/>2312, Subzi Mandi, Clock Tower, Delhi-7</p>
                    </div>
                </div> 
                <div className='container backdrop-blur-sm'>
                <Form>
                  <div className='flex flex-row justify-around'>
                    <Form.Group className="mb-3" controlId="formFName">
                      <Form.Label className='text-white'>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLName">
                      <Form.Label className='text-white'>Second Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Second Name" />
                    </Form.Group>
                  </div>
                  <div className='flex flex-row justify-around'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='text-white'>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPh">
                      <Form.Label className='text-white'>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Phone Number" />
                    </Form.Group>
                  </div>
                  <div className='flex text-center justify-around'>

                    <Form.Group className="mb-3" controlId="formMsg">
                      <Form.Label className='text-white'>Message </Form.Label>
                      <Form.Control type="text" placeholder="Enter Message You Want To Share" />
                    </Form.Group>
                  </div>
                  <div className='flex justify-center'>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  </div>
                </Form>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
