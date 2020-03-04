import React from 'react';
import { shallow } from 'enzyme';

import Perfil from "../Perfil";

describe(Perfil, () => {
    describe("Render", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Perfil/>);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.find('.datosPerfil .miPerfilText').text()).toBe("Mi perfil");
            expect(wrapper.find('.datosPerfil .textoGnal').length).toBe(2);
            expect(wrapper.find('.datosPerfil .textoGnal .textoG').length).toBe(2);
            expect(wrapper.find('.datosPerfil .textoGnal .textoP').length).toBe(2);
        });
    });
});