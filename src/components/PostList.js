import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

function PostList({ posts }) {

const postsData = posts !== undefined ? posts.data : null;
  return (
    <div>
      {postsData !== undefined ? (
          <div>
          <div>{postsData.id}</div>
          <div>{postsData.email}</div>
          <div>{postsData.first_name}</div>
          <div>{postsData.last_name}</div>
          <div>{postsData.avatar}</div>
          </div>
      ):null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};



export default connect(
  mapStateToProps,
  null
)(PostList);