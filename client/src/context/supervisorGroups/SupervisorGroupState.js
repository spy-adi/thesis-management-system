import React, { useReducer } from "react";
import axios from "axios";
import SupervisorGroupContext from "./supervisorGroupContext";
import supervisorGroupReducer from "./supervisorGroupReducer";
import { AUTH_ERROR,CLEAR_ERRORS,GET_GROUP_SUCCESS } from "../types";
import setAuthToken from "../../utils/setAuthToken";
axios.create({
    responseType: 'json'
})

const SupervisorGroupState = props =>{
    
    const initialState = {
        scholars:[],
        error:null
    }

    const [state,dispatch] = useReducer(supervisorGroupReducer,initialState);
    // Methods 
    const group = async(id,session,semester)=>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
         setAuthToken(localStorage.token);}
         try {
             const res = await axios.get(`/api/scholar/${id}/${semester}/${session}`);
             dispatch({type:GET_GROUP_SUCCESS,payload:res.data});
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
     }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }
    return (
        <SupervisorGroupContext.Provider
        value={{
            ...state,
            group,
            clearError
        }} >
            {props.children}
        </SupervisorGroupContext.Provider>
    )


}
export default SupervisorGroupState;