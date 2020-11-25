import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './NavigationBar.css';
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../logo.png';
import Register from "../Register/Register";
import Login from "../Login/Login";

const NavigationBar = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);


    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-sm" >
            <ul className="navbar-nav main-nav" >
                <Link to={ '/' } >
                    <img className="nav-logo mx-3 my-1" src={ logo } alt="logo" width={ 80 } height={ 60 } />
                </Link >
                <Link className="nav-item" to={ '/' } >Home</Link >
                <Link className="nav-item" to={ '/search' } >Search</Link >
                <Link className="nav-item" to={ '/my-revipes' } >My Recipes</Link >
                <Link className="nav-item" to={ '/about' } >About Us</Link >
                { currentUser ?
                    <ul className="navbar-nav user-nav" >
                        <li className="nav-item" >Welcome, { currentUser }!</li >
                        <li className="nav-item" onClick={ dispatch({type: "LOGOUT"}) } >
                            <Link className="nav-link" to={ '/' } >
                                <i className="fas fa-sign-out-alt pr-2" />Log Out
                            </Link >
                        </li >
                    </ul > :
                    <ul className="navbar-nav user-nav" >
                        <li className="nav-item" onClick={ () => setOpenLoginModal(true) } >
                            <i className="fas fa-sign-in-alt pr-2" />Sign In
                        </li >
                        { openLoginModal && <Login
                            show={ openLoginModal }
                            updateVisibility={ setOpenLoginModal } /> }
                        <li className="nav-item" onClick={ () => setOpenRegisterModal(true) } >
                            <i className="fas fa-user-plus pr-2" />Sign Up
                        </li >
                        { openRegisterModal && <Register
                            show={ openRegisterModal }
                            updateVisibility={ setOpenRegisterModal } /> }
                    </ul > }
            </ul >
        </nav >
    );
};

export default NavigationBar;
