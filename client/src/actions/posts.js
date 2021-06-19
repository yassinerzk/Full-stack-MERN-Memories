import * as api from '../api';

//Actions Creators

export const getPosts=()=>async (dispatch)=>{
    try {
        const {data}= await api.fetchPosts();

        dispatch({tyle:'FETCH_ALL' ,payload: data})
    } catch (error) {
        console.log(error.message);
    }
};