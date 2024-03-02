import {  AUTH_ERROR, GET_AP_DETAILS_SUCCESS,AP_UPDATE_SUCCESS } from "../types";
const activityPlanReducerfunc = (state,action)=>{
    switch(action.type){
        case GET_AP_DETAILS_SUCCESS:
        case AP_UPDATE_SUCCESS:
            return {...state,activityPlan:action.payload,checkedAp:true}
        case AUTH_ERROR:
            return{...state,error:action.payload};

        default:return state;
    }
}
export default activityPlanReducerfunc;