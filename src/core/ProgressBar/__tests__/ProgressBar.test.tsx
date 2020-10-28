import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';
import { screen } from '@testing-library/dom';

afterEach(cleanup);
jest.useFakeTimers();

describe('ProgressBar renders', () => {
  it('Render', () => {
    const { getByTestId } = render(
      <ProgressBar value={80} color={'red'} label="Success" />
    );
    const elem = screen.getByRole('progressbar');
    // check label text
    expect(getByTestId('label').textContent).toBe('Success');
    // check value
    expect(getByTestId('value').textContent).toBe('80');

    // check value progressbar
    expect(elem.getAttribute('aria-valuenow')).toBe('80');
    // check color progressbar
    const el = document.getElementsByClassName('MuiLinearProgress-bar');
    const style = window.getComputedStyle(el[0]);
    expect(style.backgroundColor).toBe('rgb(63, 81, 181)');
  });
});
