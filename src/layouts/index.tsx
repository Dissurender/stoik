import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main>
      <Nav />
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          padding: "1rem",
          minHeight: "calc(100vh - 64px - 100px)",
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
};

export default Layout;
