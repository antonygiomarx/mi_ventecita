import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';

import Sidebar from '../sidebar/Sidebar';

function Main() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" className="mat">
          Mi Ventecita
        </Typography>
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
}

export default Main;
