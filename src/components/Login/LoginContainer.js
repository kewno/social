import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {setAuthThunkCreator} from "../../redux/authReducer";
import {Navigate} from "react-router";

const LoginContainer = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
    <div>
        <Login {...props}/>
    </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errors: state.auth.errors
    }
}

export default connect(mapStateToProps, {setAuthThunkCreator})(LoginContainer);
