import React,{useReducer} from "react";
import axios from "axios";
import ProgressReportContext from "./progressReportContext";
import progressReportReducer from "./progressReportReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_STATUS_SUCCESS,GET_REPORTS_SUCCESS, GET_PSS_APPLIED, GOT_PSS_APPLIED } from "../types";
axios.create({
    responseType: 'json'
})

const ProgressReportState = (props)=>{
    const initialState = {
        ceRep:null,
        rpsRep:null,
        pssRep:null,
        thesisEvaluation:null,
        vivaVoiceRep:null,
        progressReport:null,
        pssApplied:false,
    }
    const [state,dispatch] = useReducer(progressReportReducer,initialState);
    const getProgressDetails = async(id)=>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
         setAuthToken(localStorage.token);}
         try {
            const res = await axios.get(`/api/progressReport/${id}`);
            console.log(res);
            dispatch({type:GET_STATUS_SUCCESS,payload:res.data});
             
         } catch (error) {
             dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
         }
      
     }

    const getReports = async(id,designation)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            let res;
            if(designation==="ceRep") res = axios.get(`/api/ceRep/${id}`);
            if(designation==="rpsRep") res = axios.get(`/api/rpsRep/${id}`);
            if(designation==="pssRep") res = axios.get(`/api/pssRep/${id}`);
            if(designation==="thesisEvaluation") res = axios.get(`/api/overallThesisEval/${id}`);
            if(designation==="vivaVoiceRep") res = axios.get(`/api/vivaVoice/${id}`);
            dispatch({type:GET_REPORTS_SUCCESS,payload:{response:res.data,designation}});
            
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }

    const getPssApplied = async (scholarId) => {
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get(`/api/pssRequest/${scholarId}`);
            dispatch({type:GOT_PSS_APPLIED,payload:res.data!==null});
            
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }

    return (
    <ProgressReportContext.Provider
        value={{
            ...state,
            getProgressDetails,
            getPssApplied,
            getReports
        }}
    >
        {props.children}
    </ProgressReportContext.Provider>
    )





}
export default ProgressReportState;