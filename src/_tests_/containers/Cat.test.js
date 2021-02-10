import React from 'react';
import { shallow } from 'enzyme';
import Cat from '../../containers/Cat';

const setup = () => shallow(<Cat />);

describe('Cat container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.cat-details-container');
    expect(element).toBeTruthy;
  });
  it('Should render', () => {
    const element = component.find('.cat-text');
    expect(element).toBeTruthy;
  });

  it('Should render', () => {
    const element = component.find('.text-muted');
    expect(element).toBeFalsy;
  });
  
  it('Should render', () => {
    const element = component.find('button-cat');
    expect(element).toBeTruthy;
  });
});