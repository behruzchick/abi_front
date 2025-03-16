export default defineNuxtRouteMiddleware((event) => {
    console.log("Middleware");

    const jwt = useCookie("jwt");

    if(!jwt.value){
        console.log("not logged in");
        return navigateTo("/login");
    }
})  