import { InputAdornment, TextField } from '@material-ui/core';
import React, { ReactNode } from 'react';

type TextInputProps = {
  id: string;
  label?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  icon?: ReactNode;
};

const TextInput = ({ variant = 'standard', icon, label, id }: TextInputProps) => {
  const getInputProps = () => ({
    ...(icon && {
      InputProps: {
        startAdornment: (
          <InputAdornment position="start" data-testid={`${id}-icon-test-id`}>
            {icon}
          </InputAdornment>
        ),
      },
    }),
  });
  return <TextField id={id} label={label} variant={variant} data-testid={`${id}-test-id`} {...getInputProps()} />;
};

export default TextInput;
