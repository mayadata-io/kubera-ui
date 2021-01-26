import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { LegendData } from './base';
import { useStyles } from './style';

export type LegendProps = {
  data?: Array<LegendData>;
  heading?: Array<string>;
  width?: number;
  height?: number;
};

const LegendTable: React.FC<LegendProps> = ({
  data,
  heading,
  width = 400,
  height = 200,
}) => {
  const classes = useStyles({ width, height });
  return (
    <TableContainer className={classes.root}>
      <Table aria-label="simple table" cellPadding="0.2">
        <TableHead>
          <TableRow className={classes.tableRow}>
            {heading &&
              heading.map((element) => (
                <TableCell
                  key={`${element}-heading-cell`}
                  className={classes.tableHeading}
                >
                  <Typography>{element}</Typography>
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody style={{ width: '100%' }}>
          {data &&
            data.map((row) => (
              <TableRow
                key={`${row.value[0]} ${Math.random() * 100} }`}
                className={classes.tableRow}
              >
                {row.value.map(
                  (element, index) =>
                    (index === 0 && (
                      <TableCell
                        key={`${element}-${Math.random() * 100} `}
                        className={classes.tableCell}
                      >
                        <Typography className={classes.tableLabel}>
                          {element}
                        </Typography>
                      </TableCell>
                    )) ||
                    (index !== 0 && (
                      <TableCell
                        key={`${element}-${Math.random() * 100} `}
                        className={classes.tableCell}
                      >
                        <Typography className={classes.tableData}>
                          {element}
                        </Typography>
                      </TableCell>
                    ))
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export { LegendTable };
