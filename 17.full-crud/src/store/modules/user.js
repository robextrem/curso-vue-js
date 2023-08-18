import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state:()=>{
        return {
            user:null
        }
    },
    actions:{
        login(email, password){
            if(email == "roberto@gmail.com" && password=="gatitos123"){
                this.user={
                    email:"roberto@gmail.com",
                    nombre:"Roberto",
                    token:"123456"
                }
            }
            return this.user
        }
    },
    getters:{
        getUser: function(){
            return this.user
        }
    },
    persist:{
        enabled: true,
        strategies:[
            {
                key: "my_session",
                storage: sessionStorage // localStorage || sessionStorage
            }
        ]
    }
})