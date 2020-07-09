import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../actions/AuthAction";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#26a69a',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect runs on Exam');
    }, []);



  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Exam Assessment
      </Typography>
        <Button color="inherit" onClick={() => { dispatch(LogoutUser(false));history.push("/"); }} startIcon={<ExitToAppIcon />}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;