import { defineStore } from 'pinia'
import {navigateTo} from '#app'
import {toast} from "vue3-toastify";
export const userAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        authenticated:false,
        token:null
    }),

    actions: {
        async login(number:string , password:string){
            try {
                const { $api } = useNuxtApp();

                const {data} = await $api.post("/login", {
                    number,
                    password
                })


                toast.success("Akautnga kirildi!")
                console.log(data)

            }catch (e){
                toast.error("Kirishta xatolik!")
            }
        }
    }
})
