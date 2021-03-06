import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToolbarStyled = styled.div`
  display: flex;
  alignitems: center;
  jsutifycontent: flex-end;
  width: 100%;
  height: ${props => props.height}px;
`;

const Toolbar = ({ children, height }) => {
  return <ToolbarStyled height={height}>{children}</ToolbarStyled>;
};

Toolbar.propTypes = {
  children: PropTypes.string,
  height: PropTypes.string
};

Toolbar.defaultProps = {
  children: null,
  height: 48
};

export default Toolbar;
