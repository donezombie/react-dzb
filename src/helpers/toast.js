import { toast } from 'react-toastify';

export const showError = (msg) => {
  toast.error(msg);
};

export const showSuccess = (msg) => {
  toast.success(msg);
};
