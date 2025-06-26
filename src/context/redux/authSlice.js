import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    email: null,
    idToken: null,
    access_token: null,
    refresh_token: null,
}

const initState = JSON.parse(sessionStorage.getItem("user") || JSON.stringify(initValue))

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        signIn: (state, actions) => {
            const data = actions.payload
            console.log("PAYLOAD", data)
            state = { email: data.email, idToken: data.idToken, access_token: data.access_token, refresh_token: data.refresh_token }
            sessionStorage.setItem("user", JSON.stringify(state))
        },
        signOut: (state) => {
            sessionStorage.setItem("user", JSON.stringify(initValue))
            state = initValue
        }
    }
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer