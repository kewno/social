// import React, {Component} from 'react';
// import Profile from "../Profile";
// import {connect} from "react-redux";
// import * as axios from 'axios';
// import {setProfileUser} from "../../../redux/profileReducer";
//
// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
//             .then(response => {
//                 this.props.setProfileUser(response.data);
//             })
//     }
//
//     render() {
//         return (
//             <Profile {...this.props}/>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         profileUser : state.profilePage.profileUser
//     }
// }
// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         setProfileUsers(u) {
// //             dispatch(setProfileUser(u))
// //         }
// //     }
// // }
//
// export default connect(mapStateToProps, {setProfileUser})(ProfileContainer);


import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";

import {
    getStatusUserThunkCreator,
    setDataUserThunkCreator,
    setProfileUser,
    setStatusUserThunkCreator
} from "../../../redux/profileReducer";
import {useParams} from "react-router";
import {compose} from "redux";

const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};
debugger
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId || 21344;

        this.props.setDataUserThunkCreator(userId);
        this.props.getStatusUserThunkCreator(userId);
    }

    render() {
        //if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return <Profile {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    debugger
    return {
        profileUser : state.profilePage.profileUser,
        status : state.profilePage.statusUser
    }
}

//let withUrlDataContainerComponent = withAuthChecked(withRouter(ProfileContainer));
//let withAuth = withAuthChecked();
export default compose(
    connect(mapStateToProps, {setProfileUser, setDataUserThunkCreator, setStatusUserThunkCreator, getStatusUserThunkCreator}),
    withRouter
)(ProfileContainer);
//export default connect(mapStateToProps, {setProfileUser, setDataUserThunkCreator})(withUrlDataContainerComponent);
//,withAuthChecked