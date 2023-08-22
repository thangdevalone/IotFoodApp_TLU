const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
    name: "/user",
    initialState: {
        loading: false,
        updating: false,
        stateUpdate: "No action",
        isFocusedName: false,
        isFocusedPhone: false,
        userInfo: "",
        accountName : "",
        phone: "",
        password:""
    },
    reducers:{
        updateInfo (state,action){
            state.updating= true
        },
        updateSuccess(state,action){
            state.updating = false;
            state.userInfo = action.payload;
            state.stateUpdate="success";
        },
        updateFail(state,action){
          state.stateUpdate = "fail";
        },
        setInfo (state,action){
          const data = action.payload
          state.phone =data.phone;
          state.accountName = data.accountName;
          state.password = data.password
        },
        getInfo(state){
          state.loading = true;
        }
        ,
        getInfoSuccess(state,action){
          console.log("crr1"+ action);
          state.loading = false
          state.userInfo = action.payload;
        },
        resetState(state) {
          state.stateUpdate = "No action"
        },
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

export const UserActions = UserSlice.actions

export default UserSlice;