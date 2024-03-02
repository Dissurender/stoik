import { FC } from "react";

import { Card, CardHeader, CardContent, Link, Divider } from "@mui/material";

interface BlogItemProps {
  title: string;
  body: string;
  url: string;
}

const BlogItem: FC<BlogItemProps> = (props) => {
  return (
    <Card sx={{ margin: "1rem", padding: "1rem" }}>
      <CardHeader title={props.title} />
      <CardContent>
        {props.body}
        <Divider sx={{ margin: "1rem 0" }} />
        <Link href={props.url} target="_blank" rel="noreferrer noopener">
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogItem;
