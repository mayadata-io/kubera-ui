import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { BasicTable } from '../BasicTable';
import {
  tableHead,
  tableData,
  pageCount,
  paginationData,
  onChangePage,
} from './data';

storiesOf('Table/Basic Table', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <BasicTable
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <BasicTable
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <BasicTable
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />{' '}
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <BasicTable
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <BasicTable
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />
    </ThemedBackground>
  ));
