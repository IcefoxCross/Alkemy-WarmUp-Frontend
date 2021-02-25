import { useReducer, createContext } from 'react';

export const PostContext = createContext();

const initialState = {
    posts: [],
    post: {},
    message: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_POSTS': {
            return {
                ...state,
                posts: action.payload
            };
        }

        default:
            throw new Error();
    }
}

export const PostContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {children} = props;

    return (
        <PostContext.Provider value={[state,dispatch]}>
            {children}
        </PostContext.Provider>
    )
}