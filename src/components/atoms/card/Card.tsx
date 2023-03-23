import React from 'react';
import './card.scss';

interface CardProps {
    borderRadius? : '0px' | '4px' | '8px' | '16px';
    /**
    * Card`s border radius
    */
    stroke? : 'shadow' | 'bordered';
    /**
    * Card`s stroke
    */

    backgroundColor?: string;
    /**
    * What background color to use
    */
}

export const Card: React.FC<CardProps> = ({
  borderRadius = '0px',
  stroke = 'shadow',
  backgroundColor,
  ...props
}: CardProps) => {
  return (
    <>
      <div
        className={['storybook-card', `storybook-card--bR-${borderRadius}`, `storybook-card--${stroke}` ].join(' ')}
        style={{ backgroundColor }}
        {...props}>
      </div>
    </>
  );
};
