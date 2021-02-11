/*eslint-disable*/
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import CatSearch from '../../components/CatFilter';

const setup = () => shallow(<CatSearch />);

describe('CatSearch component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.search-input');
    expect(element).toBeVisible;
  });

  it('Should render', () => {
    const element = component.find('.search-input');
    expect(element.length).toEqual(1);
  });

  it('Should render', () => {
    const element = component.find('.search-input');
    expect(element).toBeTruthy;
  });

  it('Should render', () => {
    const element = component.find('.search');
    expect(element).toBeFalsy;
  });

  test('renders the search-input in the page', () => {
    const item = component.find('.search-input');
    expect(item).toMatchSnapshot();
  });
});
