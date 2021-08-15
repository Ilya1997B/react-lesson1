const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    MyPostData: [
        {id: 1, text: 'hello', coun: 0},
        {id: 2, text: 'privki', coun: 15},
        {id: 3, text: 'hello', coun: 20},
    ],
    NewPostText: 'It-camasutra'
};

const PostDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.NewPostText,
                coun: 0
            };
            return{
                ...state,
                MyPostData: [...state.MyPostData, newPost],
                NewPostText: ('')
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                NewPostText:action.newText}

        }
    }
    return state;
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const PostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text,
    }
}

export default PostDataReducer;