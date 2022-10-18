import React from 'react';
import {Navigate} from "react-router";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthChecked = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>;
        }
    }

    //let ConnectedAuthChecked = connect(mapStateToProps)(RedirectComponent);
    //return ConnectedAuthChecked;

    return connect(mapStateToProps)(RedirectComponent);
}