import React from 'react';
import * as Material from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

type TypographyProps = {
  variant: Variant;
  children: string;
};

const Typography = ({ variant, children }: TypographyProps) => (
  <Material.Typography variant={variant}>{children}</Material.Typography>
);

export default Typography;
