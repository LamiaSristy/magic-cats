import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

const setup = () => shallow(<Loading />);

describe('Loading component', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.loading-wrap');
    expect(element.length).toEqual(1);
  });
});
