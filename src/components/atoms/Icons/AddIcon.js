import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { AddCircleOutline } from '@material-ui/icons';
import { arrowIconSize } from './iconSize';

const AddIconStyles = styled(AddCircleOutline)`
  ${arrowIconSize}
`;

const AddIcon = () => {
  return <AddIconStyles />;
};

AddIcon.propTypes = {};

AddIcon.defaultProps = {};

export default AddIcon;
