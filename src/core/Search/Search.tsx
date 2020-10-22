import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, InputAdornment, Input } from '@material-ui/core';
import { BaseSearchProps } from './base';
import { useStyles } from './styles';

const Search: React.FC<BaseSearchProps> = ({ placeholder }) => {
  // Styles
  const classes = useStyles();

  return (
    <FormControl data-testid="search">
      <Input
        className={classes.root}
        id="input-with-icon-adornment"
        placeholder={placeholder}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export { Search };
