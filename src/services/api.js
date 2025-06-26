// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import axios from "axios"

// export const api = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({baseUrl: import.meta.env.BASE_URL}),
//     endpoints: (builder) => {
//         createUser: builder.mutation({
//             query: (newUser) => ({
//                 url: '/authentication_app/signup',
//                 method: 'POST',
//                 body: newUser
//             })
//         })
//     }
// })

// export const {useCreateUserMutation} = api

const baseURL = import.meta.env.VITE_APP_BASE_URL
console.log("BASE", baseURL)

export async function loginAPI(data) {
    return await axios.post(`${baseURL}/authentication_app/signin/`, data)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data.error
        })
}


export async function signUpAPI(data) {
    return await axios.post(`${baseURL}/authentication_app/signup/`, data)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error.response.data.error
        })
}