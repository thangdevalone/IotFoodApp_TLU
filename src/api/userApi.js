import axiosClient from './axiosClient';

const userApi ={
    updateInfo(user){
        const url ="user/update-user-info"
        return axiosClient.post(url,user)
    },
    getInfo(){
        const url ="user/get-user-info";
        return axiosClient.get(url)
    }
}

export default userApi