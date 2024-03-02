import React,{useReducer} from "react";
import axios from "axios";
import ScholarContext from "./scholarContext";
import scholarReducer from "./scholarReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_SCHOLAR_DETAILS_SUCCESS,CLEAR_ERRORS } from "../types";
axios.create({
    responseType: 'json'
});
const ScholarState = (props)=>{
    const initialState = {
        scholarDetails:null,
        dsc:null,
        supervisor:null,
        co_supervisor:null,
        error:null
    }
    const [state,dispatch] = useReducer(scholarReducer,initialState);
    const getScholarDetails = async(id)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/scholar/${id}`);
            let photo = await axios.get(`/api/auth/getPhoto/${res.data.photo}`, {responseType: 'blob'});
            photo = new Blob([photo.data], {type:photo.data.type});
            dispatch({type:GET_SCHOLAR_DETAILS_SUCCESS,payload:{...res.data, photo: URL.createObjectURL(photo)}});
        } catch (error) {
            console.log(error);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }

    return (
    <ScholarContext.Provider
        value={{
            ...state,
            getScholarDetails,
            clearError
        }}
    >
        {props.children}
    </ScholarContext.Provider>
    )





}
export default ScholarState;