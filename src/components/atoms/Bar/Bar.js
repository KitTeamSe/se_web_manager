import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';

const Wrapper = styled.div`
  flex-grow: 1;
`;

const AppBarStyled = styled(AppBar)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  color: rgba(88, 191, 225, 0.93);
  background: rgb(255, 255, 255);
  padding: 5px 72px;
  padding-left: ${props => (props.open ? '224px' : '72px')};
  box-shadow: 0px 1px 2px -1px rgb(0 0 0 / 10%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%);
`;

const Bar = ({ children, open }) => {
  return (
    <Wrapper>
      <AppBarStyled open={open}>
        <Toolbar variant="dense">{children}</Toolbar>
      </AppBarStyled>
    </Wrapper>
  );
};

Bar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.bool.isRequired
};

Bar.defaultProps = {};

export default Bar;
