// use for call back
export const onSagaSuccess = (action, data, next) => {
  if (action.payload.callbacks) {
    if (action.payload.callbacks.onSuccess) {
      action.payload.callbacks.onSuccess(data);
    }
  }
  return next;
};

export const onSagaFailed = (action, data, next) => {
  if (action.payload.callbacks) {
    if (action.payload.callbacks.onFailed) {
      action.payload.callbacks.onFailed(data);
    }
  }
  return next;
};
