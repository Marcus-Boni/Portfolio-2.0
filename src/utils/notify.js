import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function notifyError(error) {
  toast.error(error);
}

export function notifySuccess(message) {
  toast.success(message);
}
