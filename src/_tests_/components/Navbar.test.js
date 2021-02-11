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

  test('renders the nav in the page', () => {
    const item = component.find('.nav');
    expect(item).toMatchSnapshot();
  });

  test('renders the container in the page', () => {
    const item = component.find('.container');
    expect(item).toMatchSnapshot();
  });

  test('renders the navItems in the page', () => {
    const item = component.find('.navItems');
    expect(item).toMatchSnapshot();
  });

  test('renders the navBrand in the page', () => {
    const item = component.find('.navBrand');
    expect(item).toMatchSnapshot();
  });

  test('renders the navLink in the page', () => {
    const item = component.find('.navLink');
    expect(item).toMatchSnapshot();
  });

  test('renders the navBrandImg in the page', () => {
    const item = component.find('.navBrandImg');
    expect(item).toMatchSnapshot();
  });
});
