import React from 'react';
import PropTypes from 'prop-types';
import MuiFormControl from '@mui/material/FormControl';

import FormLabel from './FormLabel';
import FormHelperText from './FormHelperText';

const DISABLE_STYLE = 'opacity-50';
const ROOT_STYLE = 'text-white w-full p-1 flex gap-3 normal-case';

export default function FormControl(props) {
  const { disable, hidden, required, label, helperText, errorText, error, children, className, ...others } = props;
  const finalClasses = `${ROOT_STYLE} ${disable && DISABLE_STYLE} ${className}`
  return (
    <MuiFormControl
      disabled={disable}
      hidden={hidden}
      required={required}
      error={error}
      className={finalClasses}
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
