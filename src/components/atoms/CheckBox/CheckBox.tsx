import React from 'react';

interface CheckBoxProps {
  name?: string;
  labelText?: string;
  isChecked?: boolean;
  formId?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  ...props
}) => {
  return(
    <label>
      <input type='checkbox' disabled={ props.isDisabled } form={ props.formId } name={ props.name } value={ props.value } required={ props.isRequired } /> { props.labelText }
    </label>
  );
}
