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

const Select = <T extends number | string>(props: SelectProps<T>) => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    if (value) {
      props.onChange(value as T);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as T);
  };

  return (
    <>
      {props.label && <Material.InputLabel id={`${props.id}-select-label`}>{props.label}</Material.InputLabel>}
      <Material.Select labelId={`${props.id}-select-label`} id={`${props.id}`} value={value || ''} onChange={handleChange}>
        {props.options.map((option) => (
          <Material.MenuItem value={option.value} key={option.value} defaultValue="">
            {option.label}
          </Material.MenuItem>
        ))}
      </Material.Select>
      {props.helperText && <Material.FormHelperText>{props.helperText}</Material.FormHelperText>}
    </>
  );
};

export default Select;
