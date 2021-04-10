import { render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { Table } from '../Table';
import {
  tableHead,
  tableData,
  pageCount,
  paginationData,
  onChangePage,
} from '../data';

describe('Basic Table Component', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <KuberaThemeProvider platform="kubera-chaos">
        <Table
          tableData={tableData}
          tableHead={tableHead}
          pageCount={pageCount}
          paginationData={paginationData}
          onChangePage={onChangePage}
        />
      </KuberaThemeProvider>
    );

    expect(getByTestId('table')).toBeTruthy();
  });
});
