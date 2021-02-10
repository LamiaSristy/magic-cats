import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from '../../components/AboutUs';

const setup = () => shallow(<AboutUs />);

describe('AboutUs component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.author-heading');
    expect(element.length).toEqual(1);
  });
});
