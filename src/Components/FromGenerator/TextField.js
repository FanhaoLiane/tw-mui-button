import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';


const classes = {
  input: {
    root: 'flex bg-primary-300 px-3 py-0 rounded-[3px] border border-primary-200 border-solid',
    size: {
      large: 'h-12 min-h-[48px]', // default
      medium: 'h-10 min-h-[40px]',
      small: 'h-8 min-h-[32px]',
    },
    focus: 'border border-primary-200 border-solid shadow-input',
    hover: 'border border-primary-200 border-solid',
    disabled: 'text-white opacity-50 cursor-not-allowed',
    error: 'border border-failed-light border-solid',
    base: 'text-ellipsis',
    password: 'h-[19px] text-base font-normal p-0',
    readOnly: 'cursor-pointer'
  },
  inputMultiline: {
    height: '146px',
  },
}

export default function TextField(props) {
  const { id, InputLabelProps, InputProps, inputProps, className, disabled, multiline, size, readOnly, onFocus, onBlur, ...rest } = props;
  // for overwriting the id in inputProps (Autocomplete)
  if (id) {
    inputProps.id = id;
  }
  const [focused, setFocused] = React.useState(false);
  const [isTargetArea, setIsTargetArea] = React.useState(false);

  const handleFocus = () => {
    if (focused === false) {
      setFocused(true);
      onFocus && onFocus();
    }
  };

  const handleBlur = () => {
    if (isTargetArea === false) {
      setFocused(false);
      onBlur && onBlur();
    }
  };

  return (
    <div // for solving clicking endAdornment would trigger onBlur
      tabIndex={disabled ? undefined : 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={() => setIsTargetArea(true)}
      onMouseLeave={() => setIsTargetArea(false)}
    >
      <InputBase id={id}
        // inputProps and InputProps before className for style overwriting
        inputProps={{ ...inputProps, 'aria-label': id }}
        {...InputProps}
        classes={{
          root: `${classes.input.root} ${classes.input.size[size]} ${readOnly && classes.input.readOnly} ${className}`,
          input: `${inputProps.type === 'password' && classes.input.password} ${classes.input.base}`,
          focused: classes.input.focus,
          disabled: classes.input.disabled,
          error: classes.input.error,
        }}
        readOnly={readOnly}
        disabled={disabled}
        multiline={multiline}
        {...rest}
      />
    </div>
  );
}

TextField.defaultProps = {
  size: 'large',
};

TextField.propTypes = {
  // custom
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // other props: https://v4.mui.com/zh/api/text-field/
};
