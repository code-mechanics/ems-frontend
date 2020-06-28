/**
 * @file Login.
 * @author Mahesh
 */
import React from 'react';
// import { compose } from "redux";
import { connect } from "react-redux";
// import { Dispatch } from "react";
// import { IAppState } from "../../stores/store";
import { getPost } from "../../actions/PostAction";
import { Post } from "../../reducers/PostReducer";


interface Posts {
    post: Post;
    onLoginClick(): Post;
}

class ListPost extends React.Component<Posts>  {

    componentDidMount() {
        console.log("this.props in list post::", this.props.post.id)
        // const { post, onLoginClick } = this.props;
        //
        // if (post.length === 0) {
        //     onLoginClick.getPost().catch(error => {
        //         alert("Loading courses failed" + error);
        //     });
        // }
        this.props.onLoginClick();
    }



    render() {
        // const classes = useStyles();
        return (
            <div>
                {this.props.post.id}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        // validUser: state.login.validUser'=
        post: state.post
    };
};

const mapDispatchToProps = (dispatch:any) => {
            return { 
                onLoginClick: () => dispatch(getPost())
            }};

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ListPost);
