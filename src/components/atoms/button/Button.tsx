import React from 'react';
import './button.scss';

import {ReactComponent as Icon} from './IconForward.svg';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What is background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  arrowLeft?: boolean;
  /**
   * Button left arrow
   */
  arrowRight?: boolean;
  /**
   * Button right arrow
   */
  borderRadius? : '0px' | '4px' | '99px';
  /**
   * Button`s border radius
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  ...props
}: ButtonProps) => {
  const mode = props.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const rightArrow = props.arrowRight ? 'storybook-button--arrow-right' : undefined;
  const leftArrow = props.arrowLeft ? 'storybook-button--arrow-left' : undefined;
  return (
    <>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${props.size}`, `storybook-button--bR-${props.borderRadius}`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}>
        {props.arrowLeft && <Icon className={['storybook-button--arrow', leftArrow].join(' ')}/>}
        {props.label}
        {props.arrowRight && <Icon className={['storybook-button--arrow', rightArrow].join(' ')}/>}
      </button>  
    </>
  );
};
