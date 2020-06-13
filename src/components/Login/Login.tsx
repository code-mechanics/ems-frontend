/**
 * @file Login.
 * @author Mahesh
 */
import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { IAppState } from "../../stores/store";
import { AuthenticateUser, IAuthType } from "../../actions/AuthAction";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import NavBar from '../NavBar/NavBar';
import './Login.scss';

interface IProps {
    validUser: boolean;
    onLoginClick(): void;
}

class Login extends React.Component<IProps> {
    
    render() {
        // const classes = useStyles();
        return (

            <div>
                <NavBar />
                <div id="login-page" className="row">
                    <div className="col s12 z-depth-6 card-panel">
                        {this.props.validUser === true ? 'Yes' : 'No'}</div><br />
                    <br />
                    <TextField id="txtPassword" label="Password" type="Password" /><br />
                    <Button variant="contained" color="primary" onClick={this.props.onLoginClick}>
                        Login
                </Button>
                    <div className="row">
                        <div className="input-field col s12 center">
                            <i className="large material-icons circle teal white-text">person</i>
                        </div>
                    </div>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                {/* <AccountCircle /> */}
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="With a grid" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock_outline</i>
                            <input id="password" type="password" />
                            <label>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <a href="#" id="login" className="btn waves-effect waves-light col s12" onClick={this.props.onLoginClick}>Sign In</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        validUser: state.login.validUser
    };
};

const mapDispatchToProps = (dipatch: Dispatch<IAuthType>) => {
    return {
        onLoginClick: () => dipatch(AuthenticateUser(true))
    };
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Login);
