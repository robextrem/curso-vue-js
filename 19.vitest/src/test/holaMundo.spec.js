import {describe, it, expect} from 'vitest'

describe("Hola mundo",()=>{

    it('deberia sumar',()=>{
        const x = 5;
        const y = 3;

        expect(x+y).toBe(8)

    })

})