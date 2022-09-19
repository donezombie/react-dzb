import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { get } from "lodash";

const SelectField = (props) => {
  //! State
  const {
    label,
    disabled,
    className,
    field,
    form,
    afterOnChange,
    options,
    sx,
    fullWidth = true,
  } = props;
  const { onChange, onBlur, value, name } = field;
  const { errors, touched } = form || {};

  const errorMsg = get(errors, name);
  const isTouched = get(touched, name);
  const isShowMsg = isTouched && !!errorMsg;

  //! Function
  const handleChange = (e) => {
    onChange(e);
    if (afterOnChange) {
      afterOnChange(e);
    }
  };

  //! Render
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name}
        id={name}
        name={name}
        value={value}
        label={label}
        onChange={handleChange}
        onBlur={onBlur}
        className={className}
        disabled={disabled}
        sx={sx}
      >
        {(options || []).map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {isShowMsg && <FormHelperText>{errorMsg}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
