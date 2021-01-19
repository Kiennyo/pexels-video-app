import React, { useEffect, useState } from 'react';
import * as Material from '@material-ui/core';

type SelectOption<T extends number | string> = {
  value: T;
  label: string;
};

type SelectProps<T extends number | string> = {
  onChange: (value: T) => void;
  options: SelectOption<T>[];
  label?: string;
  id: string;
  helperText?: string;
};

const Select = <T extends number | string>({ onChange, id, helperText, label, options }: SelectProps<T>) => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    if (value) {
      onChange(value as T);
    }
  }, [value, onChange]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as T);
  };

  return (
    <>
      {label && <Material.InputLabel id={`${id}-select-label`}>{label}</Material.InputLabel>}
      <Material.Select labelId={`${id}-select-label`} id={`${id}`} value={value || ''} onChange={handleChange}>
        {options.map((option) => (
          <Material.MenuItem value={option.value} key={option.value} defaultValue="">
            {option.label}
          </Material.MenuItem>
        ))}
      </Material.Select>
      {helperText && <Material.FormHelperText>{helperText}</Material.FormHelperText>}
    </>
  );
};

export default Select;
