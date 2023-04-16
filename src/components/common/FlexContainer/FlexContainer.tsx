import React, { FC, PropsWithChildren } from 'react';

export type FlexConatinerType = {
  maxWidth?: React.CSSProperties['maxWidth'];
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  gap?: React.CSSProperties['gap'];
  flexWrap?: React.CSSProperties['flexWrap'];
  className?: string;
};

export const FlexContainer: FC<PropsWithChildren<FlexConatinerType>> = ({
  maxWidth,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  gap,
  className,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        maxWidth: maxWidth || '100%',
        flexDirection: flexDirection || 'row',
        flexWrap: flexWrap || 'nowrap',
        alignItems: alignItems || 'flex-start',
        justifyContent: justifyContent || 'flex-start',
        gap: gap || 0,
      }}
    >
      {children}
    </div>
  );
};
