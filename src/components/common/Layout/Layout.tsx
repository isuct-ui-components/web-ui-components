import React, { PropsWithChildren } from 'react';

import { FlexContainer } from '../FlexContainer/FlexContainer';

const Header = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer>{children}</FlexContainer>;
};

const Body = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer>{children}</FlexContainer>;
};

const Footer = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer>{children}</FlexContainer>;
};

export const Layout = ({ children }: PropsWithChildren<object>) => {
  return <FlexContainer flexDirection={'column'}>{children}</FlexContainer>
}

Layout.Header = Header
Layout.Body = Body
Layout.Footer = Footer
