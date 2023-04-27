import React, { FC } from 'react';
import './Button.scss';

import Icon from './arrow.svg';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
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
  borderRadius?: '0px' | '4px' | '99px';
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
export const Button: FC<ButtonProps> = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  arrowRight = false,
  arrowLeft = false,
  borderRadius = '0px',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const rightArrow = arrowRight ? 'storybook-button--arrow-right' : undefined;
  const leftArrow = arrowLeft ? 'storybook-button--arrow-left' : undefined;
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--bR-${borderRadius}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {arrowLeft && <Icon className={['storybook-button--arrow', leftArrow].join(' ')} />}
      {label}
      {arrowRight && <Icon className={['storybook-button--arrow', rightArrow].join(' ')} />}
    </button>
  );
};
