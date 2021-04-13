import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { RemoveCircleOutline } from '@material-ui/icons';
import { arrowIconSize } from './iconSize';

const DeleteIconStyles = styled(RemoveCircleOutline)`
  ${arrowIconSize}
`;

const DeleteIcon = () => {
  return <DeleteIconStyles />;
};

DeleteIcon.propTypes = {};

DeleteIcon.defaultProps = {};

export default DeleteIcon;
