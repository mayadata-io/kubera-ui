import React from 'react';
import RadioButton from '../../RadioButton';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { KuberaThemeProvider } from '../../../theme';
import { screen } from '@testing-library/dom';

afterEach(cleanup);
jest.useFakeTimers();

describe('Radio Button Component', () => {
  it('Renders', () => {
    render(
      <KuberaThemeProvider platform="kubera-chaos">
        <RadioButton>Target cluster</RadioButton>
      </KuberaThemeProvider>
    );
    //get radio byRole
    const radio = screen.getByRole('radio');
    //check type
    expect(radio).toHaveProperty('type', 'radio');
    //check value
    expect(radio).toHaveProperty('value', '');
    //check checked attribute
    expect(radio).toHaveProperty('checked', false);
    //change checked value
    fireEvent.change(radio, { target: { checked: true } });
    //check checked changed value
    expect(radio).toHaveProperty('checked', true);
    //give text value
    fireEvent.change(radio, { target: { value: 'radio button text' } });
    //check given value
    expect(radio).toHaveProperty('value', 'radio button text');
  });
});
