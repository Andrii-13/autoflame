import { styled } from '@mui/system';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

export const StyledSelect = styled(Select)(({ theme }) => ({
  height: 38,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: 'red', // Зміна кольору мітки
    fontSize: '16px',
    fontWeight: 'normal',
    top: '50%',
    transform: 'translateY(-50%)', // Центрування мітки по вертикалі
    transition: 'top 0.3s, transform 0.3s, font-size 0.3s', // Плавний перехід
  },
  '& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-shrink': {
    top: '0',
    transform: 'translate(10%, -60%)', // Переміщення мітки вгору при фокусі або виборі значення
    fontSize: '12px',
    color: 'brown', // Колір мітки при фокусі
    backgroundColor: 'white',
    width: '80px',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'green', // Колір рамки за замовчуванням
    },
    '&:hover fieldset': {
      borderColor: 'greenyellow', // Колір рамки при ховері
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange', // Колір рамки при фокусі
      paddingLeft: '8px', // Збільшення відступу лівого розриву
    },
  },
}));

export const CenteredInputLabel = styled(InputLabel)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
}));
