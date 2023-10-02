import React from 'react';
import PropTypes from 'prop-types';
import MuiFormControl from '@mui/material/FormControl';

import FormLabel from './FormLabel';
import FormHelperText from './FormHelperText';

const classes = {
  root: 'text-white w-full p-1 flex gap-3 normal-case',
  disable: 'opacity-50',
  hidden: 'hidden',
}

export default function FormControl(props) {
  const { disable, hidden, required, label, helperText, errorText, error, children, className, ...others } = props;

  return (
    <MuiFormControl
      disabled={disable}
      required={required}
      error={error}
      className={className}
      classes={{
        root: `${classes.root} ${disable && classes.disable} ${hidden && classes.hidden}`,
      }}
      {...others}
    >
      {label && <FormLabel required={required} error={error} disable={disable}>{label}</FormLabel>}
      {children}
      {helperText && <FormHelperText
        helperText={helperText}
        errorText={errorText}
        error={error}
        disable={disable}
      />}
    </MuiFormControl>
  );
}

FormControl.defaultProps = {
  disable: false,
  hidden: false,
  required: false,
  error: false,
};

FormControl.propTypes = {
  disable: PropTypes.bool,
  hidden: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
};
