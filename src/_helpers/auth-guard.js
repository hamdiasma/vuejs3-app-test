import router  from "@/router"


export function authGuard(to) { 
    let token = localStorage.getItem("token")
    console.log(token);

    if(token){
        return true
    }

    router.push("/login")
 }

 export function authGuardLog(to) { 

    let token = localStorage.getItem("token")
    if(token){
        router.push("/")
       
    }else{
        return true
    }
 }

 export const URL_APP = "http://localhost:8888"