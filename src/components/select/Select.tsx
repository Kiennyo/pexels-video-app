import React, { useEffect, useState } from 'react';
import * as Material from '@material-ui/core';

type SelectOption<T extends number | string> = {
  value: T;
  label: string;
  disabled?: boolean;
};

export type SelectProps<T extends number | string> = {
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
      {label && (
        <Material.InputLabel data-testid={`${id}-select-label-test-id`} id={`${id}-select-label`}>
          {label}
        </Material.InputLabel>
      )}
      <Material.Select
        className={className}
        data-testid={`${id}-test-id`}
        id={`${id}-select`}
        labelId={label ? `${id}-select-label` : undefined}
        value={internalValue || ''}
        variant={variant}
        onChange={handleChange}
      >
        {options.map((option, idx) => (
          <Material.MenuItem
            data-testid={`${id}-select-item-${idx}-test-id`}
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </Material.MenuItem>
        ))}
      </Material.Select>
      {helperText && <Material.FormHelperText data-testid={`${id}-select-helper-text`}>{helperText}</Material.FormHelperText>}
    </>
  );
};

export default Select;
