import React from 'react';
import PropTypes from 'prop-types';
import MuiFormLabel from '@mui/material/FormLabel';

export default function FormLabel(props) {
  const { disable, error, required, children, className } = props;

  return (
    <MuiFormLabel
      className={className}
      required={required}
      disabled={disable}
      error={error}
      focused
      classes={{
        root: 'text-white flex gap-1 text-sm font-bold',
        asterisk: 'text-primary-500',
        error: 'text-warning-100',
        filled: 'text-white',
      }}
      // TODO: find other way to overwrite the style
      sx={[
        {
          '&.Mui-focused': {
            color: 'white',
          },
        },
      ]}
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