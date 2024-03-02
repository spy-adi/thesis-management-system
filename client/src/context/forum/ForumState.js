import React,{useReducer} from "react";
import axios from "axios";
import ForumContext from "./forumContext";
import forumReducer from "./forumReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR,THREAD_POST_SUCCESS,REPLY_POST_SUCCESS,CLEAR_ERRORS,GET_THREADS_SUCCESS,GET_REPLIES_SUCCESS } from "../types";
axios.create({
    responseType: 'json'
})

const ForumState = (props)=>{
    const initialState = {
        error:null,
        threads:null,
        replies:null,
        checked:false,
        checkedReplies:false
    }
    const [state,dispatch] = useReducer(forumReducer,initialState);
    const postThread = async formData =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/api/forumThread/addFT",formData,config);
            dispatch({type:THREAD_POST_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const postReply = async formData =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/api/forumReply/addFR",formData,config);
            dispatch({type:REPLY_POST_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }
    const getThreads = async()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token);}
        try {
            const res = await axios.get("/api/forumThread/getAllFT");
            dispatch({type:GET_THREADS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
         
    }
    const getReplies = async id =>{
        if(localStorage.token){
            setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/forumReply/thread/${id}`);
                dispatch({type:GET_REPLIES_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
         
    }

    return (
    <ForumContext.Provider
        value={{
            ...state,
            getThreads,
            getReplies,
            postThread,
            postReply,
            clearError
        }}
    >
        {props.children}
    </ForumContext.Provider>
    )





}
export default ForumState;