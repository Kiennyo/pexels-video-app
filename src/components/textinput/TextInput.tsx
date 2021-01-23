import React, { ChangeEvent, ReactNode, useState } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';

type TextInputProps = {
  id: string;
  label?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  icon?: ReactNode;
  onChange: (value: string) => void;
  className?: string;
  placeHolder?: string;
};

const TextInput = ({ variant = 'standard', icon, label, id, onChange, className, placeHolder }: TextInputProps) => {
  const [value, setValue] = useState('');

  const getInputProps = () => ({
    ...(icon && {
      InputProps: {
        startAdornment: (
          <InputAdornment data-testid={`${id}-icon-test-id`} position="start">
            {icon}
          </InputAdornment>
        ),
      },
    }),
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const eventValue = event.target.value;
    onChange(eventValue);
    setValue(eventValue);
  };

  return (
    <TextField
      className={className}
      data-testid={`${id}-input-test-id`}
      id={`${id}-input`}
      label={label}
      placeholder={placeHolder}
      value={value}
      variant={variant}
      onChange={handleChange}
      {...getInputProps()}
    />
  );
};

export default TextInput;
