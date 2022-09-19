import React from "react";
import CommonStyles from "components/CommonStyles";
import { get } from "lodash";
import MessageError from "./MessageError";

const DatePickerField = (props) => {
  //! State
  const { field, form, label, afterOnChange, onAccept } = props;
  const { name, value, onBlur } = field || {};
  const { errors, touched } = form || {};

  const errorMsg = get(errors, name);
  const isTouched = get(touched, name);
  const isShowMsg = isTouched && !!errorMsg;

  //! Function
  const handleChange = (date, keyboardInputValue) => {
    form.setFieldValue(name, date);
    if (afterOnChange) {
      afterOnChange(date, keyboardInputValue);
    }
  };

  //! Render
  return (
    <CommonStyles.DatePicker
      label={label}
      value={value}
      onChange={handleChange}
      onAccept={onAccept}
      onBlur={onBlur}
      helperText={
        isShowMsg && <MessageError isShow={isShowMsg}>{errorMsg}</MessageError>
      }
    />
  );
};

export default DatePickerField;
