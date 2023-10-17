import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://img.freepik.com/premium-vector/cartoon-funny-monkey-face-avatar_6996-1144.jpg" alt="" className={s.post_ava}/>
      Post 1 
    </div>
  );
};

export default Post;
