import Router from "next/router";
import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = (props) => {

  return (
    <div className='page'>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
