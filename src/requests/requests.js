import axios from "axios";

const instance = axios.create({baseURL: "https://localhost:7292/api"})

export const requests = {
    getUsers: () => instance.get("/users"),
    getUserDetails: (userId) => instance.get(`/users/${userId}`),
    addPhoneNumber: (data) => instance.post(`/phones`, data),
    deleteUserPhone: (id) => instance.delete(`/phones/${id}`),
    addUser: (data) => instance.post(`/users`, data),
    deleteUser: (id) => instance.delete(`/users/${id}`),
}