import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

const setup = () => shallow(<Footer />);

describe('Footer component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.footer');
    expect(element.length).toEqual(1);
  });
});
