import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "d41de8bb-c175-4c94-bb80-b3217e0d6207",
  }
})


//Чтоб не экспортировать каждую ф-ю отдельно можно сделать объект содержащий все методы для взаимодействия с API;
// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then((response) => response.data);
// };

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId){
    return axiosInstance.post(`follow/${userId}`)
  },
  unfollow(userId){
    return axiosInstance.delete(`follow/${userId}`)
  },
  getProfile(userId){
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
}

export const authAPI = {
  me(){
    return  axiosInstance.get(`auth/me`).then(response => response.data);
  }
}