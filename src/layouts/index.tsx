import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Container
        sx={{
          padding: "1rem",
          width: "100vw",
          minHeight: "calc(100vh - 64px - 100px)",
        }}
        className="main-content"
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
