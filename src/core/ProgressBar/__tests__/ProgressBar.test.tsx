import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProgressBar } from '../ProgressBar';

afterEach(cleanup);
jest.useFakeTimers();

describe('ProgressBar renders', () => {
  it('Render', () => {
    const items = [{ value: 80, color: 'rgb(63, 81, 181)', label: 'Success' }];
    const { getAllByRole, getByText } = render(
      <ProgressBar value={80} color={'red'} label="Success" />
    );
    const elem = getAllByRole('progressbar');
    /**
     * test component
     */
    elem.forEach((item, index) => {
      expect(item).toHaveAttribute(
        'aria-valuenow',
        items[index].value.toString()
      );
      const el = document.getElementsByClassName('MuiLinearProgress-bar');
      const style = window.getComputedStyle(el[index]);
      expect(style.backgroundColor).toBe(items[index].color);
      const labelElment = getByText(
        items[index].label + ' : ' + items[index].value
      );
      expect(labelElment).toBeInTheDocument();
    });
  });
});
