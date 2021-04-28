import React, { useState } from 'react';
import Popover from '../../../atoms/Popover/Popover';
import PersonIcon from '../../../atoms/Icons/PersonIcon';
import IconButton from '../../../atoms/IconButton/IconButton';
import SigninPopover from '../../../modules/SigninPopover/SigninPopover';
import SignoutPopover from '../../../modules/SignoutPopover/SignoutPopover';

const AuthPopoverPage = () => {
  const [anchor, setAnchor] = useState(null);

  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonIcon variant="contained" color="primary" onClick={handleClick} />
      </IconButton>

      <Popover anchor={anchor} setAnchor={setAnchor} type="signin">
        {localStorage.getItem('token') ? (
          <SignoutPopover handleClose={handleClose} />
        ) : (
          <SigninPopover handleClose={handleClose} />
        )}
      </Popover>
    </>
  );
};

export default AuthPopoverPage;
