import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://img.freepik.com/premium-vector/cartoon-funny-monkey-face-avatar_6996-1144.jpg"
        alt=""
        className={s.post_ava}
      />
      <div className="">{props.nameA}</div>
      Post 1<span className="like_count">Likes: {props.likes}</span>
    </div>
  );
};

export default Post;
