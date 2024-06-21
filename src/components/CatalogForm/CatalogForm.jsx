import React from 'react';
import Select from 'react-select';
import { CatalogFormStyle } from './CatalogForm.styled';
import { optionsProduct } from 'helpers/catalogFormOption';
import { useQueryLocation } from 'helpers/queryLocation';
import MuiSelect from 'components/SelectMui/SelectMui';

export const CatalogForm = ({ handleChangeProduct, handleChangeWorksMui }) => {
  const queryUrlLocation = useQueryLocation();
  const selectedProductValue = queryUrlLocation.get('product');

  // Знаходимо відповідні об'єкти для react-select

  const defaultProductValue = optionsProduct.find(
    option => option.value === selectedProductValue
  );

  return (
    <CatalogFormStyle>
      <MuiSelect handleChangeWorksMui={handleChangeWorksMui} />

      <Select
        options={optionsProduct}
        defaultValue={defaultProductValue}
        placeholder="Види продукту"
        onChange={handleChangeProduct}
      />
    </CatalogFormStyle>
  );
};
