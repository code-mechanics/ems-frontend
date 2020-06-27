import axios from 'axios';
import { ELoginType } from '../enums/Types';

// export function getAllPost() {
//     return function (dispatch:any) {
//         axios.get('https://jsonplaceholder.Post.com/todos').then(response => {
//             console.log(response.data);
//             dispatch({
//                 type:
//                 ELoginType.GET_ALL_POST,
//                 post: response.data
//             });
//         }).catch(err => {
//             console.log(err);
//         });
//     };
// }

export function getPost() {
    return function (dispatch:any) {
        axios.get('https://jsonplaceholder.Post.com/todos/1').then(response => {
            console.log(response.data);
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