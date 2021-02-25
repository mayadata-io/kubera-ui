import { screen } from '@testing-library/dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { QuickActionCard } from '../QuickActionCard';
import { quickActionTestData } from '../testData';

afterEach(cleanup);
jest.useFakeTimers();

describe('QuickActionCard', () => {
  it('Renders', () => {
    render(
      <KuberaThemeProvider platform="litmus-portal">
        <QuickActionCard
          quickActions={quickActionTestData}
          title={'Quick Actions'}
        />
      </KuberaThemeProvider>
    );

    // Get QuickActionCard component
    const quickActionCardComponent = screen.getByTestId(
      'quickActionCardComponent'
    );
    expect(quickActionCardComponent).toBeTruthy();

    // Get element using alt text and check src
    for (let i = 0; i < 4; i++) {
      const image = screen.getByAltText(i.toString());
      expect(image.getAttribute('src')).toMatch(`testUrl${i}`);
    }
  });
});
