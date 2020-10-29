import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Table } from '../Table';
import {
  tableHead,
  tableData,
  pageCount,
  paginationData,
  onChangePage,
} from './data';

storiesOf('Table', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <Table
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
      <Table
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
      <Table
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <Table
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
      <Table
        tableData={tableData}
        tableHead={tableHead}
        pageCount={pageCount}
        paginationData={paginationData}
        onChangePage={onChangePage}
      />
    </ThemedBackground>
  ));
