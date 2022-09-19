import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { styled } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const LoadingButtonStyled = styled(LoadingButton)((props) => {
  const { variant, color, theme } = props;
  if (variant === 'text') {
    if (color === 'error') {
      return {};
    }
  }

  return {};
});

const StyledButton = (props) => {
  const { children, style, secondary, className, isSmallBtn, ...rest } = props;
  const classes = useStyles();

  return (
    <LoadingButtonStyled
      variant="contained"
      sx={{
        textTransform: 'initial',
        ...style,
      }}
      className={classNames(classes.root, className)}
      {...rest}
    >
      {children}
    </LoadingButtonStyled>
  );
};

export default StyledButton;
