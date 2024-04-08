'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { fetchAllArticles } from "@/app/components/articles/service/article.service";
import { getAllArticles } from "@/app/components/articles/service/article.slice";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Columns from "@/app/components/articles/module/columns";
import Header from "@/app/components/common/module/header";
// import React from "react";

interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    postdate: string
}

const ArtilcesPage: NextPage = ({data}:any) => {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if (allArticles !== undefined) {
        console.log('allArticles is not undefined')

        console.log('length is ' + allArticles.length)
        for (let i = 0; i < allArticles.length; i++) {
            console.log(JSON.stringify(allArticles[i]))
        }
    } else {
        console.log('allArticles is undefined')
    }


    useEffect(() => {
        dispatch(fetchAllArticles(1))
    }, [])

    return (<>
        <h2>개인페이지 Article</h2>
        <Header></Header>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={Columns()}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    </>)
}

export default ArtilcesPage