import React, {useEffect, useState} from 'react'
import {requests} from "../../requests/requests.js"
import {UserCard} from "../../components/index.js"
import {IoMdAddCircle} from "react-icons/io"
import {useForm} from "react-hook-form"

const Main = () => {
    const [users, setUsers] = useState([])
    const [isAddingUser, setIsAddingUser] = useState(false)
    const {
        register: registerUser,
        handleSubmit: handleSubmitUser,
        formState: {errors: phoneFormErrors},
        reset: resetUserForm,
    } = useForm({mode: 'onChange'})

    const fetchUsers = () => {
        requests.getUsers().then(res => setUsers(res.data))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const addUser = (formData) => {
        const requestBody = {
            name: formData.name,
            email: formData.email,
            dateOfBirth: formData.dateOfBirth
        }

        requests.addUser(requestBody)
            .then(fetchUsers)
            .finally(resetUserForm)
    }

    return (
        <div className={" my-10 "}>
            <div className={"w-96 my-2 mx-auto border p-5 flex justify-between align-items-center cursor-pointer"}>
                <div
                    className={"w-full flex justify-center align-items-center"}
                    onClick={() => setIsAddingUser(prev => !prev)}
                >
                    <IoMdAddCircle className={"h-5 w-5 text-green-300"}/>
                </div>
            </div>
            {
                isAddingUser && (
                    <form
                        className={"w-96 my-2 mx-auto border p-5 flex flex-col gap-5"}
                        onSubmit={handleSubmitUser(addUser)}
                    >
                            <div>
                                <span className={"text-xs text-red-400 mb-0.5"}>
                                    {phoneFormErrors.name?.message}
                                </span>
                                <input
                                    type="text"
                                    placeholder={"Name"}
                                    {...registerUser("name", {
                                        required: "Name is required",
                                        maxLength: {
                                            value: 100,
                                            message: "Name max length is 100"
                                        }
                                    })}
                                    className={"border w-full h-full py-2 px-4 outline-0"}
                                />
                            </div>
                            <div>
                                <span className={"text-xs text-red-400 mb-0.5"}>
                                    {phoneFormErrors.email?.message}
                                </span>
                                <input
                                    type="email"
                                    placeholder={"test@example.com"}
                                    {...registerUser("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                            message: "Invalid email format. Example: test@example.com",
                                        },
                                    })}
                                    className={"border w-full h-full py-2 px-4 outline-0"}
                                />
                            </div>
                            <div>
                                <span className={"text-xs text-red-400 mb-0.5"}>
                                    {phoneFormErrors.dateOfBirth?.message}
                                </span>
                                <input
                                    type="date"
                                    {...registerUser("dateOfBirth", {
                                        required: "Phone number is required",
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
            <ul className={"flex justify-around mt-10"}>
                {
                    users.map(u => (
                        <UserCard
                            key={u.id}
                            id={u.id}
                            name={u.name}
                            email={u.email}
                            dateOfBirth={u.dateOfBirth}
                            fetchUsers={fetchUsers}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default Main