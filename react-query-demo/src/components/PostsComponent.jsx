import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../services/api';

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
