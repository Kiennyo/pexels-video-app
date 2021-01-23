import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => (
  <CircularProgress className="MuiCircularProgress-colorPrimary" data-testid="loader" style={{ color: 'white' }} />
);

export default Loader;
