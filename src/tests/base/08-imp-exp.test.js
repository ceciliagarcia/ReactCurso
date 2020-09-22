import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes',()=> {


    test(' Debe de retonar un heroe por id', () => {

        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
        

    })

    test(' Debe de retonar un arreglo con heroes DC', () => {

        const owner = 'DC';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroeData);
        

    })


    test(' Debe de retonar un arreglo con heroes Marvel', () => {

        const owner = 'Marvel';

        const heroe = getHeroesByOwner(owner);

       // const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroe.length).toBe(2);
        

    })
    
});