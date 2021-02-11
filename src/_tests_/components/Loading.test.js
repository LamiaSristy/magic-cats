import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
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

  test('renders the loading-wrap in the page', () => {
    const item = component.find('.loading-wrap');
    expect(item).toMatchSnapshot();
  });
 
});
