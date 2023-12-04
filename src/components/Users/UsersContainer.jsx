import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from "react";
import axios from "axios";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
        withCredentials: true,
      })
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.currentPage.pageSize}`,{
      withCredentials: true,
    })
    .then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers([...response.data.items]);
    });
  }
  render() {
    return <>
    {this.props.isFetching ? <Preloader></Preloader> : null}
    <Users 
      totalUsersCount = {this.props.totalUsersCount}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      onPageChanged = {this.onPageChanged}
      follow={this.props.follow}
      unfollow = {this.props.unfollow}
      users = {this.props.users}
    />
    </>
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currenPage) => {
//       dispatch(setCurrentPageAC(currenPage));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent);





export default UsersContainer;