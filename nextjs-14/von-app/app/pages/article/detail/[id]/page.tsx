'use client'

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function ArticleDetailPage({params}:any){
    
    const dispatch = useDispatch()
    // const getArticle = useSelector(getUserById)

    useEffect(()=>{
        // dispatch(findArticleById(params.id))
    },[])
    
    return (
        <>
        {params.id}번 상세페이지
        </>
    )
}