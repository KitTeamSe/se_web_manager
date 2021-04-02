import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Toolbar from '../Toolbar/Toolbar';

const Main = styled.main`
  overflow-x: hidden;
  flex-grow: 1;
  margin: 0 72px;
  margin-left: ${props => (props.open ? 260 : 72)}px;
  padding: 8px;
`;

const ContainerStyled = styled(Container)``;

const ContentContainer = ({ children, open }) => {
  return (
    <Main open={open}>
      <ContainerStyled>
        <Toolbar height="72" />
        {children}
      </ContainerStyled>
    </Main>
  );
};

ContentContainer.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }).isRequired,
  open: PropTypes.bool.isRequired
};

ContentContainer.defaultProps = {};

export default ContentContainer;
