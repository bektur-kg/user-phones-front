import React from 'react'
import { MdDelete } from "react-icons/md"
import {requests} from "../../requests/requests.js";

const PhoneNumber = (
    {
        id,
        phoneNumber,
        index,
        fetchUserDetails
    }) => {
    const deleteUserPhone = () => {
        requests.deleteUserPhone(id)
            .then(fetchUserDetails)
    }

    return (
        <li className={"w-96 my-2 mx-auto border p-5 flex justify-between align-items-center"}>
            <div>
                <span>{index + 1}) </span>
                <span>{phoneNumber}</span>
            </div>
            <div
                className={"flex justify-content-center align-items-center cursor-pointer"}
                onClick={deleteUserPhone}
            >
                <MdDelete className={"h-5 w-5"}/>
            </div>
        </li>
    )
}

export default PhoneNumber