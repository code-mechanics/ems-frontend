/**
 * @file Login.
 * @author Mahesh
 */
import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { IAppState } from "../../stores/store";
import { getPost } from "../../actions/PostAction";
import { Post } from "../../reducers/PostReducer";


interface Posts {
    post: Post;
    onLoginClick(): Post;
}

class ListPost extends React.Component<Posts> {

    componentDidMount() {
        console.log("this.props in list post::",this.props)
        // const { post, onLoginClick } = this.props;
        //
        // if (post.length === 0) {
        //     onLoginClick.getPost().catch(error => {
        //         alert("Loading courses failed" + error);
        //     });
        // }
    }

    render() {
        // const classes = useStyles();
        return (
            <div>
                {this.props.post}
             </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return {
        // validUser: state.login.validUser'=
        post: state.post
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Post>) => {
    return {
        onLoginClick: () => dispatch(getPost())
    };
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(ListPost);
