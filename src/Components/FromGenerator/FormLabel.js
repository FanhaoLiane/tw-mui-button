import React from 'react';
import PropTypes from 'prop-types';
import MuiFormLabel from '@mui/material/FormLabel';

const ROOT_STYLE = 'text-white flex gap-1 text-sm font-bold';

export default function FormLabel(props) {
  const { disable, error, required, children, className } = props;
  const finalClasses = `${ROOT_STYLE} ${className}`
  return (
    <MuiFormLabel
      className={finalClasses}
      required={required}
      disabled={disable}
      error={error}
      classes={{
        asterisk: 'text-primary-500',
        error: 'text-warning-100',
      }}
    >
      {children}
    </MuiFormLabel>
  );
}

FormLabel.defaultProps = {
  disable: false,
  error: false,
  required: false,
};

FormLabel.propTypes = {
  disable: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.string.isRequired,
};