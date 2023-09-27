import React from 'react';
import Button from '@mui/material/Button';

const SIZE_STYLE = {
    small: 'px-2.5 text-xs',
    large: 'px-3 text-sm',
};

const TYPE_STYLE = {
    error: 'bg-warning-light hover:bg-warning-dark',
    warning: 'bg-alert-light hover:bg-alert-500',
    success: 'bg-green-400 hover:bg-green-500',
    info: 'bg-primary-100 hover:bg-primary-200',
};

const STATUS_STYLE = {
    filled: '',
    outlined: '',
    text: 'bg-transparent'
};

const ROOT_STYLE = 'text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 normal-case';

export default function CustomButton(props) {
    const { children, size, type, status, className } = props;
    const finalClasses = `${SIZE_STYLE[size]} ${TYPE_STYLE[type]} ${STATUS_STYLE[status]}} ${ROOT_STYLE} ${className}`
    return (
        <Button
            className={finalClasses}
        >
            {children}
        </Button>
    );
}

