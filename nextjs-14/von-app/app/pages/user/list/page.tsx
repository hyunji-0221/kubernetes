'use client'

import Header from "@/app/components/common/module/header";
import UsersColumns from "@/app/components/users/module/columns";
import { IUser } from "@/app/components/users/model/user.model";
import { fetchAllUsers } from "@/app/components/users/service/user.service";
import { getAllUsers } from "@/app/components/users/service/user.slice";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const UserPage: NextPage = () => {
    const [pageSize, setPageSize] = useState(5); // 4-1


    useEffect(() => {
        dispatch(fetchAllUsers(1))
    }, [])

    const dispatch = useDispatch()
    const usersArray: [] = useSelector(getAllUsers)

    if (usersArray !== undefined) {
        console.log('usersArray is not undefined')
        console.log('length is : ' + usersArray.length)

        for (let i = 0; i < usersArray.length; i++) {
            console.log(usersArray[i])
        }

    } else {
        console.log('usersArray is undefined')
    }


    return (
        <>
            <Header></Header>
            <h2>All Users Page</h2>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid // 🔥 4
                    rows={usersArray}
                    columns={UsersColumns()}
                    pageSizeOptions={[5, 10, 20]} // 5개보기, 10개보기, 20개보기
                    checkboxSelection
                />
            </div>
        </>
    )

}

export default UserPage