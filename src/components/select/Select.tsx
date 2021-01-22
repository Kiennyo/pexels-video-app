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
  variant?: 'standard' | 'outlined' | 'filled';
  className?: string;
  value?: T;
};

const Select = <T extends number | string>({
  onChange,
  id,
  helperText,
  label,
  options,
  variant = 'outlined',
  className,
  value,
}: SelectProps<T>) => {
  const [internalValue, setInternalValue] = useState<T | undefined>(value);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const inputValue = event.target.value as T;
    onChange(inputValue);
    setInternalValue(inputValue);
  };

  useEffect(() => {
    if (value) {
      setInternalValue(value);
    }
  }, [value]);

  return (
    <>
      {label && <Material.InputLabel id={`${id}-select-label`}>{label}</Material.InputLabel>}
      <Material.Select
        className={className}
        id={`${id}`}
        labelId={`${id}-select-label`}
        value={internalValue || ''}
        variant={variant}
        onChange={handleChange}
      >
        {options.map((option) => (
          <Material.MenuItem key={option.value} value={option.value}>
            {option.label}
          </Material.MenuItem>
        ))}
      </Material.Select>
      {helperText && <Material.FormHelperText>{helperText}</Material.FormHelperText>}
    </>
  );
};

export default Select;
