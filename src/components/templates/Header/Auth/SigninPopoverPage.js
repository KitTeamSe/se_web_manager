import React from 'react';
import { Popover } from '@material-ui/core';
import PersonIcon from '../../../atoms/Icons/PersonIcon';
import IconButton from '../../../atoms/IconButton/IconButton';
import SigninPopover from '../../../modules/Popover/SigninPopover';

const SigninPopoverPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonIcon
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
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
        <SigninPopover handleClose={handleClose} />
      </Popover>
    </>
  );
};

export default SigninPopoverPage;
