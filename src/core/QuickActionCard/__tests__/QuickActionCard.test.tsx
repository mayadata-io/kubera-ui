import { screen } from '@testing-library/dom';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { QuickActionCard } from '../QuickActionCard';
import { quickActionTestData } from '../testData';

afterEach(cleanup);
jest.useFakeTimers();

describe('EditablText component', () => {
  it('Renders', () => {
    render(
      <KuberaThemeProvider platform="kubera-chaos">
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
  });
});
