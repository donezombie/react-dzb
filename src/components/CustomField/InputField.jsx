import React, { Fragment, useState } from "react";
import get from "lodash/get";
import MessageError from "./MessageError";
import CommonStyles from "components/CommonStyles";
import { IconButton, InputAdornment } from "@mui/material";
import CommonIcons from "components/CommonIcons";

const InputField = (props) => {
  const {
    type,
    label,
    disabled,
    onKeyDown,
    className,
    size,
    fullWidth = false,
    field,
    form,
    showHidePasswordMode,
    multiline,
    InputProps,
    sx,
    isNumber,
    placeholder,
  } = props;

  const { onChange, onBlur, value, name } = field;
  const { errors, touched } = form || {};
  const [showPassword, setShowPassword] = useState(
    showHidePasswordMode ? false : true
  );

  const errorMsg = get(errors, name);
  const isTouched = get(touched, name);
  const isShowMsg = isTouched && !!errorMsg;

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (
    event
  ) => {
    event.preventDefault();
  };

  const typeInput = () => {
    if (showHidePasswordMode) {
      if (showPassword) {
        return type;
      }

      return "password";
    }

    return type;
  };

  //! Render
  return (
    <Fragment>
      <CommonStyles.TextField
        fullWidth={fullWidth}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        type={typeInput()}
        id={name}
        name={name}
        label={label}
        value={value}
        disabled={disabled}
        onKeyDown={onKeyDown}
        size={size}
        error={isShowMsg}
        multiline={multiline}
        placeholder={placeholder}
        sx={sx}
        InputProps={{
          inputComponent: isNumber ? CommonStyles.NumberFormat : undefined,
          endAdornment: showHidePasswordMode && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <CommonIcons.VisibilityOff /> : <CommonIcons.Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          ...InputProps,
        }}
        helperText={
          isShowMsg && (
            <MessageError isShow={isShowMsg}>{errorMsg}</MessageError>
          )
        }
      />
    </Fragment>
  );
};

export default InputField;
