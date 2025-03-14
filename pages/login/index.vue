<script setup lang="ts">
    import {ref} from 'vue'

    import AppButton from "~/components/button/AppButton.vue";
    import LoginLayout from "~/layouts/LoginLayout.vue";
    import {userAuthStore} from "~/store/useStore";

    const authStore = userAuthStore();
    definePageMeta({
      layout:false
    })  

    
    const model = ref({
      number:"",
      password:""
    })
    


    const handleRegister = () => {
      window.open("https://t.me/your_kage_bot?start=start", "_blank");
    }

    const handleLogin = ( number:string , password:string ) => {
      console.log(number , password)
      authStore.login(number , password);
    }
</script>

<template>
  <LoginLayout>
    <div class="w-full flex items-center justify-center min-h-screen flex-col gap-4">
      <div class="flex flex-col border-2 rounded-md border-gray-200 px-8 py-8 shadow-lg">
        <h3 class="text-xl font-bold">Kirish</h3>
        <span>Kirish uchun login va parolni kiriting</span>
        <br>
        <form class="flex flex-col gap-4 pt-5 pb-5">
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
              <input v-model="model.number" type="text" class="w-full pl-3 px-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Login" />
            </div>
          </div>
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
              <input type="password" v-model="model.password" autocomplete="off" class="w-full pl-3 px-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Parol"/>
            </div>
          </div>
        </form>
        <AppButton title="Kirish" :bordered="false" @click="() => handleLogin(model.number , model.password)" />
        <span class="mt-2"></span>
        <AppButton title="Royxatdan otish" :bordered="true" @click="handleRegister"/>
      </div>
    </div>
  </LoginLayout>
</template>

<style scoped>

</style>