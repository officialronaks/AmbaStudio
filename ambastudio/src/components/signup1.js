import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

export default function Signup1() {

    const name = useRef(null)
    const phone = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const formsubmit=async(e)=>{

    e.preventDefault();

    const log={
        email:email.current.value,
        password:password.current.value,
        phone:phone.current.value,
        name:name.current.value
    }

    const resp=axios.post('http://localhost:8080/add',log)
    resp.then(res=>{
        console.log("Congo")
    }).catch(err=>{
        console.log(err)
    })
}
  return (
    
    <div className='container bg-black text-white'>
            
            <h1 className='flex justify-center p-10'>Signup</h1>
            <Form onSubmit={formsubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" ref={name} required/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Phone Number in +919000090000" ref={phone} required/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={email} required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password} required/>
            </Form.Group>

            <div className='flex justify-center p-10'>
            <Button variant="primary" type="submit">
                SignUp
            </Button>
            </div>

            </Form>
    </div>
  );
}

