import React from "react";
// import tw, { GlobalStyles } from 'twin.macro'
import tw from 'twin.macro'

const SiteContainer = tw.div`
  container mx-auto
`;

const Layout = ({ children }) => (
  <SiteContainer>
    {children}
  </SiteContainer>
);

export default Layout;
