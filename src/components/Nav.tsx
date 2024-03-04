import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
  {
    title: "Home",
    href: "/",
    describedby: "home-link",
  },
  {
    title: "About",
    href: "/about",
    describedby: "about-link",
  },
  {
    title: "Blog",
    href: "/blog",
    describedby: "blog-link",
  },
  {
    title: "GitHub",
    href: "https://github.com/Dissurender/",
    rel: "noreferrer noopener",
    target: "_blank",
    describedby: "github-link",
  },
];

function Nav() {
  return (
    <AppBar position="static" className="nav">
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
            aria-describedby={page.describedby}
          >
            {page.title}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
