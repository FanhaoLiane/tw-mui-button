import React from 'react';
import PropTypes from 'prop-types';
import MuiAutocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';

import FormControl from './FormControl';
import TextField from './TextField';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';

const classes = {
  root: 'text-white w-full p-1 flex gap-3 normal-case',
  option: {
    root: 'text-white ',
    disable: 'hover:bg-sky-700',
    disableHover: '',
    withLabel: '',
  },
  autoComplete: {
    root: '',
  },
  optionHelperText: {

  },
  dropDownIcon: {
    root: '',
    focus: '',
  }
}


export default function AutoComplete(props) {
  const { id, placeholder, hidden, errorText, helpText, label, isRequired, selectList, disabled, defaultValue, onChange, className, value, disableClearable, size, disableSearch, onFocus, onBlur } = props;
  // TODO: add validator, showError, onCreate, disableCreate, , showTotalOnly, fixHeight

  const [open, setOpen] = React.useState(false);

  const finalClasses = `${classes.root} ${className}`
  const popupIconClasses = `${classes.dropDownIcon.root} ${open && classes.dropDownIcon.focus}`

  const handleDropdown = () => {
    setOpen(!open);
  };

  const handleIsOptionEqualToValue = (option, value) => {
    return option?.value === value?.value;
  }

  return (
    <FormControl
      className={finalClasses}
      disabled={disabled}
      hidden={hidden}
      required={isRequired}
      label={label}
      helperText={errorText ?? helpText}
      // TODO: set error state
      // error={error || Boolean(errorText)}
    >
      <MuiAutocomplete
        id={id}
        open={open}
        classes={{
          root: classes.autoComplete.root,
          paper: 'bg-primary-300 border-primary-200 border-solid border my-2 px-1.5 py-2 text-white',
          option: 'my-1.5 p-0 rounded-md cursor-pointer',
          endAdornment: '',
          popupIndicator: '',
          clearIndicator: '',
          inputRoot: 'text-white',
        }}
        popupIcon={<ExpandMoreIcon className={popupIconClasses} />}
        clearIcon={<ClearIcon className='' />}
        forcePopupIcon={true}
        disabled={disabled}
        disableClearable={disableClearable}
        selectOnFocus
        handleHomeEndKeys
        clearOnBlur
        openOnFocus
        autoHighlight
        value={value}
        defaultValue={defaultValue}
        clearText=""
        closeText=""
        openText=""
        onOpen={handleDropdown}
        onClose={handleDropdown}
        onChange={onChange}
        options={selectList}
        isOptionEqualToValue={handleIsOptionEqualToValue}
        renderInput={params => (
          <TextField
            id={`${id}-input`}
            disabled={disabled}
            size={size}
            placeholder={placeholder}
            readOnly={disableSearch}
            onFocus={onFocus}
            onBlur={onBlur}
            {...params}
          />
        )}
      />
    </FormControl>
  );
}

AutoComplete.defaultProps = {
  disableSearch: false,
  disableCreate: false,
  disableCloseOnSelect: false,
  showError: false,
  disableClearable: false,
  showTotalOnly: false,
  fixHeight: false,
  size: 'large',
}

AutoComplete.propTypes = {
  // item start
  id: PropTypes.string.isRequired,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  showError: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['autoComplete', 'dropDownList', 'singleSelect', 'dropDownWithSearch', 'multiSelectDropDown', 'multiSelectDropDownWithSearch', 'multiSelect']).isRequired,
  selectList: PropTypes.arrayOf(PropTypes.object),
  errorText: PropTypes.node,
  // item end
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func,
  disableCreate: PropTypes.bool,
  disableCloseOnSelect: PropTypes.bool,
  disableClearable: PropTypes.bool,
  showTotalOnly: PropTypes.bool,
  fixHeight: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disableSearch: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
