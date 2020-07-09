/**
 * @file Exam.
 * @author Mahesh
 */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ListPost from '../Post/ListPost';

const Exam = () => {
    return (
        <div>
            <NavBar />
            <CssBaseline />
            <Container maxWidth="md">
                <ListPost />
            </Container>
        </div>
    );
}


export default Exam;
