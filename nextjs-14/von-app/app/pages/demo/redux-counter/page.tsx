'use client'

import { getCount, handleMinus, handlePlus } from "@/redux/features/counter/counter.slice";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CounterPage : NextPage =() => {

    const count = useSelector(getCount)
    const dispath = useDispatch()

    return (
        <div className ="text-center mt-500" style={{marginTop:'100px'}}>
            <h1>Redux Counter : {count}</h1>

            <AddCircleOutlineIcon onClick={()=>dispath(handlePlus())} >
            </AddCircleOutlineIcon>
            <RemoveCircleOutlineIcon onClick={()=>dispath(handleMinus())}>
            </RemoveCircleOutlineIcon>
        </div>
    );
}

export default CounterPage