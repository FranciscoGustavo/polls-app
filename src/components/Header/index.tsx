import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useStyles } from './styles';

const Header: FC = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <nav className={classes.nav}>
          <Button component={Link} to="/" variant="contained">
            Todas
          </Button>
          <Button component={Link} to="/polls/new" variant="contained">
            Nueva encuesta
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
