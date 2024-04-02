'use client'

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { Button, Input } from "@mui/material";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-configs";
import { PG } from "../redux/common/enums/PG";
import Header from "./components/layout/header";


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

  return (
  <div className='text-center'>
    <Header/>
    <h3 className='text-red-500'>당신의 이름은</h3>
    <Input type='text' onChange={handleChange} />
    <Button onClick={handleClick}>전송</Button><br /><br />
    <Link href={`${PG.USER}/login`} >로그인</Link><br /><br />
    <Link href={`${PG.USER}/join`} >회원가입</Link><br /><br />
    <Link href={`${PG.USER}/userList`} >all-users</Link><br /><br />
    <Link href={`${PG.DEMO}/companies`} >회사</Link><br /><br />
    <Link href={`${PG.DEMO}/mui-demo`} >MUI 데모</Link><br /><br />
    <Link href={`${PG.DEMO}/counter`} >카운터 데모</Link><br /><br />
    <Link href={`${PG.DEMO}/redux-counter`} >리덕스 카운터</Link><br /><br />
    <Link href={`${PG.BOARD}/articles`} >all-articles</Link><br /><br />
  </div>
  );
}
