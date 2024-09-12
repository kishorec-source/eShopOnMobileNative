import React from "react";
import { Footer, Header } from "../../components";
import Button from '@mui/material/Button';

type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageContainer;
