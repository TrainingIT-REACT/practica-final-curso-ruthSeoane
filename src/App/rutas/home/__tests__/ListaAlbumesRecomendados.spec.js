import React from 'react';
import { shallow } from 'enzyme';

import ListaAlbumesRecomendados from "../ListaAlbumesRecomendados";

describe(ListaAlbumesRecomendados, () => {
    describe("Render", () => {
        let wrapper;

        let albums = [
            { "id": 1, "name": "Chip off the old block", "artist": "Blair", "cover": "/images/cover.jpg" },
            { "id": 2, "name": "Battle grounds", "artist": "Florian", "cover": "/images/cover.jpg" },
            { "id": 3, "name": "Decisions decisions", "artist": "Skylar", "cover": "/images/cover.jpg" }
        ];
        

        beforeEach(() => {
            wrapper = shallow(<ListaAlbumesRecomendados albums={albums} />);
        });

        it('Deberia sacar los albumes que puse', () => {
            
            expect(wrapper.find('h2').length).toBe(1);
            expect(wrapper.find('h2').text()).toBe("Hoy te recomendamos estos álbumes: ");

            expect(wrapper.find('.mejoresAlbumes .albumes .infoAlbum .portadaAlbum').length).toBe(3);
            expect(wrapper.find('.mejoresAlbumes .albumes .infoAlbum .textoInfoAlbum').length).toBe(3);
            expect(wrapper.find('.mejoresAlbumes .albumes .infoAlbum .textoInfoAlbum .nombreAlbum').length).toBe(3);

        });
    });
});