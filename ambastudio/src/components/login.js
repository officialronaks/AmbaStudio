import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react'
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login() {

    const email = useRef(null)
    const password = useRef(null)

    const formsubmit=async(e)=>{

    e.preventDefault();

    const log={
        email:email.current.value,
        password:password.current.value
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
            <h1 className='flex justify-center p-10'>Login</h1>
            <Form onSubmit={formsubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={email}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password}/>
            </Form.Group>
            <div className='flex justify-center p-10'>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </div>

            </Form>
    </div>
  );
}

