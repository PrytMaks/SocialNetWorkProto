import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {

  let postsData = [
    {
      id: 1,
      message: "Hi!",
      likesCount: 4,
    },
    {
      id: 2,
      message: "Its my first ppost!",
      likesCount: 1243,
    },
    {
      id: 3,
      message: "Post to my friend",
      likesCount: 5,
    },
    {
      id: 4,
      message: "Hello fellas !",
      likesCount: 3,
    },
    {
      id: 5,
      message: "Yo",
      likesCount: 1,
    },
  ]

  let postsElements = postsData.map( el => <Post likesCount={el.likesCount} message={el.message} />)

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
