import React from 'react';
import './input.scss';

interface InputProps {
    /**
     * Label text
     */
    labelText?: string;
    /**
     * Input`s id to connect with label
     */
    id?: string;
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
    /**
     * Label and input direction
     */
    labelDirection?: 'column' | 'row';
    borderRadius?: string,
}

export const Input: React.FC<InputProps> = ({...props}: InputProps) => {
  return(
    <>
      <input className={['storybook-input', `storybook-input--${props.size}`, `storybook-input--${props.borderRadius}`].join(' ')} placeholder={props.placeholderText} type={props.type} disabled={props.disabled} name={props.name} maxLength={props.maxLenght} required={props.required} value={props.value} readOnly={props.readOnly}
      />
    </>
  );
}

export const LabelInput: React.FC<InputProps> = ({
  labelFor,
  labelDirection,
  labelText,
  ...props
}: InputProps) => {
  return(
    <>
      <label htmlFor={labelFor} className={['storybook-label', `storybook-label--${labelDirection}`, `storybook-label--${props.size}`].join(' ')}>{labelText}
        <Input id={labelFor} {...props} />
      </label>
    </> 
  )
}



