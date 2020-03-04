import React from 'react';
import { mount } from 'enzyme';

// Componente
import Update from '../Update';

describe(Update.WrappedComponent, () => {
  it('should send the article', done => {
    const wrapper = mount(<Update.WrappedComponent />);
    const name = "Nombre";
    const mail = "mail@mail.com";
    const pass = 1234;

    const fetchMock =
      jest.fn()
        .mockReturnValue(Promise.resolve({
          json: () => ({ name, mail, pass })
        }))

    // Modificamos la función fetch!
    global.fetch = fetchMock;

    // Modificamos los campos y mandamos el formulario
    const nameInput = wrapper.find("#name");
    nameInput.instance().value = name;
    nameInput.simulate('change');

    const mailInput = wrapper.find("#mail");
    mailInput.instance().value = mail;
    mailInput.simulate('change');

    const passInput = wrapper.find("#pass");
    passInput.instance().value = pass;
    passInput.simulate('change');

    // Simulamos el envío del formulario
    wrapper.find('#submit').simulate('click');

    // Comprobamos!
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toBeCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: JSON.stringify({
            name,
            mail,
            pass: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    // Fuerza a que se resuelvan todas las promesas. Aunque una promesa esté
    // resuelta, eso no quiere decir que se resuelva de manera síncrona.
    // setImmediate es un pequeño truco para forzar esa sincronía y poder
    // comprobar el resultado correctamente
    setImmediate(() => {
      expect(wrapper.state().response).toContain(id);
      done();
    });
  });
});
