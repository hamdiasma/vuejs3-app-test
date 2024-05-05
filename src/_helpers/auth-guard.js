import router  from "@/router"


export function suthGuard(to) { 
    let token = localStorage.getItem("token")
    console.log('====================================');
    console.log(token);
    console.log('====================================');
    if(token){
        return true
    }
    
    router.push("/")
 }