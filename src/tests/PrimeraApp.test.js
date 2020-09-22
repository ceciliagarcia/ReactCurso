import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';

import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp />', () => {

   // test('debe de mostrar el mensaje "Hola, Cecilia"', () => {
        
       // const saludo = "Hola, soy Cecilia";

       // const { getByText } = render(<PrimeraApp saludo={saludo}/>);

       // expect(getByText(saludo)).toBeInTheDocument();


   // })

   test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Cecilia';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
   })
   
    

});