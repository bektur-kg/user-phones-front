import React from 'react'
import {useNavigate} from "react-router-dom";

const UserCard = (
    {
        id,
        name,
        email,
        dateOfBirth
    }) => {
    const navigate = useNavigate();

    return (
        <div
            className={"max-w-96 p-4 border flex flex-col items-center justify-center cursor-pointer bg-blue-100"}
            onClick={() => navigate(`/users/${id}`)}
        >
            <div className={"flex gap-1"}>
                <span className={"text-gray-500"}>Name: </span>
                <h3 className={"font-medium"}>{name}</h3>
            </div>
            <div>
                <span className={"text-gray-500"}>Email: </span>
                <span className={"font-medium"}>{email}</span>
            </div>
            <div>
                <span className={"text-gray-500"}>Date of Birth: </span>
                <span className={"font-medium"}>{dateOfBirth}</span>
            </div>
        </div>
    )
}

export default UserCard