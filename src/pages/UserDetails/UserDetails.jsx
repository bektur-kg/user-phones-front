import React from 'react'
import {useParams} from "react-router-dom"

const UserDetails = () => {
    const {id} = useParams()

    return (
        <div>
            user details
        </div>
    )
}

export default UserDetails