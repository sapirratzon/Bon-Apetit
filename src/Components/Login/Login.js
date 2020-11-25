import React, { useState } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-bootstrap4-modal';
import './Login.css'

const Login = props => {
    const [show, setShow] = useState({...props.show});
    const [error, setError] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleCancel = show => {
        setShow(show);
        props.updateVisibility(show);
    };

    const validateForm = () => {
        if (!(username && password)) {
            setError('Fill The Empty Fields Please');
            return false;
        }
        return true;
    };

    const login = (event) => {
        event.preventDefault();
        if (!validateForm())
            return;
        setError('');
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            let token = JSON.parse(xhr.responseText)['token'];
            this.props.onLogin(username, token);
            handleCancel(false);
        });
        xhr.addEventListener('progress', () => {
            setError ('Incorrect username or password');
        });
        xhr.open('GET', process.env.REACT_APP_API + '/api/login');
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        xhr.send();
    };

    return (
        <Modal
            className="container col-12 p-5"
            visible={ show } >
            <div className="modal-header" >
                <h5 className="modal-title" >Login</h5 >
            </div >
            <div className='mt-3 form-group' >
                <input
                    type="text" className="form-control" name="username"
                    placeholder="Username" required={ true }
                    onChange={ event => setUsername(event.target.value) } />
            </div >
            <div className='form-group' >
                <input
                    type="password" className="form-control" name="password"
                    placeholder="Password"
                    onChange={ event => setPassword(event.target.value) } />
            </div >
            <div className="modal-footer" >
                <div className='register-error' >
                    <span className="error help-block bg-dark" >{ error }</span >
                </div >
                <div >
                    <button
                        type="button" className="btn cancel-btn"
                        onClick={ () => handleCancel(false) } >Cancel
                    </button >
                    <button className="btn register-btn" onClick={ login } >Login</button >
                </div >
            </div >
        </ Modal >
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, token) => dispatch({
            type: 'LOGIN',
            payload: {username: username, token: token}
        })
    };
};

export default connect(null, mapDispatchToProps)(Login);
