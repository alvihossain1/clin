import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    name: null,
    email: null,
    token: null,
}

const initState = JSON.parse(sessionStorage.getItem("user") || JSON.stringify(initValue))

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        signIn: (state, actions) => {
            state = { name: 'Alvi Hossain', email: actions.payload.email, token: "asfasfavvz3" }
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