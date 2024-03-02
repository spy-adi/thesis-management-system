import React,{useReducer} from "react";
import axios from "axios";
import ProfessorContext from "./professorContext";
import professorReducer from "./professorReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_PROF_DETAILS_SUCCESS,SA_POST_SUCCESS,CLEAR_ERRORS, UPLOAD, UPLOAD_SUCCESS } from "../types";
axios.create({
    
    responseType: 'json'
})

const ProfessorState = (props)=>{
    const initialState = {
        uploading: false,
        supervisorDetails:null,
        chairmanDetails:null,
        co_supervisorDetails:null,
        membersDetails:[],
        error:null,
        supervisorList:null
    }
    const [state,dispatch] = useReducer(professorReducer,initialState);
    const getProfDetails = async(id,designation)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/professor/${id}`);
            console.log(id);
            dispatch({type:GET_PROF_DETAILS_SUCCESS,payload:{response:res.data,designation}});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }
    const submitFSBS = async (supervisorId, scholarAdmn, data) => {
        dispatch({type: UPLOAD});
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try {
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            };
            const res = await axios.put(`/api/fsbs/${supervisorId}/${scholarAdmn}`, data, config);
            dispatch({type:UPLOAD_SUCCESS});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }

    return (
    <ProfessorContext.Provider
        value={{
            ...state,
            getProfDetails,
            submitFSBS,
            clearError
        }}
    >
        {props.children}
    </ProfessorContext.Provider>
    )





}
export default ProfessorState;