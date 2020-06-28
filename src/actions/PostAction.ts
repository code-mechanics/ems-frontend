import axios from 'axios';
import _ from 'lodash';
import { ELoginType } from '../enums/Types';

export function getAllPost() {
    return function (dispatch:any) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            console.log(response.data);
            dispatch({
                type:
                ELoginType.GET_ALL_POST,
                posts: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function getPost() {
    return function (dispatch:any) {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
            console.log('true');
            console.log(response.data);
            dispatch({
                type:
                ELoginType.GET_POST,
                post: response.data
            });
        }).catch(err => {
            console.log('false');
            console.log(err);
        });
    };
}

export function deletePost(id: number, posts: any) {
    return function (dispatch:any) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => {
            console.log('true');
            dispatch({
                type:
                ELoginType.DELETE_POST,
                post:_.remove(posts, function(post) {
                    return post.id == id;
                })
            });
        }).catch(err => {
            console.log('false');
            console.log(err);
        });
    };
}