import axios from 'axios';
import { ELoginType } from '../enums/Types';

export function getAllPost() {
    return function (dispatch: any) {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
            dispatch({
                type:
                    ELoginType.GET_ALL_POST,
                posts: response.data.filter(function (el: any, idx: any, arr: any) { return el.id <= 10 })
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function getPost() {
    return function (dispatch: any) {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
            dispatch({
                type:
                    ELoginType.GET_POST,
                post: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function deletePost(id: number, posts: any) {
    const postdata = posts.filter(function (el: any, idx: any, arr: any) { return el.id !== id });
    return function (dispatch: any) {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(response => {
            dispatch({
                type:
                    ELoginType.DELETE_POST,
                posts: postdata
            });
        }).catch(err => {
            console.log(err);
        });
    };
}