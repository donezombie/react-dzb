import { toggleDialog } from 'helpers';
import { useCallback, useState } from 'react';

const useToggleDialog = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const toggle = useCallback(() => {
    toggleDialog(open, setOpen, close, setClose);
  }, [open, close]);

  const shouldRender = open || close;

  return [open, toggle, shouldRender];
};

export default useToggleDialog;
