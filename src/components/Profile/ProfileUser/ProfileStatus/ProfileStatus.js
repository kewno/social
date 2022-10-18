import React from 'react';
import SetStatusForm from "./SetStatusForm/SetStatusForm";

class ProfileStatus extends React.Component {
    state = {
        editMode : false,
        status : this.props.status
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log(prevProps.status + " " + this.props.status);
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (text) => {
        this.onStatusChange(text)
        this.setState({
            editMode: false
        })
        this.props.setStatusUserThunkCreator(text)
    }
    onStatusChange = (status) => {
        this.setState({
            status
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || '-----'}</span>
                }
                {this.state.editMode &&
                    <SetStatusForm deactivateEditMode={this.deactivateEditMode} status={this.state.status}/> //
                    //<input type="text" onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} />//value={this.state.message}
                }
            </div>
        )
    }
}

export default ProfileStatus;