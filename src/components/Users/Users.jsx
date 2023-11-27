import s from './users.module.css';
import React from "react";
import userPhoto from '../../assets/images/usualProfile.png'

const Users = (props) => {
  //Высчитываем количество нужных нам страниц в Page count: делим общее количество всех пользователей с сервера 
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };

  return (
    <div className="">
      <div className="">
        {pages.map((page) => (

          <span className={props.currentPage === page ? s.selectedPage : ""}
          onClick={(e) => {props.onPageChanged(page)}}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photoWrapper}>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
                className={s.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(u.id)}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"Yea"}</div>
              <div>{"123"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;