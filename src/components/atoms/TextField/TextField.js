import React from 'react';
import { TextField as TextFields } from '@material-ui/core';

export const TextField = (id, label, err) => (
  <TextFields id={id} label={label} error={err} />
);

export const NumberField = (id, label, err) => (
  <TextFields
    id={id}
    label={label}
    error={err}
    type="number"
    InputLabelProps={{
      shrink: true
    }}
    InputProps={{ inputProps: { min: 0 } }}
  />
);

export const ReadOnlyField = (id, label, value, err) => (
  <TextFields
    id={id}
    label={label}
    error={err}
    defaultValue={value}
    InputProps={{
      readOnly: true
    }}
  />
);

export const PasswordField = (id, label, err) => (
  <TextFields
    id={id}
    label={label}
    error={err}
    type="password"
    autoComplete="current-password"
  />
);

export const SearchField = (id, label, err) => (
  <TextFields id={id} label={label} error={err} type="search" />
);
