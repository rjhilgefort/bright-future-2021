import React from "react";
import tw, { GlobalStyles } from 'twin.macro'

const Container = tw.div`
  container mx-auto
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    {children}
  </Container>
);

export default Layout;
