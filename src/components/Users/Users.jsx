//import s from "./users.module.css";
import React from "react";
import { Paginator } from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  follow,
  unfollow,
  followingInProgress,
  ...props
}) => {
  return (
    <div className="">
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      ></Paginator>
      <div>
        {users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
