import React,{useReducer} from "react";
import axios from "axios";
import ExaminerContext from "./examinerContext";
import examinerReducer from "./examinerReducer";
import { AUTH_ERROR,EVAL_POST_SUCCESS,HF_POST_SUCCESS,CLEAR_ERRORS,GET_EVAL_SUCCESS,GET_HF_SUCCESS,TES_UPDATE_SUCCESS, SET_SUBMITTING_TRUE } from "../types";
import setAuthToken from "../../utils/setAuthToken";
axios.create({
    responseType: 'json'
})

const ExaminerState = (props)=>{
    const initialState = {
        honorariumForm:null,
        evaluation:null,
        checkedHf:false,
        checkedEval:false,
        submitting: null,
        examiner:null,
        error:null
    }
    const [state,dispatch] = useReducer(examinerReducer,initialState);
    const submitEval = async formData =>{
        dispatch({type:SET_SUBMITTING_TRUE});
        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
        try {
            const res = await axios.post("/api/thesisEval/addThesisEval",formData,config);
            dispatch({type:EVAL_POST_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const submitHonorariumForm = async formData =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/api/honorariumForm/addHonorariumForm",formData,config);
            dispatch({type:HF_POST_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const setThesisEvalInExaminer=async (data,id)=>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post(`/api/examiner/${id}`,data);
            dispatch({type:TES_UPDATE_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }
    const getEval = async(id)=>{
        if(localStorage.token){
            setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/thesisEval/${id}`);
            dispatch({type:GET_EVAL_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
         
    }
    const getHf = async id =>{
        if(localStorage.token){
            setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/honorariumForm/${id}`);
                dispatch({type:GET_HF_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
         
    }

    return (
    <ExaminerContext.Provider
        value={{
            ...state,
            submitEval,
            submitHonorariumForm,
            setThesisEvalInExaminer,
            getEval,
            getHf,
            clearError
        }}
    >
        {props.children}
    </ExaminerContext.Provider>
    )





}
export default ExaminerState;