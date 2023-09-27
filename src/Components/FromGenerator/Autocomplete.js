import React from 'react';
import PropTypes from 'prop-types';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


import FormControl from './FormControl';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';

const ROOT_STYLE = 'text-white w-full p-1 flex gap-3 normal-case';
const DISABLE_STYLE = 'opacity-50';

const INPUT_STYLE = 'bg-primary-200';
const INPUT_SIZE = {
  small: 'h-8',
  medium: 'h-10',
  large: 'h-12',
};

const DISABLE_CLEARABLE_STYLE = 'cursor-default';
const SINGLELINE_INPUT_STYLE = 'h-8';
const MULTIPLE_INPUT_STYLE = 'h-12';

// const OPTION_STYLE = 'flex justify-between items-center text-xs';
// const OPTION_DISABLED_HOVER = 'transparent hover:bg-primary-800';
// const OPTION_WITH_LABEL_STYLE = 'text-white';
// const OPTION_SELECTED_STYLE = 'bg-primary-800';
// const OPTION_FOCUSED_STYLE = 'bg-primary-800';
// const OPTION_HELPER_TEXT_STYLE = 'flex gap-2 items-center text-xs';
// const OPTION_HELPER_TEXT_ERROR_STYLE = 'text-error-500';

// const MENU_ITEM_STYLE = 'flex gap-2 items-center text-xs';

// const CHECK_ICON_STYLE = 'text-white';
// const CHECK_ICON_HIDDEN_STYLE = 'display-none';

const DROPDOWN_ICON_STYLE = 'text-white';
const DROPDOWN_ICON_FOCUS_STYLE = 'text-primary-500';

// const classes = {
//   root: '',
//   option: {
//     root: '',
//     disable: '',
//     disableHover: '',
//     withLabel: '',
//   },
//   optionHelperText: {

//   },
// }

const OPTION_TYPE = {
  EMPTY: 'empty',
  HELPER_TEXT: 'helpText',
  CREATE_CHIP: 'createChip',
};

export default function AutoComplete(props) {
  const { id, placeholder, hidden, errorText, helpText, showError, label, isRequired, validator, selectList, disabled, defaultValue, onChange, onCreate, disableCreate, multiple, className, value, disableClearable, size, showTotalOnly, fixHeight, disableSearch, onFocus, onBlur } = props;

  const [error, setError] = React.useState(false);
  const [inputHelperText, setInputHelperText] = React.useState(helpText);
  const [hoverOption, setHoverOption] = React.useState(null);
  const [optionsHelperText, setOptionsHelperText] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const finalClasses = `${ROOT_STYLE} ${disabled && DISABLE_STYLE} ${className}`
  const popupIconClasses = `${DROPDOWN_ICON_STYLE} ${open && DROPDOWN_ICON_FOCUS_STYLE}`

  const handleDropdown = () => {
    if (!open) {
      setHoverOption(null);
    }
    if (open) {
      setOptionsHelperText('');
    }
    setOpen(!open);
  };

  return (
    <FormControl
      className={finalClasses}
      disabled={disabled}
      hidden={hidden}
      required={isRequired}
      label={label}
      helperText={errorText ?? inputHelperText}
      error={error || Boolean(errorText)}>
      <MuiAutocomplete
        id={id}
        multiple={multiple}
        disableCloseOnSelect={multiple}
        open={open}
        classes={{
          root: 'border-0',
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
        renderInput={params => <TextField {...params} />}
      />
    </FormControl>
  );
}

AutoComplete.defaultProps = {
  disableSearch: false,
  disableCreate: false,
  disableCloseOnSelect: false,
  multiple: false,
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
  multiple: PropTypes.bool,
  disableClearable: PropTypes.bool,
  showTotalOnly: PropTypes.bool,
  fixHeight: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disableSearch: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
