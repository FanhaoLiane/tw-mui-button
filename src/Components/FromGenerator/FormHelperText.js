import React from 'react';
import PropTypes from 'prop-types';
import MuiFormHelperText from '@mui/material/FormHelperText';

import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

const ROOT_STYLE = 'text-primary-200 text-sm font-medium';

export default function FormHelperText(props) {
  const { disable, error, errorText, helperText, className } = props;
  const finalClasses = `${ROOT_STYLE} ${className}`
  return (
    <MuiFormHelperText
      className={finalClasses}
      component="div"
      disabled={disable}
      error={error}
      classes={{ error: 'text-warning-light' }}
    >
      {error ? <><ErrorIcon />{errorText}</> : <><InfoIcon />{helperText}</>}
    </MuiFormHelperText>
  );
}

FormHelperText.defaultProps = {
  disable: false,
  error: false,
};

FormHelperText.propTypes = {
  disable: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
};