import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            /></>
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.stateUsers.users,
        pageSize: state.stateUsers.pageSize,
        totalUsersCount: state.stateUsers.totalUsersCount,
        currentPage: state.stateUsers.currentPage,
        isFetching: state.stateUsers.isFetching,
        followingInProgress: state.stateUsers.followingInProgress
    }
}
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersAPIComponent)