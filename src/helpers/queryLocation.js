import { useLocation } from 'react-router-dom';

export const useQueryLocation = () => {
  return new URLSearchParams(useLocation().search);
};
