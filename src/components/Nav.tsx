import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "GitHub",
    href: "https://github.com/Dissurender/",
    rel: "noreferrer noopener",
    target: "_blank",
  },
];

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters style={{ margin: "0 1rem" }}>
        {pages.map((page) => (
          <Link
            key={page.title}
            to={page.href}
            id={page.title + "-link"}
            style={{
              padding: "0 20px",
              color: "white",
              textDecoration: "none",
            }}
            target={page.target ? page.target : ""}
            rel={page.rel ? page.rel : ""}
          >
            {page.title}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
