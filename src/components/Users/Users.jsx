import s from "./users.module.css";
import React from "react";
import userPhoto from "../../assets/images/usualProfile.png";
import { NavLink } from "react-router-dom";
import  axios from 'axios';

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
            key = {page}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.photoWrapper}>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0//follow${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "d41de8bb-c175-4c94-bb80-b3217e0d6207",
                    },
                    
                  }).then((response) => {
                      if(response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                  });
                  
                  
                }}>Unfollow</button>
              ) : (
                <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0//follow${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "d41de8bb-c175-4c94-bb80-b3217e0d6207",
                    },
                  }).then((response) => {
                      if(response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                  });


                  
                }}>Follow</button>
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
