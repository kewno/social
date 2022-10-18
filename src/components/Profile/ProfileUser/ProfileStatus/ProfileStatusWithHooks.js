import React, {useEffect, useState} from 'react';
import SetStatusForm from "./SetStatusForm/SetStatusForm";

const ProfileStatusWithHooks = (props) => {
    //debugger
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);


    let stateEditMode = useState(false)
    let [editMode, setEditMode] = stateEditMode;

    let stateStatusText = useState(props.status)
    let [status, setStatus] = stateStatusText;

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = (text) => {
        setStatus(text);//Check
        setEditMode(false);
        props.setStatusUserThunkCreator(text)
    }
    // let onStatusChange = (text) => {
    //     setStatus(text)
    // }

    return (
        <div>
            {!editMode &&
                <span onDoubleClick={activateEditMode}>{status || '-----'}</span>//
            }
            {editMode &&
                <SetStatusForm deactivateEditMode={deactivateEditMode} status={status}/> //
            }
        </div>
    )
}

export default ProfileStatusWithHooks;