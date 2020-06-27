/**
 * @file Exam.
 * @author Mahesh
 */
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../../actions/AuthAction";

const Exam = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect runs on Exam');
    }, []);
    return (
        <div>
            <NavBar />
            <Link to="/" onClick={() => { dispatch(LogoutUser(false)) }}>Logout</Link>
        </div>
    );
}


export default Exam;
