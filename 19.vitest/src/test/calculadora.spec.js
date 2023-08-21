import {describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import Calculadora from '../components/Calculadora.vue'

describe("Funcionamiento de la Calculadora",()=>{

    const div = document.createElement("div")
    div.id= 'root'
    document.body.appendChild(div)

    it('deberia sumar',async ()=>{
        const wrapper = mount(Calculadora,{
            attachTo: "#root",
            /*props: {
                nombre:"Pepe"
            }*/
        })

        // Como si hicieramos un document.querySelector("#numero1")
        await wrapper.find("#numero1").setValue('5')
        await wrapper.find("#numero2").setValue('7')
        await wrapper.find("#suma").trigger('click')

        const resultado = parseInt(wrapper.find("#resultado").text())

        expect(resultado).toBe(12)

    })

    it('deberia restar',async ()=>{
        const wrapper = mount(Calculadora,{
            attachTo: "#root",
            /*props: {
                nombre:"Pepe"
            }*/
        })

        // Como si hicieramos un document.querySelector("#numero1")
        await wrapper.find("#numero1").setValue(5)
        await wrapper.find("#numero2").setValue(7)
        await wrapper.find("#resta").trigger('click')

        const resultado = parseInt(wrapper.find("#resultado").text())

        expect(resultado).toBe(-2)

    })

})

describe("Renderizado de la Calculadora",()=>{
    const div = document.createElement("div")
    div.id= 'root'
    document.body.appendChild(div)

    it('deberia mostrarse', () => {
        const wrapper = mount(Calculadora,{
            attachTo: '#root'
        })

        const elemento = wrapper.find("#calculadora")
        expect(elemento.exists()).toBeTruthy()

    })
})