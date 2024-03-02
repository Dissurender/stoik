import useRSS from "../hooks/useRSS";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const {
    data: blogs,
    loading: isPending,
    error,
  } = useRSS("https://new-paper-git-main-dissurender.vercel.app/rss.xml");

  return (
    <div className="blog-list">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.link}
            title={blog.title}
            body={blog.description}
            url={blog.link}
          />
        ))}
    </div>
  );
};

export default BlogList;
