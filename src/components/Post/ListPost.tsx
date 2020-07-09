/**
 * @file Login.
 * @author Mahesh
 */
import React from 'react';
import { connect } from "react-redux";
import { getAllPost, getPost, deletePost } from "../../actions/PostAction";
import { Posts } from "../../reducers/PostReducer";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';



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
                <td>
                    <Grid container justify="center" spacing={2} xs={12} item>
                        <Grid xs={10} item>
                            <Typography variant="overline" display="block" gutterBottom>
                                {item.id}.{item.title} <a className="btn-floating btn waves-effect waves-light tiel"><i className="material-icons">keyboard_voice</i></a>
                            </Typography>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="Yes" control={<Radio color="default" />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio color="default" />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid xs={2} item>
                            <Chip label="1 point" />
                        </Grid>
                    </Grid>
                </td>
                {/* <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
                <td>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => this.props.onDeleteClick(item.id, this.props.posts.posts)}
                    >
                        Delete
                        </button>
                </td> */}
            </tr>
        ));

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th><Typography variant="h3" gutterBottom>
                            Cloud Computing Services
      </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                Total Points 10
      </Typography>
                        </th>
                        {/* <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th><th/> */}

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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoginClick: () => dispatch(getAllPost()),
        onDeleteClick: (id: number, posts: any) => dispatch(deletePost(id, posts))
    }
};

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ListPost);
