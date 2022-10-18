import React from 'react';
import Header from "./Header/Header";
import {connect} from "react-redux";
import {delAuthThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loginUser: state.auth.login
    }
}
export default connect(mapStateToProps, {delAuthThunkCreator})(HeaderContainer);