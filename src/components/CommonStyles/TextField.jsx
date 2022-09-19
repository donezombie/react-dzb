import React from 'react';
import { TextField as TextFieldMui } from '@mui/material';
import { styled } from '@mui/styles';

const CustomTextField = styled(TextFieldMui)({
//   '& label.Mui-focused': {
//     color: theme.palette.primary.main,
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'green',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: theme.custom.common.white,
//     },
//     '&:hover fieldset': {
//       borderColor: theme.custom.common.white,
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: theme.palette.primary.main,
//     },
//   },
});

const TextField = (props) => {
  return (
    <CustomTextField
      autoComplete="off"
      InputProps={{
        autoComplete: 'off',
      }}
      {...props}
    />
  );
};

export default React.memo(TextField);
