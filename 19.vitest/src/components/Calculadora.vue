<script>
    export default{
        props:{
            nombre:{
                type:String
            }
        },
        data:function(){
            return{
                numero1:0,
                numero2:0,
                resultado:0,
                operacion: ""
            }
        },
        methods:{
            suma: function(){
                this.operacion="+"
                this.resultado = this.numero1 + this.numero2
                return this.resultado
            },
            resta: function(){
                this.operacion="-"
                this.resultado = this.numero1 - this.numero2
                return this.resultado
            },
            multiplicacion: function(){
                this.operacion="*"
                this.resultado =  this.numero1 * this.numero2
                return this.resultado
            },
            division: function(){
                this.operacion="/"
                this.resultado = this.numero1 / this.numero2
                return this.resultado
            }
        }
    }
</script>
<template>
    <div id="calculadora">
        <div>
            <label>Ingresa el primer numero</label><br/>
            <input type="number" v-model="numero1" id="numero1">
        </div>
        <div>
            <label>Ingresa el segundo numero</label><br/>
            <input type="number" v-model="numero2" id="numero2">
        </div>
        <p>{{numero1}} {{ operacion }}  {{ numero2 }} = <span id="resultado">{{ resultado }}</span></p>
        <div>
            <button id="suma" @click="suma">Sumar</button>
            <button id="resta" @click="resta">Restar</button>
            <button id="multiplicacion" @click="multiplicacion">Multiplicar</button>
            <button id="dividir" @click="division">Dividir</button>
        </div>
    </div>
</template>