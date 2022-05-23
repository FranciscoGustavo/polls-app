import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import { BoxRoot, Wrapper, Content } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <BoxRoot>
      <Header />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </BoxRoot>
  );
};

export default Layout;
