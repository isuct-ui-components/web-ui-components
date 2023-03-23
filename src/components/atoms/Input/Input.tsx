import React from 'react';
import './input.scss';

interface InputProps {
    /**
     * Label text
     */
    labelText?: string;
    /**
     * Labeled control to
     */
    labelFor?: string,
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
    size?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Input = ({
  placeholderText = 'example',
  inactive = false,
  required = false,
  readOnly = false,
  name,
  type,
  value,
  labelText,
  labelFor,
  size,
  maxLenght,
  ...props
}: InputProps) => {
  if(labelText) {
    return(
      <div className='storybook-input__container'>
        <label htmlFor={labelFor} className='storybook-label'> {labelText} </label>
        <input className={['storybook-input', `storybook-input--${size}`].join(' ')} placeholder={placeholderText} type={type} maxLength={maxLenght} disabled={inactive} id={labelFor} name={name} required={required} value={value} readOnly={readOnly} {...props}
        />
      </div>
    );
  }
  else {
    return(
      <input className={['storybook-input', `storybook-input--${size}`].join(' ')} placeholder={placeholderText} type={type} disabled={inactive} name={name} maxLength={maxLenght} required={required} value={value} readOnly={readOnly} {...props}
      />
    );
  }
}
