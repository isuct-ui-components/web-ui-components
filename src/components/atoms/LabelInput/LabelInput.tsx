import React from 'react';

import './labelInput.scss';

import {Input, InputProps} from '../Input/Input';

interface LabelInputProps extends InputProps {
  /**
  * Labeled control to
  */
  labelFor?: string;
  /**
  * Label and input direction
  */
  labelDirection?: 'column' | 'row';
  /**
  * Input`s id to connect with label
  */
  labelText?: string;
}

export const LabelInput: React.FC<LabelInputProps> = ({
  labelFor,
  labelDirection,
  labelText,
  ...props
}: LabelInputProps) => {
  return(
    <>
      <label htmlFor={labelFor} className={['storybook-label', `storybook-label--${labelDirection}`, `storybook-label--${props.size}`].join(' ')}>{labelText}
        <Input id={labelFor} {...props} />
      </label>
    </> 
  )
}
