"use client"
import React from 'react'
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import {  useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Link from 'next/link';




export default function SignupPage () {

  const router = useRouter()
    
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    const onSubmit = async () => {
     try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Login Success");
      router.push("/");
     } catch (error:any) {
      console.log("signup failed", error.message);
      toast.error(error.message)
     }   
    }

  return (
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
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input value={user.username} onChange= {
        (e) => setUser({...user,username:e.target.value})
      }/>
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
      <Link href="/login">Visit login page</Link>
    </Form.Item>
  </Form>
    </>
  )
}
