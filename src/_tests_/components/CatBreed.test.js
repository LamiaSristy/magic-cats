/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import CatBreed from '../../components/CatBreed';

const setup = () => shallow(<CatBreed />);

describe('CatBreed component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.cat-name');
    expect(element.length).toEqual(0);
  });

  it('Should render', () => {
    const elementImg = component.find('.img');
    expect(elementImg.length).toBeLessThan(10);
  });

  it('Should render', () => {
    const elementName = component.find('.cat-name');
    expect(elementName.length).toBeLessThan(5);
  });

  it('Should render', () => {
    const elementButton = component.find('.cat-breed');
    expect(elementButton).toBeVisible;
  });

  test('renders the cat-breed the page', () => {
    const catbreed = component.find('.cat-breed');
    expect(catbreed).toMatchSnapshot();
  });
  test('renders the cat-container the page', () => {
    const catcontainer = component.find('.cat-container');
    expect(catcontainer).toMatchSnapshot();
  });
  test('renders the cat-images the page', () => {
    const catimg = component.find('.img');
    expect(catimg).toMatchSnapshot();
  });
});
