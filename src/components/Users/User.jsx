import s from "./users.module.css";
import React from "react";
import userPhoto from "../../assets/images/usualProfile.png";
import { NavLink } from "react-router-dom";

const User = ({
  user,
  followingInProgress,
  follow,
  unfollow
}) => {
  let u = user
  return (
    <div>
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
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                follow(u.id);
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
  );
};

export default User;
