import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Prueba async-await-fetch', () => {

    test('debe de retornar el url de una imagen', async() => {

        const url = await getImagen();
        console.log(url);
        expect( url.includes('https://')).toBe(true);


    })
    
});