import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI } from "./article-api";

export const findAllArticles: any = createAsyncThunk(
    'articles/findAllArticles',
    async (page: number)=>{
        console.log('findAllArticles page : '+ page)
        const data:any = await  findAllArticlesAPI(1);

        const {message, result}:any = data
        return data
    }
)
