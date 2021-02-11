import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import App from '../../components/App';

const setup = () => shallow(<App />);

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('Should render', () => {
    const element = component.find('.app');
    expect(element.length).toEqual(1);
  });

  test('renders the app in the page', () => {
    const item = component.find('.app');
    expect(item).toMatchSnapshot();
  });
});
