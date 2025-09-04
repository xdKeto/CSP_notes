import { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data = await response.json();
        setPosts(data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <div className="text-black font-semibold text-4xl">
          {loading ? (
            <p>Loading..</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
