import { ADD_POST, DELETE_POST, FETCH_POST } from "../actions/types";
const initialState = {
  posts: [],
  type: ""
};
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      console.log("action.payload", action.payload);
      return {
        posts: [...state.posts, action.payload],
        type: action.type
      };
    case DELETE_POST:
      return state.filter(posts => posts.id !== action.payload.id);
    //const index = state.map(item => item.id).indexOf(action.payload.id);
    //console.log("index", index, "action.payload.id", action.payload.id);
    // return [...state.slice(0, index)];

    case FETCH_POST:
      //console.log("initialState.posts", initialState);

      return {
        posts: [...state.posts, action.posts],
        type: action.type
      };
    default:
      return state;
  }
}
