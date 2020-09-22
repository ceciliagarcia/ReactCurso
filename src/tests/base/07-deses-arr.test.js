import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';


describe('Pruebas en desestructuracion', () => {

    test('debe retonar un string y un numero', () => {
        

        //const arr = retornaArreglo();
       // expect(arr).toEqual(['ABC', 123]);

       const [letras, numeros] = retornaArreglo();

       console.log(typeof letras);
       
       expect(letras).toBe('ABC');
       expect(typeof letras).toBe('string');



    })
    

});