'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/app/components/common/module/header";
import { getAllBoards, getCountsBoards } from "@/app/components/boards/service/board-slice";
import { countBoards, findAllBoards } from "@/app/components/boards/service/board-service";
import BoardColumns from "@/app/components/boards/module/columns";
// import React from "react";

const ArtilcesPage: NextPage = ({ data }: any) => {
    const dispatch = useDispatch()
    const allBoards: [] = useSelector(getAllBoards)

    const count = useDispatch()
    const boards: number = useSelector(getCountsBoards)

    useEffect(() => {
        count(countBoards())
        dispatch(findAllBoards(1))
    }, [])

    return (
        <>
            <Header></Header>
            <h1>게시판 목록 : {boards} </h1>
            <Box sx={{ height: 400, width: '100%' }}>
                {allBoards && <DataGrid
                    rows={allBoards}
                    columns={BoardColumns()}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                />}
            </Box>
        </>
    )
}

export default ArtilcesPage