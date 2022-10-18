import React, {Component} from 'react';
import s from './App.module.scss';
import Sidebar from "./Sidebar/Sidebar";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import ProfileContainer from "./Profile/ProfileUser/ProfileContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import LoginContainer from "./Login/LoginContainer";
import {connect} from "react-redux";
import Preloader from "./compose/Preloader";
import {initializedApp} from "../redux/appReducer";
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./UsersPage/UsersContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div>
                <HeaderContainer/>
                <div className={s.mainSection}>
                    <Sidebar/>
                    <main>
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes> {/*<Route path='/profile/:userId' element={ <ProfileContainer store={props.store} />}/>*/}
                                <Route path='/dialogs/*' element={<DialogsContainer />}/>
                                {/*<Route path='/profile/*' element={ <ProfileContainer store={props.store} />}/>*/}
                                <Route path='/profile/' element={<ProfileContainer />}>
                                    <Route path=':userId' element={<ProfileContainer />}/>
                                </Route>
                                <Route path='/users/*' element={<UsersContainer />}/>
                                <Route path='/login' element={<LoginContainer/>}/>
                                <Route exact path='/' element={<ProfileContainer />}/>
                            </Routes>
                        </React.Suspense>
                    </main>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default connect(mapStateToProps, {initializedApp})(App);
