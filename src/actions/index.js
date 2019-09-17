import { ADD_POST, DELETE_POST, FETCH_POST } from "./types";

import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const createPost = ({ title, body }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/posts`, { title, body })
      .then(response => {
        dispatch(createPostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      userId: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const fetchPosts = posts => {
  //console.log("fetchPosts", posts);
  return {
    type: FETCH_POST,
    posts
  };
};

export const fetchAllPosts = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/users`)
      .then(response => {
        //console.log("fetchAllPosts", response.data);
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export const deletePost = id => {
  return dispatch => {
    return axios
      .delete(`${apiUrl}/posts/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(id));
      })
      .catch(error => {
        throw error;
      });
  };
};
