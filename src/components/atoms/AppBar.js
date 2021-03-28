import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBars from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

const Wrapper = styled.div`
  flexgrow: 1;
`;

const AppBarStyled = styled(AppBars)`
  position: static;
  background: rgba(88, 191, 225, 0.93);
  color: rgb(255, 255, 255);
`;

const IconButtonStyled = styled(IconButton)`
  edge: start;
  color: inherit;
  aria-label: menu;
  margin-right: 1%;
`;

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    fontFamily: 'NanumSquareEB',
    fontWeight: 400
  }
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <AppBarStyled>
        <Toolbar>
          <IconButtonStyled>
            <Menu />
          </IconButtonStyled>
          <Typography variant="h5" className={classes.title}>
            SE Board 관리자
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBarStyled>
    </Wrapper>
  );
};

export default AppBar;
