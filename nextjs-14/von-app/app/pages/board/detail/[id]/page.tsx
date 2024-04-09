'use client'

import { findBoardById } from "@/app/components/boards/service/board-service";
import { getAllBoardsById } from "@/app/components/boards/service/board-slice";
import Header from "@/app/components/common/module/header";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import React from "react";

export default function BoardDetailPage (props :any)  {

    const dispatch = useDispatch()
    const allBoardsById = useSelector(getAllBoardsById)

    useEffect(() => {
        dispatch(findBoardById(props.params.id))
    }, [])

    return (
        <>
        <Header></Header>        
        게시판 상세
        <span>ID : </span><Typography textAlign="center" sx={{ fontSize: "1.2rem" }}> {props.params.id} </Typography>
        <span>게시판이름 : </span><Typography textAlign="center" sx={{ fontSize: "1.2rem" }}> {allBoardsById.boardName} </Typography>
        <span>게시판타입 : </span><Typography textAlign="center" sx={{ fontSize: "1.2rem" }}> {allBoardsById.boardType} </Typography>
        <span>등록일 : </span><Typography textAlign="center" sx={{ fontSize: "1.2rem" }}> {allBoardsById.postdate} </Typography>
        <span>수정일 : </span><Typography textAlign="center" sx={{ fontSize: "1.2rem" }}> {allBoardsById.modDate} </Typography> 
        
        </>
    )
}
