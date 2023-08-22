const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
    name: "/user",
    initialState: {
        loading: false,
        updating: false,
        isFocusedName: false,
        isFocusedPhone: false,
        userInfo: "",
        accountName : "",
        phone: "",
    },
    reducers:{
        updateInfo (state,action){
            state.updating= true
        },
        updateSuccess(state,action){
           console.log("updateSuccess",action.payload)
            state.updating = false;
            state.userInfo = action.payload;
        
          },
        setInfo (state,action){
          const data = action.payload
          state.phone =data.phone;
          state.accountName = data.accountName
        },
        getInfo(state){
          state.loading = true;
        }
        ,
        getInfoSuccess(state,action){
          console.log("crr1"+ action);
          state.loading = false
          state.userInfo = action.payload;
        }
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