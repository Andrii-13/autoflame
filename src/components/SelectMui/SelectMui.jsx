import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {
  CenteredInputLabel,
  StyledFormControl,
  StyledSelect,
} from './SelectMui.styled';
import { useState } from 'react';

export default function MuiSelect({ handleChangeWorksMui }) {
  const [work, setWork] = useState('');

  const handleChange = event => {
    handleChangeWorksMui(event);
    setWork(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <StyledFormControl fullWidth>
        <CenteredInputLabel id="demo-simple-select-label">
          Види робіт
        </CenteredInputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={work}
          label="Work"
          onChange={handleChange}
        >
          <MenuItem value="all">Всі</MenuItem>
          <MenuItem value="external">Зовнішні роботи</MenuItem>
          <MenuItem value="internal">Внутрішні роботи</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </Box>
  );
}
