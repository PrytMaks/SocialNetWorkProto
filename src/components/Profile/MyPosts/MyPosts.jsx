import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsData = props.posts;

  let postsElements = postsData.map((el) => (
    <Post likesCount={el.likesCount} message={el.message} key={el.id} />
  ));

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <div className="">
        <div className="">
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            name=""
            id=""
            cols="30"
            rows="10"
            value={props.newPostText}
          />
        </div>
        <div className="">
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
