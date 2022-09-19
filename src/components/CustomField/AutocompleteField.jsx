import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import get from "lodash/get";
import { FieldInputProps, FormikProps } from "formik";
import MessageError from "./MessageError";

const AutocompleteField = ({
  field,
  form,
  options,
  ...props
}) => {
  //! State
  const { onBlur, value, name } = field;
  const { errors, touched } = form || {};

  const errorMsg = get(errors, name);
  const isTouched = get(touched, name);
  const isShowMsg = isTouched && !!errorMsg;

  //! Function
  const onChange = (
    event,
    selection
  ) => {
    form.setFieldValue(name, selection);
  };

  //! Render
  return (
    <Autocomplete
      id={name}
      sx={{ color: "black" }}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      options={options}
      renderInput={(params) => (
        <TextField
          label={props.label}
          value={value}
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
            id: name,
          }}
          error={isTouched && !!errorMsg}
          helperText={
            isShowMsg && (
              <MessageError isShow={isShowMsg}>{errorMsg}</MessageError>
            )
          }
        />
      )}
      {...props}
    />
  );
};

export default AutocompleteField;
