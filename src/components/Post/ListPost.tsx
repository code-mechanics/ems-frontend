/**
 * @file Login.
 * @author Mahesh
 */
import React from 'react';
// import { compose } from "redux";
import { connect } from "react-redux";
// import { Dispatch } from "react";
// import { IAppState } from "../../stores/store";
import { getAllPost, getPost } from "../../actions/PostAction";
import { Posts } from "../../reducers/PostReducer";


interface Post {
    posts: Posts;
    onLoginClick(): Posts;
}

class ListPost extends React.Component<Post>  {

    componentDidMount() {
        console.log("this.props in list post::", this.props.post)
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
        const tableBody = this.props.post.map((post) => {
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.completed}</td>
            </tr>
        });

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {tableBody}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        // validUser: state.login.validUser'=
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch:any) => {
            return { 
                onLoginClick: () => dispatch(getAllPost())
            }};

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ListPost);
