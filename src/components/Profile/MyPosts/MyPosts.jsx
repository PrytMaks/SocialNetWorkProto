import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      
      <div className="">
        <div className="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="">
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post likes="3" message="Hello how are you?" />
      </div>
    </div>
  );
};

export default MyPosts;
