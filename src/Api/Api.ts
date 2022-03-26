import axios from "axios";


export const instanceUsers = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "46d03c13-5122-4b12-95a1-e807d8a6bece"
    },
})

export const getUsers = (activePage: number = 1, sizeUsersPage: number = 10) => {
   return instanceUsers.get(`users?page=${activePage}&count=${sizeUsersPage}`)
       .then(response => response.data);
}

export const onPageChanged = (page: number, sizeUsersPage: number) => {
   return instanceUsers.get(`users?page=${page}&count=${sizeUsersPage}`)
       .then(response => response.data);
}

export const getUserProfile = (userId: string) => {
    return instanceUsers.get(`profile/${userId}`)
        .then(response => response.data);
}

export const followFunction = (id: number) => {
    return instanceUsers.post(`follow/${id}`)
        .then(response => response.data);
}

export const unfollowFunction = (id: number) => {
    return instanceUsers.delete(`follow/${id}`)
        .then(response => response.data);
}

let apiKey = '93abb66b';

export const instanceMovies = axios.create({
    baseURL: `https://www.omdbapi.com/`,
})

export const  searchFilmsByTitle = (title: string) => {
    return instanceMovies.get(`?apikey=${apiKey}&s=${title}`)
}

export const onPageMoviesChanged = (title: string, page: number) => {
    return instanceMovies.get(`?apikey=${apiKey}&s=${title}&type=movie&page=${page}`)
}

export const searchFilmsByType = (title: string, type: string) => {
    return instanceMovies.get(`?apikey=${apiKey}&s=${title}&type=${type}`)
}


