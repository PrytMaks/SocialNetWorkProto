import React from "react";
import s from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/usualProfile.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.currentPage.pageSize}`)
    .then((response) => {
      this.props.setUsers([...response.data.items]);
    });
  }
  render() {
    //Высчитываем количество нужных нам страниц в Page count: делим общее количество всех пользователей с сервера 
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className="">
        <div className="">
          {pages.map((page) => (

            <span className={this.props.currentPage === page ? s.selectedPage : ""}
            onClick={(e) => {this.onPageChanged(page)}}
            >
              {page}
            </span>
          ))}
        </div>
        {this.props.users.map((u) => (
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
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
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
}

export default Users;
