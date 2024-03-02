import React,{useReducer} from "react";
import axios from "axios";
import ActivityPlanContext from "./activityPlanContext";
import activityPlanReducer from "./activityPlanReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_AP_DETAILS_SUCCESS,AP_UPDATE_SUCCESS } from "../types";
axios.create({
    responseType: 'json'
});

const ActivityPlanState = (props)=>{
    const initialState = {
        activityPlan:null,
        checkedAp:false,
        error:null
    }
    const [state,dispatch] = useReducer(activityPlanReducer,initialState);
    const getActivityPlanDetails = async(id)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/activityPlan/${id}`); 
            dispatch({type:GET_AP_DETAILS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }
    const updateActivityPlan = async (data,id) =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post(`/api/activityPlan/${id}`,data);
            dispatch({type:AP_UPDATE_SUCCESS,payload:res.data});
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
    }
    return (
    <ActivityPlanContext.Provider
        value={{
            ...state,
            getActivityPlanDetails,
            updateActivityPlan
        }}
    >
        {props.children}
    </ActivityPlanContext.Provider>
    )





}
export default ActivityPlanState;