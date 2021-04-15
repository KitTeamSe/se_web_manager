import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogInputContents from '../../atoms/Dialog/DialogInputContents';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import DialogButtons from '../../atoms/Dialog/DialogButtons';

const TextFieldStyled = styled(TextField)`
  margin: 0 1rem 0 1rem;
`;
const MenuCreateDialog = ({ title, items, open, handleClose, onChange }) => {
  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      {items.map(item => (
        <TextFieldStyled
          onChange={onChange}
          name={item.name}
          label={item.label}
          value={item.value}
        />
      ))}
      <DialogButtons handleClose={handleClose} add />
    </Dialog>
  );
};

export default MenuCreateDialog;

// import React from 'react';
// import styled from 'styled-components';

// const DialogTitleStyled = styled(DialogTitle)`
//   padding: 16px 24px 0 24px;
// `;

// const AddDialog = ({ title, item, open, setOpen }) => {
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Dialog open={open}>
//       <DialogTitleStyled>{title} 추가</DialogTitleStyled>
//       <DialogInputContents item={item} />
//       <DialogButtons handleClose={handleClose} add />
//     </Dialog>
//   );
// };

MenuCreateDialog.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

MenuCreateDialog.defaultProps = {
  handleClose: null,
  title: '',
  items: [],
  open: false
};

// export default AddDialog;
