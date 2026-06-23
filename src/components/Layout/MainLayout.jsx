import React from "react";
import { Outlet } from "react-bootstrap-icons";
import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import WhatsAppButton from "../WhatsAppButton";

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
