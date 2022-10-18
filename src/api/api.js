import * as axios from "axios";

const instanse = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4d14356f-05ff-48ec-8658-216bd0815cbf"
    }
})


export let usersAPI = {
    getUsers(countPage = 1, sizeUserOfPage = 100) {
        return instanse.get(`users?page=${countPage}&count=${sizeUserOfPage}`)
            .then(response => response.data)
    },
    subscribeUser(userId) {
        return instanse.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unsubscribeUser(userId) {
        return instanse.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export let profileAPI = {
    getDataUser(userId) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    putStatus(status) {
        return instanse.put(`profile/status`, {status})
    }
}

export let authAPI = {
    isAuth() {
        return instanse.get(`auth/me`)
            //.then(response => response.data)
    },
    login(email, password) {
        return instanse.post(`auth/login`, {email, password, rememberMe: true})
    },
    logout() {
        return instanse.delete(`auth/login`)
    }
}

//export default usersAPI;
//export authAPI;