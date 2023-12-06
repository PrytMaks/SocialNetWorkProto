import { follow, unfollow, /*setUsers setCurrentPage, setTotalUsersCount, toggleIsFetching,*/ toggleFollowingInProgress, getUsersThunkCreator} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from "react";
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
//import {usersAPI} from '../../api/api'; После подключения Санок все асинхронные операции в BLL - DAL
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    // //импортировали getUsers из DAL API (слой доступа к данным)
    
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
    //Заменили одной только санкой  Thunk
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNum) => {


    this.props.getUsersThunkCreator(pageNum, this.props.pageSize)
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
      followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress
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

const UsersContainer = connect(mapStateToProps, 
  {follow, unfollow,
  toggleFollowingInProgress, getUsersThunkCreator})(UsersAPIComponent);





export default UsersContainer;