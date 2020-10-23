import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { TabPanel } from '../../TabPanel';

describe('TabPanel Component', () => {
  it('Renders', () => {
    const { getByRole } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <TabPanel index={1} value={1}></TabPanel>
      </KuberaThemeProvider>
    );

    expect(getByRole('tabpanel')).toBeTruthy();
  });
});
