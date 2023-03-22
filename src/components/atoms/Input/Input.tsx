import React from 'react';
import './input.scss';

interface InputProps {
    /**
     * Placeholder text
     */
    placeholderText?: string;
    /**
     * Input`s name for using in the form
     */
    name?: string;
    /**
     * Is the input disabled or not
     */
    inactive: boolean;
    /**
     * Is the input in read only mode
     */
    readOnly?: boolean;
    /**
     * Is the input required to fill
     */
    required?: boolean;
    /**
     * Initial value
     */
    value?: string;
    /**
     * Type of input (text, hidden, password, color, date, tel, etc)
     */
    type?: string;
    /**
     * MaxLenght
     */
    maxLenght?: number;
    /**
     * Input`s size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Input`s border radius
     */
    borderRadius?: string,
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Input = ({
  placeholderText,
  inactive = false,
  required = false,
  readOnly = false,
  name,
  type,
  value,
  size,
  borderRadius,
  maxLenght
}: InputProps) => {
  return(
    <input className={['storybook-input', `storybook-input--${size}`, `storybook-input--${borderRadius}`].join(' ')} placeholder={placeholderText} type={type} disabled={inactive} name={name} maxLength={maxLenght} required={required} value={value} readOnly={readOnly}
    />
  );
}
