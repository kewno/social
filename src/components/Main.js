import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import {Router} from "react-router";
//import {Routes} from "react-router";
const Main = (props) => {
    //debugger
    return (
        <Router>
            <main>
                <Sidebar/>
                    {/*<Route path='/dialogs' element={() => <DialogsContainer store={props.store} />}/>*/}
                {/*<Route path='/profile' element={() => <Profile store={props.store} />}/>*/}
                {/*<Route exact path='/' element={() => <Profile store={props.store} />}/>*/}
                {/*<Route exact path='/' render={() => <Profile store={props.store} />}/>*/}
            </main>
        </Router>
    )
}

export default Main;