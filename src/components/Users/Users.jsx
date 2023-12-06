import s from "./users.module.css";
import React from "react";
import userPhoto from "../../assets/images/usualProfile.png";
import { NavLink } from "react-router-dom";
const Users = (props) => {
  //Высчитываем количество нужных нам страниц в Page count: делим общее количество всех пользователей с сервера (кол-во страниц определили сами = 5, нужно разделить общее колво пользователей на колво страниц)
  //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div className="">
      <div className="">
        {pages.map((page) => (
          <span
            className={props.currentPage === page ? s.selectedPage : ""}
            onClick={(e) => {
              props.onPageChanged(page);
            }}
            key={page}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photoWrapper}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                    // props.toggleFollowingInProgress(true, u.id);
                    // usersAPI.unfollow(u.id)
                    //   .then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.unfollow(u.id);
                    //     }
                    //     props.toggleFollowingInProgress(false, u.id);
                    //   });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                    // props.toggleFollowingInProgress(true, u.id);

                    // usersAPI.follow(u.id)
                    //   .then((response) => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //     props.toggleFollowingInProgress(false, u.id);
                    //   });
                  }}
                >
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
};

export default Users;
