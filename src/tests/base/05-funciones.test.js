import { getUser, getUsuarioActivo } from '../../base/05-funciones';
import '@testing-library/jest-dom';

describe('Pruebas de 05-funciones', () => {

    test('Debe de retonar un objeto ', () => {
        const userTest = { 
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);


    })

    test('getUsuarioActtivo debe de retonar un objeto ', () => {
        
        const nombre = 'Cecilia Garcia';
        const userTest = { 
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);


    })
    
});