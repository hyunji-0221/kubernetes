'use client'

import { IUser } from "@/redux/features/users/user.model";
import { fetchAllUsers } from "@/redux/features/users/user.service";
import { getAllUsers } from "@/redux/features/users/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

const UserPage: NextPage = () => {
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

    useEffect(() => {
        dispatch(fetchAllUsers(1))
    }, [])


    return (
        <>
            <h2>All Users Page</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>job</th>
                    </tr>
                </thead>
                <tbody>
                    {usersArray?.map((props: IUser) => (
                        <tr key={props.id}>
                            <td>{props.username}</td>
                            <td>{props.password}</td>
                            <td>{props.name}</td>
                            <td>{props.phone}</td>
                            <td>{props.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}

export default UserPage