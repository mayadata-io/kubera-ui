import {
  Table as MuiTable,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { TableBaseProps } from './base';
import { useStyles } from './style';

interface PaginationData {
  pageNo: number;
  rowsPerPage: number;
}

interface TableProps extends TableBaseProps {
  tableHead: React.ReactNode;
  tableData: React.ReactNode;
  paginationData: PaginationData;
  pageCount: number;
  onChangePage: (_: any, page: number) => void;
  onChangeRowsPerPage?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Table: React.FC<TableProps> = ({
  tableHead,
  tableData,
  paginationData,
  pageCount,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} data-testid="table">
      <TableContainer className={classes.tableMain}>
        <MuiTable stickyHeader>
          <TableHead className={classes.tableHead}>{tableHead}</TableHead>
          <TableBody>{tableData}</TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={pageCount}
        rowsPerPage={paginationData.rowsPerPage}
        page={paginationData.pageNo}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </Paper>
  );
};

export { Table };
