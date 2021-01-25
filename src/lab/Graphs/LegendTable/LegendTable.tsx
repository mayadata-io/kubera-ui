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
    <TableContainer className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {heading &&
              heading.map((element) => (
                <TableCell
                  key={`${element}-heading-cell`}
                  style={{
                    border: 'none',
                    minWidth: '15%',
                    color: 'blue',
                  }}
                >
                  <Typography
                    style={{ wordWrap: 'break-word', whiteSpace: 'initial' }}
                  >
                    {element}
                  </Typography>
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody style={{ width: '100%' }}>
          {data &&
            data.map((row) => (
              <TableRow
                key={`${row.value[0]} ${Math.random() * 100} }`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  border: '0px',
                  margin: 'none',
                  padding: '0px !important',
                  width: '100%',
                }}
              >
                {row.value.map(
                  (element, index) =>
                    (index === 0 && (
                      <TableCell
                        key={`${element}-${Math.random() * 100} `}
                        style={{
                          display: 'flex',
                          border: '0px',
                          margin: 'none',
                          alignContent: 'flex-start',
                          padding: '0px !important',
                        }}
                      >
                        <Typography
                          style={{
                            wordWrap: 'break-word',
                            whiteSpace: 'initial',
                            width: '12rem',
                            alignContent: 'left',
                            color: 'red',
                            padding: '0px !important',

                            margin: '0',
                          }}
                        >
                          {element}
                        </Typography>
                      </TableCell>
                    )) ||
                    (index !== 0 && (
                      <TableCell
                        key={`${element}-${Math.random() * 100} `}
                        style={{
                          display: 'flex',
                          border: '0px',

                          padding: '0px !important',
                          margin: 'none',
                          alignContent: 'flex-start',
                        }}
                      >
                        <Typography
                          style={{
                            wordWrap: 'break-word',
                            whiteSpace: 'initial',
                            width: '4rem',
                            alignContent: 'left',
                            padding: '0px !important',

                            margin: '0',
                          }}
                        >
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
