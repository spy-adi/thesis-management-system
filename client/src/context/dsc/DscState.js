import React,{useReducer} from "react";
import axios from "axios";
import DscContext from "./dscContext";
import dscReducer from "./dscReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_DSC_DETAILS_SUCCESS } from "../types";
axios.create({
    
    responseType: 'json'
})

const DscState = (props)=>{
    const initialState = {
        dscDetails:null,
        chairman:null,
        members:[],
        error:null
    }
    const [state,dispatch] = useReducer(dscReducer,initialState);
    const getDscDetails = async(id)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/dsc/${id}`); //st/api/dsc/id 
            dispatch({type:GET_DSC_DETAILS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }
    return (
    <DscContext.Provider
        value={{
            ...state,
            getDscDetails
        }}
    >
        {props.children}
    </DscContext.Provider>
    )





}
export default DscState;