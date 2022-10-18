import React from 'react';
import {connect} from "react-redux";
import {
    getUsersPageThunkCreator, getUsersThunkCreator,
    setActivePage, subscribeUserThunkCreator,
    toggleFollowed, toggleFollowingProgress, unsubscribeUserThunkCreator
} from '../../redux/usersReducer';
import Users from './Users/Users';
import Preloader from "../compose/Preloader";
import {getCountPageSel, getCountUsersSel, getUserSel} from "../../redux/selectors";

let mapStateToProps = (state) => {
    return {
        users : getUserSel(state),
        countUsers: getCountUsersSel(state),
        countPage: getCountPageSel(state),
        sizeUserOfPage: state.usersPage.sizeUserOfPage,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.countPage, this.props.sizeUserOfPage)
    }

    getUsers = (idPage) => {
        this.props.getUsersPageThunkCreator(idPage, this.props.sizeUserOfPage)
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                countUsers={this.props.countUsers}
                sizeUserOfPage={this.props.sizeUserOfPage}
                activePage={this.props.activePage}
                users={this.props.users}
                followingProgress={this.props.followingProgress}
                subscribeUserThunkCreator={this.props.subscribeUserThunkCreator}
                unsubscribeUserThunkCreator={this.props.unsubscribeUserThunkCreator}
                getUsers={this.getUsers}
            />
        </>
        )
    }
}

export default connect(mapStateToProps, {
        toggleFollowed,
        setActivePage,
        toggleFollowingProgress,
        getUsersThunkCreator,
        getUsersPageThunkCreator,
        subscribeUserThunkCreator,
        unsubscribeUserThunkCreator
})(UsersContainer);
// UsersContainer;