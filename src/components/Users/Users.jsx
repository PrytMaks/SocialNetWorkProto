import axios from "axios";
import s from "./users.module.css";
import userPhoto from '../../assets/images/usualProfile.png'

const Users = (props) => {

  let getUsers = () => {
    if(props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
           .then(response => {
       debugger
       props.setUsers([...response.data.items])
      })
    }
  }
  
  return (
    <div className="">
      <button onClick={getUsers}>Get users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photoWrapper}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.userPhoto} />
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'Yea'}</div>
              <div>{'123'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
