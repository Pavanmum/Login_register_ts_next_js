
"use client"
import React from 'react'
import { Button, Form, Input } from 'antd';
import {  useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function Login () {

  const router = useRouter()
    
    const [user, setUser] = React.useState({
        email:"",
        password:"",
    })

    const onSubmit = async () => {
      try {
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        router.push("/profile");
      } catch (error:any) {
        console.log("signup failed", error.message);
        toast.error(error.message)
      }
     
    }
  return(
    <>
     <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
    onClick={onSubmit}
  >
    <Form.Item
      label="Email" 
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input value={user.email} onChange= {
        (e) => setUser({...user,email:e.target.value})
      }
      />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password value={user.password} onChange= {
        (e) => setUser({...user,password:e.target.value})
      }/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Link href="/signup">Visit login page</Link>
    </Form.Item>
  </Form>
    </>
  )
}
