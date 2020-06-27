/**
 * Created by vadivel on 27.06.20.
 */
import { ELoginType } from '../enums/Types';
import { PostAction } from "../actions/PostAction";

const initState: Post = {};

export interface Post {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export default function reducer (state= initState, action: PostAction) {
    switch (action.type) {
        // case ELoginType.GET_ALL_POST:
        //     return [...state, {...action.post }];
        case ELoginType.GET_POST:
            return action.post;
        default:
            return state;
}
};
