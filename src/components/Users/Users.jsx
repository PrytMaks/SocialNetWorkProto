import s from "./users.module.css";

const Users = (props) => {
  if(props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg",
        followed: false,
        fullName: "Hi!",
        status: "Hey! All be goood!!!!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-avatar-beauty-fine-skin-beautiful-makeup-portrait-bust-png-image_1269896.jpg",
        followed: false,
        fullName: "How is your IT-Kamasutra ?",
        status: "Hey! All be goood!!!!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 3,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSeL_oTJaQO72hwGb_UfAvTg73iag568A5sA0W9Y&s",
        followed: true,
        fullName: "Yo fellas",
        status: "Hey! All be goood!!!!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 4,
        photoUrl:
          "https://demiart.ru/forum/uploads11/post-2439333-1347717720.png",
        followed: false,
        fullName: "Yo",
        status: "Hey! All be goood!!!!",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 5,
        photoUrl:
          "https://img.freepik.com/premium-vector/illustration-of-a-young-stylish-man-cartoon-handsome-bearded-man-hipster-profile-avatar_15870-758.jpg",
        followed: false,
        fullName: "Yo",
        status: "Hey! All be goood!!!!",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }
  
  return (
    <div className="">
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photoWrapper}>
              <img src={u.photoUrl} alt="" className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
