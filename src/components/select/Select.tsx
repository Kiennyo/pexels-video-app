import React, { useState } from 'react';
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
  variant?: 'standard' | 'outlined' | 'filled';
  className?: string;
};

const Select = <T extends number | string>({
  onChange,
  id,
  helperText,
  label,
  options,
  variant = 'outlined',
  className,
}: SelectProps<T>) => {
  const [value, setValue] = useState<T>();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const inputValue = event.target.value as T;
    onChange(inputValue);
    setValue(inputValue);
  };

  return (
    <>
      {label && <Material.InputLabel id={`${id}-select-label`}>{label}</Material.InputLabel>}
      <Material.Select
        className={className}
        id={`${id}`}
        labelId={`${id}-select-label`}
        value={value || ''}
        variant={variant}
        onChange={handleChange}
      >
        {options.map((option) => (
          <Material.MenuItem defaultValue="" key={option.value} value={option.value}>
            {option.label}
          </Material.MenuItem>
        ))}
      </Material.Select>
      {helperText && <Material.FormHelperText>{helperText}</Material.FormHelperText>}
    </>
  );
};

export default Select;
