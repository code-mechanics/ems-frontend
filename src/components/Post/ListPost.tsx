/**
 * @file Login.
 * @author Mahesh
 */
import React from 'react';
// import { compose } from "redux";
import { connect } from "react-redux";
// import { Dispatch } from "react";
// import { IAppState } from "../../stores/store";
import { getAllPost, getPost, deletePost } from "../../actions/PostAction";
import { Posts } from "../../reducers/PostReducer";


interface Post {
    posts: Posts;
    onLoginClick(): Posts;
    onDeleteClick(id: number, posts: any): void;
}

class ListPost extends React.Component<Post>  {

    componentDidMount() {
        console.log("this.props in list post::", this.props.posts)
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
        const tableBody = this.props.posts.posts.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
                <td>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => onDeleteClick(item.id, this.props.posts)}
                    >
                        Delete
                        </button>
                </td>
            </tr>
        ));

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th/>
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
        posts: state.post
    };
};

const mapDispatchToProps = (dispatch:any) => {
            return { 
                onLoginClick: () => dispatch(getAllPost()),
                onDeleteClick: (id: number, posts: any) => dispatch(deletePost(id, posts))
            }};

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ListPost);
