import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

    test('debe de retonar un heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync(id)
        .then( h => {

            expect(h).toBe(heroes[0]);
            done();
        })
    });

    test('debe de obtener un error si el heroe por id no existe', ( done ) => {

        const id = 10;

        getHeroeByIdAsync(id)
        .catch( error => {

            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });
    
});