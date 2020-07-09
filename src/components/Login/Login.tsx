/**
 * @file Login.
 * @author Mahesh
 */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AuthenticateUser } from "../../actions/AuthAction";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import NavBar from '../NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import { IAppState } from '../../stores/store';
import { useHistory } from "react-router-dom";
import { Authenticate } from '../helpers/AuthHelper';
import './Login.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state: IAppState) => state.auth);
    const classes = useStyles();
    const [txtEmail, setTxtEmail] = useState<string>('');
    const [txtPassword, setTxtPassword] = useState<string>('');
    // console.log(history);

    useEffect(() => {
        console.log('useEffect runs');
        if (auth.validUser === true)
            history.push("/Exam");
    },[auth.validUser]);


    return (

        <div>
            <NavBar />
            <div id="login-page" className="row">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="col s12 z-depth-6 card-panel">                        
                        <div className="row">
                            <div className="input-field col s12 center">
                                <i className="large material-icons circle teal white-text">person</i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 center">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <EmailIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="Email" value={txtEmail} onChange={(e) => { setTxtEmail(e.target.value) }} />
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="Password" type="password" value={txtPassword} onChange={(e) => { setTxtPassword(e.target.value) }} />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <a href="#" id="login" className="btn waves-effect waves-light col s12" onClick={() => { dispatch(AuthenticateUser(Authenticate(txtEmail, txtPassword))) }}>Sign In</a>
                            </div>
                        </div>
                    </div><br />
                </form>
            </div>

        </div>

    );
}


export default Login;
