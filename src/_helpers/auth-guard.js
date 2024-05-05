import router  from "@/router"


export function authGuard(to) { 
    let token = localStorage.getItem("token")
    console.log('====================================');
    console.log(token);
    console.log('====================================');

    if(token){
        return true
    }

    router.push("/login")
 }