import {AUTH_ERROR,THREAD_POST_SUCCESS,REPLY_POST_SUCCESS,CLEAR_ERRORS,GET_THREADS_SUCCESS,GET_REPLIES_SUCCESS } from "../types";
    const forumReducerfunc = (state,action)=>{
        switch(action.type){
            case THREAD_POST_SUCCESS:
                return {...state,threads:[...state.threads,action.payload]};
            case GET_THREADS_SUCCESS:
                return {...state,threads:action.payload,checked:true};
            case REPLY_POST_SUCCESS:
                return {...state,replies:[...state.replies,action.payload]}
            case GET_REPLIES_SUCCESS:
                return {...state,replies:action.payload,checkedReplies:true}
            case CLEAR_ERRORS:
                return{ ...state,error:null}
            case AUTH_ERROR:
                return{...state,error:action.payload};
    
            default:return state;
        }
    }
    export default forumReducerfunc;