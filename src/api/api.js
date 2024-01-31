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
    console.warn('Obsolete method, please use profileAPI object');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId){
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus(userId){
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status){
    return axiosInstance.put('profile/status', {
      status: status
    });
  },
  savePhoto(photoFile){
    const formData = new FormData();
    formData.append("image", photoFile);
    return axiosInstance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile){
    return axiosInstance.put('profile/', profile);
  }
}

export const authAPI = {
  me(){
    return  axiosInstance.get(`auth/me`).then(response => response.data);
  },
  login( email, password, rememberMe = false, captcha = null){
    return axiosInstance.post(`/auth/login`, 
     {email,password, rememberMe, captcha}
    );
  },
  logout(){
    return axiosInstance.delete(`/auth/login`);
  }
}

export const securityAPI = {
  getCaptchaUrl(){
    return  axiosInstance.get(`security/get-captcha-url`)
  }
}
