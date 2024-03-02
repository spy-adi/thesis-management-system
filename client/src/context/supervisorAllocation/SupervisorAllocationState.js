import React,{useReducer} from "react";
import axios from "axios";
import SupervisorAllocationContext from "./supervisorAllocationContext";
import supervisorAllocationReducer from "./supervisorAllocationReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR,SA_POST_SUCCESS,CLEAR_ERRORS,GET_SA_SUCCESS } from "../types";
axios.create({
    
    responseType: 'json'
})

const SupervisorAllocationState = (props)=>{
    const initialState = {
        error:null,
        supervisorList:null,
        checked:false

    }
    const [state,dispatch] = useReducer(supervisorAllocationReducer,initialState);
    const allocateSupervisor = async data =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            console.log(data);
            const saList = {P1:data[0].name,P2:data[1].name,P3:data[2].name,P4:data[3].name,P5:data[4].name,scholarAdmn:data[5]};
            const res = await axios.post("/api/supervisorAllocation/addSA",saList,config);
            dispatch({type:SA_POST_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }
    const getSaList = async admn =>{
        if(localStorage.token){
            setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/supervisorAllocation/${admn}`);
            dispatch({type:GET_SA_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
         
    }

    return (
    <SupervisorAllocationContext.Provider
        value={{
            ...state,
            allocateSupervisor,
            getSaList,
            clearError
        }}
    >
        {props.children}
    </SupervisorAllocationContext.Provider>
    )





}
export default SupervisorAllocationState;