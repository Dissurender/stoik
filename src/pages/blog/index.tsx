import { Typography } from "@mui/material";
import BlogList from "../../components/BlogList";

function BlogPage() {
  return (
    <>
      <Typography variant="h3" sx={{ margin: "1rem" }}>
        RSS feed for articles I've written
      </Typography>
      <BlogList />
    </>
  );
}

export default BlogPage;

// TODO: mutate url to point to the correct domain
// new-paper.vercel.app/post/{name}
