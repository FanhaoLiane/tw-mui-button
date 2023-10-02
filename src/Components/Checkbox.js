import React from 'react';
import PropTypes from 'prop-types';
import MuiCheckbox from '@mui/material/Checkbox';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ROOT_STYLE= 'text-white';

export default function Checkbox(props) {
  const { size, className, ...other } = props;
  const finalClasses = `${ROOT_STYLE} ${className}`;
  return (
    <MuiCheckbox
      // do NOT change the order of props, classes.root needs to overwrite the props from parent
      {...other}
      className={finalClasses}
      icon={size === 'medium' ? <CheckBoxOutlineBlankIcon /> : <CheckBoxOutlineBlankIcon />}
      checkedIcon={size === 'medium' ? <CheckBoxIcon /> : <CheckBoxIcon />}
      // indeterminateIcon={size === 'medium' ? <CheckIndeterminateMediumIcon /> : <CheckIndeterminateSmallIcon />}
      color="default"
    />
  );
}

Checkbox.defaultProps = {
  size: 'small',
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string,
};