import React from 'react';
import PropTypes from 'prop-types';
import { Popover as Popovers } from '@material-ui/core';

const Popover = ({ anchor, setAnchor, children, type }) => {
  const open = Boolean(anchor);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchor(null);
  };

  if (type === 'signin')
    return (
      <Popovers
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {children}
      </Popovers>
    );
  return (
    <Popovers id={id} open={open} anchorEl={anchor} onClose={handleClose}>
      {children}
    </Popovers>
  );
};

Popover.propTypes = {
  anchor: PropTypes.bool.isRequired,
  setAnchor: PropTypes.func.isRequired,
  children: PropTypes.shape({ root: PropTypes.string }),
  type: PropTypes.string
};

Popover.defaultProps = {
  children: null,
  type: null
};

export default Popover;
