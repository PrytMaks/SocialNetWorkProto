import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  
  let postsData = props.posts;

  let postsElements = postsData.map( el => <Post likesCount={el.likesCount} message={el.message} key={el.id}/>)

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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
