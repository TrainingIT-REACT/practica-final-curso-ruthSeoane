import React from 'react';
import { shallow } from 'enzyme';

import AlbumInfo from "../AlbumInfo";

describe(AlbumInfo , () => {
    describe("Render", () => {
        let wrapper;

        let canciones = [{ "id": 1, "name": "Take On Me", "audio": "/music/funky_energy_loop.mp3", "seconds": 203, "album_id": 1 },
        { "id": 2, "name": "S.O.S.", "audio": "/music/funky_energy_loop.mp3", "seconds": 203, "album_id": 1 },
        { "id": 3, "name": "Mamma Mia", "audio": "/music/funky_energy_loop.mp3", "seconds": 203, "album_id": 1 }];

        let album = { "id": 1, "name": "Chip off the old block", "artist": "Blair", "cover": "/images/cover.jpg" };

        beforeEach(() => {
            wrapper = shallow(<AlbumInfo canciones ={canciones} album={album}/>);
        });

        it('should add the HTML elements', () => {
            expect(wrapper.find('.xeral .total').text()).toContain("10:09");
        });
    });
});