import React, { useState } from 'react';
import './Register.css'
import Modal from 'react-bootstrap4-modal';


const Register = props => {
    const [show, setShow] = useState({...props.show});
    const [error, setError] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [previewSource, setPreviewSource] = useState('');


    const validateForm = () => {
        if (!(username && password && confirmPassword && firstName && lastName)) {
            setError('Fill The Empty Fields Please');
            return false;
        } else if (password.length < 8) {
            setError('Password should contains at least 8 characters!');
            return false;
        }
        else if (!password.equals(confirmPassword)) {
            setError ('Passwords are not identical, Please try again.')
        }
        return true;
    };

    const handleCancel = show => {
        setShow(show);
        props.updateVisibility(show);
    };

    const register = (event) => {
        event.preventDefault();
        if (!validateForm())
            return;
        setError('');
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            handleCancel(false);
        });
        xhr.open('POST', process.env.REACT_APP_API + '/api/newUser');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email
        }));
    };

    const handleChooseImage = event => {
        const image = event.target.files[0];
        previewImage(image);
    };

    const previewImage = image => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    };

    return (
        <Modal
            className="container col-12 p-5"
            visible={ show } >
            <div className="modal-header" >
                <h5 className="modal-title" >Register</h5 >
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
            <div className='form-group' >
                <input
                    type="confirmPassword" className="form-control" name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={ event => setConfirmPassword(event.target.value) } />
            </div >
            <div className='form-group' >
                <input
                    type="text" className="form-control" name="firstName"
                    placeholder="First Name"
                    onChange={ event => setFirstName(event.target.value) } />
            </div >
            <div className='form-group' >
                <input
                    type="text" className="form-control" name="lastName"
                    placeholder="Last Name"
                    onChange={ event => setLastName(event.target.value) } />
            </div >
            <div className='form-group' >
                <input
                    type="email" className="form-control" name="email"
                    placeholder="Email"
                    onChange={ event => setEmail(event.target.value) } />
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
                    <button className="btn register-btn" onClick={ register } >Register</button >
                </div >
            </div >
        </ Modal >
    );
};

export default Register;
