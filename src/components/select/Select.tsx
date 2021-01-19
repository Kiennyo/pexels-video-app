import React, { useState } from 'react';
import * as Material from '@material-ui/core';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  id: string;
  helperText?: string;
};

const Select = (props: SelectProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.onChange(value);
    setValue(event.target.value as string);
  };

  return (
    <>
      {props.label && <Material.InputLabel id={`${props.id}-select-label`}>{props.label}</Material.InputLabel>}
      <Material.Select labelId={`${props.id}-select-label`} id={`${props.id}`} value={value} onChange={handleChange}>
        {props.options.map((option) => (
          <Material.MenuItem value={option.value} key={option.value}>
            {option.label}
          </Material.MenuItem>
        ))}
      </Material.Select>
      {props.helperText && <Material.FormHelperText>{props.helperText}</Material.FormHelperText>}
    </>
  );
};

export default Select;
