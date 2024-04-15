'use client'

import { useEffect, useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { Button, Input } from "@mui/material";
import { API } from "./components/common/enums/API";
import AxiosConfig from "./components/common/configs/axios-configs";
import { PG } from "./components/common/enums/PG";
import Header from "./components/common/module/header";
import { Height } from "@mui/icons-material";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./components/users/service/user-service";
import { IUser } from "./components/users/model/user-model";
import { getLoginResult } from "./components/users/service/user-slice";


export default function Home() {

  const [name, setName] = useState('')

  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert('리퀘스트가 가져가는 이름 : ' + name)
    const data = { 'name': name }

    axios.post(`${API.SERVER}/name`, data, AxiosConfig())
      .then(res => {
        alert("리스판스가 가져온 이름 : " + JSON.stringify(res.data))
      })
  }

  const router = useRouter();

  const dispatch = useDispatch()
  const result = useSelector(getLoginResult)


  const [user, setUser] = useState({} as IUser)
  const handleId = (e: any) => {
    setUser({
      ...user,
      username: e.target.value
    })
  }
  const handlePW = (e: any) => {
    setUser({
      ...user,
      password: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('page user ' + JSON.stringify(user))
    dispatch(login(user))
  }

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const useruser:IUser = {username, password}
  // const handleId = (e: any) => {
  //     setUsername(e.target.value)
  // }
  // const handlePW = (e: any) => {
  //     setPassword(e.target.value)
  // }
  // const handleSubmit=()=>{
  //   console.log('page user '+ JSON.stringify(user))
  //   dispatch(login(user))
  // }

  useEffect(() => {
    if (result === "SUCCESS") {
      console.log('if 안' + result)
      router.push('/pages/board/list')
    }
  }, [result]) // []가 비어있으면 useEffect가 한 번만 실행됨.

  return (
    <div className='text-center'>
      <div className="flex items-center justify-center w-full px-5 sm:px-0">
        <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required onChange={handleId}
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password" onChange={handlePW}
              />
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button onClick={handleSubmit} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
                Login
              </button>
            </div>
            <a
              href="#"
              className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="flex px-5 justify-center w-full py-3">
                <div className="min-w-[30px]">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <div className="flex w-full justify-center">
                  <h1 className="whitespace-nowrap text-gray-600 font-bold">
                    Sign in with Google
                  </h1>
                </div>
              </div>
            </a>
            <div className="mt-4 flex items-center w-full text-center">
              <Link
                href="/pages/user/join"
                className="text-xs text-gray-500 capitalize text-center w-full"
              >
                Don&apos;t have any account yet?
                <span className="text-blue-700"> Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div><br /><br />
      <h3 className='text-red-500'>당신의 이름은</h3>
      <Input type='text' onChange={handleChange} />
      <Button onClick={handleClick}>전송</Button><br /><br />
      <Link href={`${PG.USER}/login`} >로그인</Link><br /><br />
      <Link href={`${PG.USER}/register`} >회원가입</Link><br /><br />
      <Link href={`${PG.USER}/userList`} >all-users</Link><br /><br />
      <Link href={`${PG.DEMO}/companies/list`} >회사</Link><br /><br />
      <Link href={`${PG.DEMO}/mui-demo`} >MUI 데모</Link><br /><br />
      <Link href={`${PG.DEMO}/counter`} >카운터 데모</Link><br /><br />
      <Link href={`${PG.DEMO}/redux-counter`} >리덕스 카운터</Link><br /><br />
      <Link href={`${PG.BOARD}/article`} >all-articles</Link><br /><br />
    </div>
  );
}
