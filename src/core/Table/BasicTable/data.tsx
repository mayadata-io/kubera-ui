import { TableCell, TableRow, Typography } from '@material-ui/core';
import React from 'react';

const tableHead = (
  <TableRow>
    <TableCell>Status</TableCell>
    <TableCell>Workflow Name</TableCell>
    <TableCell>Target Cluster</TableCell>
    <TableCell>Reliability Details</TableCell>
    <TableCell># of Steps</TableCell>
    <TableCell>Last Run</TableCell>
    <TableCell />
  </TableRow>
);

const tableData = (
  <TableRow>
    <TableCell colSpan={7}>
      <Typography align="center">No records available</Typography>
    </TableCell>
  </TableRow>
);

const pageCount = 0;

const paginationData = {
  pageNo: 0,
  rowsPerPage: 5,
};

const onChangePage = (_: any, page: number) => {
  console.log(page);
};

export { tableHead, tableData, pageCount, paginationData, onChangePage };
