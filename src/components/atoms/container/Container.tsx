import React from 'react';
import './container.scss';

interface ContainerProps {
    sizeContainer? : '1024px' | '1100px' | '1200px' | '1440px';
    /**
    * Container`s size
    */

    backgroundColor?: string;
    /**
    * What background color to use
    */
}


export const Container: React.FC<ContainerProps> = ({backgroundColor , ...props}: ContainerProps) => {
  return (
    <div
      className={['storybook-container', `storybook-container--size-${props.sizeContainer}` ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam voluptates recusandae cupiditate magnam, perferendis veritatis dolorem iure magni accusantium saepe ea? Suscipit quasi ut voluptate. Obcaecati quia enim iure!
    </div>
  );
};

