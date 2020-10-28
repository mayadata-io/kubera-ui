import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableProps,
  TablePagination,
  Paper,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './style';

interface PaginationData {
  pageNo: number;
  rowsPerPage: number;
}

interface BasicTableProps extends TableProps {
  tableHead: React.ReactNode;
  tableData: React.ReactNode;
  paginationData: PaginationData;
  pageCount: number;
  onChangePage: (_: any, page: number) => any;
  onChangeRowsPerPage?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const BasicTable: React.FC<BasicTableProps> = ({
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
        <Table stickyHeader>
          <TableHead className={classes.tableHead}>{tableHead}</TableHead>
          <TableBody>{tableData}</TableBody>
        </Table>
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

export { BasicTable };
