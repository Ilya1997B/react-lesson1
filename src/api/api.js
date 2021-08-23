import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{'API-KEY': 'c0f25401-d8c0-4318-a8c0-90615bbb976e'}
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
             return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId);
    }
}

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
    }
}