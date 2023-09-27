import React from 'react';
import PropTypes from 'prop-types';

import AutoComplete from './Autocomplete';

export default function DropDownList(props) {
  const { className, ...others } = props;

  return (
    <AutoComplete
      className={className}
      disableSearch
      disableCreate
      {...others}
    />
  );
}

DropDownList.defaultProps = {
  size: 'large',
};

DropDownList.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};