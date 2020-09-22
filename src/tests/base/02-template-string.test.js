import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe ('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retonar Hola Cecilia! ', () => {

        const nombre = 'Cecilia';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    test( 'getSaludo debe retonar Hola Carlos! sino hay argumento', () => {

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');

        

    })

    
});