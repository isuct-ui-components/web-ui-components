import React from 'react';
import './input.scss';

export interface InputProps {
    id?: string;
    placeholderText?: string;
    /**
     * Input`s name for using in the form
     */
    name?: string;
    /**
     * Is the input disabled or not
     */
    disabled?: boolean;
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
    /**
     * 
     * @returns text from input to input`s value attribute
     */
    onChange: () => void;
}

export const Input: React.FC<InputProps> = ({...props}: InputProps) => {
  return(
    <>
      <input className={['storybook-input', `storybook-input--${props.size}`, `storybook-input--${props.borderRadius}`].join(' ')} placeholder={props.placeholderText} type={props.type} disabled={props.disabled} name={props.name} maxLength={props.maxLenght} required={props.required} defaultValue={props.value} readOnly={props.readOnly}
      />
    </>
  );
}
