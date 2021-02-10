import React from 'react';
import { shallow } from 'enzyme';
import FourOFour from '../../components/404';

const setup = () => shallow(<FourOFour />);

describe('404 component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.four-o-four');
    expect(element.length).toEqual(1);
  });
});
