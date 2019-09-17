import React from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import { deletePost } from "../actions";

function PostList({ posts, onDelete }) {
  const postsData = posts !== undefined ? posts[0] : null;
  console.log("PostList posts", posts);
  return (
    <div>
      {postsData !== undefined ? (
        <div>
          {postsData.map((item, index) => (
            <div key={index}>
              {item.id}
              {item.name}
              <br />
              {item.email}
              <br />
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => onDelete(item.id)}
              >
                Remove
              </button>
              <br />
              <br />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    posts: state.posts.posts,
    type: state.posts.type
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
