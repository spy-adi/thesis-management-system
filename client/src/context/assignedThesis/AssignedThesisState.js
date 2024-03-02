import React,{useReducer} from "react";
import axios from "axios";
import AssignedThesisContext from "./assignedThesisContext";
import assignedThesisReducer from "./assignedThesisReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_DETAILS_SUCCESS,GET_DETAILS_SUCCESS_SUP } from "../types";
axios.create({
    
    responseType: 'json'
})

const AssignedThesisState = (props)=>{
    const initialState = {
        loading: true,
        assignedThesis:null,
        Theses:[],
        error:null,
        checked:false,
        scholar:null,
        supervisor:null,
        co_supervisor:null,
        dsc:null
    }
    const [state,dispatch] = useReducer(assignedThesisReducer,initialState);
    const getAssignedThesisDetails = async(id)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/assignedThesis/${id}`);  
            dispatch({type:GET_DETAILS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }
    const getAssignedThesisDetailsById = async(id)=>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
         setAuthToken(localStorage.token);}
         try {
             const res = await axios.get(`/api/assignedThesis/byId/${id}`);  
             dispatch({type:GET_DETAILS_SUCCESS,payload:res.data});
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
      
     }
    const getAssignedThesisDetailsBySupervisor = async(id)=>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
         setAuthToken(localStorage.token);}
         try {
             const res = await axios.get(`/api/assignedThesis/bySupervisor/${id}`); 
             dispatch({type:GET_DETAILS_SUCCESS_SUP,payload:res.data});
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
      
     }
    return (
    <AssignedThesisContext.Provider
        value={{
            ...state,
            getAssignedThesisDetails,
            getAssignedThesisDetailsById,
            getAssignedThesisDetailsBySupervisor

        }}
    >
        {props.children}
    </AssignedThesisContext.Provider>
    )





}
export default AssignedThesisState;