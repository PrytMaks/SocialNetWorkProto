import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import AddNewPostReduxForm from "./MyPostReduxInput";
const MyPosts = (props) => {

  //let newPostElement = React.createRef();
  let postsData = props.posts;

  let postsElements = postsData.map((el) => (
    <Post likesCount={el.likesCount} message={el.message} key={el.id} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
        <AddNewPostReduxForm 
          onSubmit={onAddPost}
        />
      <div className={s.posts}>{postsElements} </div>
    </div>
  );
};



export default MyPosts;
