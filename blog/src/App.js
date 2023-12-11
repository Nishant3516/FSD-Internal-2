import React, { useState } from "react";
import "./App.css";

const postsData = [
  {
    id: 1,
    title: "Introduction to React",
    content: "This is the first post about React.",
  },
  {
    id: 2,
    title: "React Hooks",
    content: "Learn about React Hooks and how to use them.",
  },
  {
    id: 3,
    title: "Building a React App",
    content: "Explore the process of building a React application.",
  },
];

const BlogApp = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    const post = postsData.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const handleBackToPosts = () => {
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      {selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={handleBackToPosts}>Back to Posts</button>
        </div>
      ) : (
        <ul>
          {postsData.map((post) => (
            <li key={post.id} onClick={() => handlePostClick(post.id)}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogApp;
