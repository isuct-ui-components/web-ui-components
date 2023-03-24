import React from 'react';

import './labelInput.scss';

import {Input, InputProps} from '../Input/Input';

interface LabelInputProps extends InputProps {
  /**
  * Label and input direction
  */
  labelDirection?: 'column' | 'row';
  /**
  * Label text
  */
  labelText?: string;
}

export const LabelInput: React.FC<LabelInputProps> = ({
  labelDirection,
  labelText,
  ...props
}: LabelInputProps) => {
  return(
    <>
      <label className={['storybook-label', `storybook-label--${labelDirection}`, `storybook-label--${props.size}`].join(' ')}>{labelText}
        <Input {...props}/>
      </label>
    </> 
  )
}
