import {AUTH_ERROR,SA_POST_SUCCESS, GET_SA_SUCCESS,CLEAR_ERRORS } from "../types";
    const supervisorAllocationReducerfunc = (state,action)=>{
        switch(action.type){
            case SA_POST_SUCCESS:
                return {...state,supervisorList:action.payload}
            case CLEAR_ERRORS:
                return{ ...state,error:null}
            case GET_SA_SUCCESS:
                return{ ...state,supervisorList:action.payload,checked:true}
            case AUTH_ERROR:
                return{...state,error:action.payload};
    
            default:return state;
        }
    }
    export default supervisorAllocationReducerfunc;