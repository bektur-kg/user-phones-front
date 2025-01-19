import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {requests} from "../../requests/requests.js"
import {PhoneNumber} from "../../components/index.js"
import { IoMdAddCircle } from "react-icons/io"
import {useForm} from "react-hook-form";

const UserDetails = () => {
    const {id} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const [isAddingPhoneNumber, setIsAddingPhoneNumber] = useState(false)
    const {
        register: registerPhone,
        handleSubmit: handleSubmitPhone,
        formState: { errors: phoneFormErrors},
        reset: resetPhoneForm,
    } = useForm({mode: 'onChange'})

    useEffect(() => {
        fetchUserDetails()
    }, [])

    const fetchUserDetails = () => {
        requests.getUserDetails(id)
            .then(res => setUserDetails(res.data))
    }

    const addPhoneNumber = (formData) => {
        const requestBody = {
            phoneNumber: formData.phoneNumber,
            userId: id
        }

        requests.addPhoneNumber(requestBody)
            .then(fetchUserDetails)
            .finally(resetPhoneForm)
    }

    if (!userDetails) return <div>Loading...</div>
    return (
        <div>
            <div className={"p-4 border flex flex-col items-center justify-center bg-blue-100"}>
                <div className={"flex gap-1"}>
                    <span className={"text-gray-500"}>Name: </span>
                    <h3 className={"font-medium"}>{userDetails.name}</h3>
                </div>
                <div>
                    <span className={"text-gray-500"}>Email: </span>
                    <span className={"font-medium"}>{userDetails.email}</span>
                </div>
                <div>
                    <span className={"text-gray-500"}>Date of Birth: </span>
                    <span className={"font-medium"}>{userDetails.dateOfBirth}</span>
                </div>
            </div>
            <ul>
                <li className={"w-96 my-2 mx-auto border p-5 flex justify-between align-items-center cursor-pointer"}>
                    <div
                        className={"w-full flex justify-center align-items-center"}
                        onClick={() => setIsAddingPhoneNumber(prev => !prev)}
                    >
                        <IoMdAddCircle className={"h-5 w-5 text-green-300"}/>
                    </div>
                </li>
                {
                    isAddingPhoneNumber && (
                        <form
                            className={"w-96 my-2 mx-auto border p-5 flex justify-between"}
                            onSubmit={handleSubmitPhone(addPhoneNumber)}
                        >
                            <div className={"flex flex-col"}>
                                <span className={"text-xs text-red-400 mb-0.5"}>{phoneFormErrors.phoneNumber?.message}</span>
                                <input
                                    type="text"
                                    placeholder={"+1234567890"}
                                    {...registerPhone("phoneNumber", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^\+[1-9]\d{1,14}$/,
                                            message: "Invalid phone number format. Example: +1234567890",
                                        },
                                    })}
                                    className={"border w-full h-full py-2 px-4 outline-0"}
                                />
                            </div>
                            <button
                                type={"submit"}
                                className={"bg-green-300 px-2 border border-green-400 rounded"}
                            >
                                Save
                            </button>
                        </form>
                    )
                }
                {userDetails.phones.map((p, index) => (
                    <PhoneNumber
                        key={p.id}
                        phoneNumber={p.phoneNumber}
                        fetchUserDetails={fetchUserDetails}
                        id={p.id}
                        index={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default UserDetails