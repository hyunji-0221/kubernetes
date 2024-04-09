'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllArticles } from "@/app/components/articles/service/article-service";
import { getAllArticles } from "@/app/components/articles/service/article-slice";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/app/components/common/module/header";
import ArticleColumns from "@/app/components/articles/module/columns";
// import React from "react";

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
        dispatch(findAllArticles(1))
    }, [])

    return (<>
        <Header></Header>
        <h2>개인페이지 Article</h2>
        <Box sx={{ height: 400, width: '100%' }}>
            {allArticles && <DataGrid
                rows={allArticles}
                columns={ArticleColumns()}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
            />}
        </Box>
    </>)
}

export default ArtilcesPage