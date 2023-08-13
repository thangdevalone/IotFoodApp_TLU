import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  logging: false,
  registering: false,
  actionAuth: "No action",
  currentUser: undefined,
  isRehydrating: true, // Khởi tạo là true
}

const authSlice = createSlice({
  name: "auth",
  initialState:{
    logging: false,
    registering: false,
    actionAuth: "No action",
    currentUser: undefined,
    isRehydrating: true, // Khởi tạo là true
  },
  reducers: {
    login(state, action) {
      state.logging = true
      console.log(action.payload)
      state.actionAuth = "No action"
    },

    loginSuccess(state, action) {
      state.logging = false
      state.actionAuth = "Success"
      state.currentUser = action.payload
    },
    loginFailed(state) {
      state.logging = false
      state.actionAuth = "Failed"
    },
    register(state, action) {
      state.registering = true
      state.actionAuth = "No action"
    },
    registerSuccess(state, action) {
      state.registering = false
      state.actionAuth = "Success"
      state.currentUser = action.payload
    },
    registerFailed(state) {
      state.registering = false
      state.actionAuth = "Failed"
    },
    logout(state) {
      state.logging = false
      state.registering = false
      state.actionAuth = "No action"
      state.currentUser = undefined
    },
    resetAction(state) {
      state.actionAuth = "No action"
    },
    // ...các action khác
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/REHYDRATE"),
      (state) => {
        state.isRehydrating = false
      },
    )
  },
})

export const authActions = authSlice.actions

const authReducer = authSlice.reducer
export default authReducer
