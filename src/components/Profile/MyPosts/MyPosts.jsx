import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div className="">
      My posts
      <div className="">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post likes = '3' nameA = 'Макс не сдавайся все получится!!!' message = 'Hello how are you?'/>
      </div>
    </div>
  );
};

export default MyPosts;
