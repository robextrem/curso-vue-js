import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
    state: () => {
        return {
            count: 0 //private
        }
    },
    getters:{
        getCount: function(){
            return this.count
        }
    },
    actions:{
        sum(){
            this.count++
        },
        substract(){
            this.count--
        }
    }
})