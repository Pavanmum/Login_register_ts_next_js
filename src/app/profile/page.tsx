'use client'
import { Button } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'
import React from 'react'
import { toast } from 'react-hot-toast'

export default function Profile () {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success('logout Successful')
      router.push("/login")
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }
  
  return (
    <>
    <Button onClick={logout}>Logout</Button>
    </>
  )
}

