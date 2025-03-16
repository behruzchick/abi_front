
import axios from 'axios'
import {defineNuxtPlugin, navigateTo} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        withCredentials: true,
        // headers:{}
    })

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    })

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                navigateTo("/login")
            }
            return Promise.reject(error)
        }
    )
    nuxtApp.provide('api', api)
})
