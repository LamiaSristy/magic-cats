import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

const setup = () => shallow(<Navbar />);

describe('Navbar component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.nav');
    expect(element.length).toEqual(1);
  });
});
