'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";

import { Box, Button, Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/app/components/common/module/header";
import { getAllBoards, getCountsBoards } from "@/app/components/boards/service/board-slice";
import { countBoards, findAllBoards } from "@/app/components/boards/service/board-service";
import BoardColumns from "@/app/components/boards/module/columns";
import { PG } from "@/app/components/common/enums/PG";
// import React from "react";

const cards = [
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
    "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];

export default function BoardListPage({ data }: any) {
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
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
                    {cards.map((data, index) => {
                        return (
                            <section
                                className="flex-shrink-0 w-full snap-center justify-center items-center"
                                key={index}
                            >
                                <img
                                    src={data}
                                    alt="Images to scroll horizontal"
                                    className="w-full h-[500px]"
                                />
                            </section>
                        );
                    })}
                </div>
            </div>

            <h1>게시판 목록 : {boards} </h1>
            <Link href={`${PG.ART}/save`}>
                <Button variant="contained">게시판 글쓰기</Button>
            </Link>
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
