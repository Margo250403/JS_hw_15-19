/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const PostList = ({ posts }) => {
  return (
    <div>
        {posts.map((post:any) => ( 
          <div key={post.id}>{post.title}</div>
        ))}
    </div>
  );
};
   