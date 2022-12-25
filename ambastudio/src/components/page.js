import React from 'react'
import { useState } from 'react'
import Login from './login'
import Signup from './signup'
import Button from 'react-bootstrap/Button';

export default function Page() {

  const [islogin,setLogin]=useState(true)
  
  const click=(txt)=>{

    if(txt=='login'){
      setLogin(true)
    }

    else{
      setLogin(false)
    }

  }
  return (
    <div className= 'container p-20'>
    <div className= 'd-grid gap-2'>
      <Button variant="primary" size="lg" onClick={()=>click('login')}>
        Login
      </Button>
      <Button variant="primary" size="lg" onClick={()=>click('signup')}>
        SignUp
      </Button>
      {islogin?<Login/>:<Signup/>}
    </div>
    </div>
  )
}
