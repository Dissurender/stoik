import { Grid, Typography } from "@mui/material";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/Dissurender/",
    referrer: "noreferrer noopener _blank",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rhyn-ogg/",
    referrer: "noreferrer noopener _blank",
  },
];

function Footer() {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={3}>
        <Typography style={{ textAlign: "center", margin: "0 0 1rem 0" }}>
          {new Date().getFullYear()} Diss
        </Typography>
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target={link.referrer}
            rel={link.referrer}
            style={{
              padding: "0 1rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            {link.title}
          </a>
        ))}
      </Grid>
    </Grid>
  );
}

export default Footer;
