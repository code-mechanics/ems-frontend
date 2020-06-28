/**
 * Created by vadivel on 27.06.20.
 */
import { ELoginType } from '../enums/Types';
// import { PostAction } from "../actions/PostAction";

const initState = {
    userId: 0,
    id: 0,
    title: "",
    completed: false,
    posts: []
};
export interface Posts {
    posts: Post[]
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export default function reducer (state= initState, action:any) {
    let st = state;
    switch (action.type) {
        case ELoginType.GET_ALL_POST:
        {
            st = {
                ...state,
                posts: action.posts
            };
            break;
        }
        case ELoginType.GET_POST:
            return action.post;
        default:
            return st;
}
    return st;
};
