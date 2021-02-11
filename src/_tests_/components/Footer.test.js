import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
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

  test('renders the footer', () => {
    const item = component.find('.footer');
    expect(item).toMatchSnapshot();
  });

  test('renders the cat-images the page', () => {
    const item = component.find('.container');
    expect(item).toMatchSnapshot();
  });
});
