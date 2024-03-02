import {AUTH_ERROR, GET_GROUP_SUCCESS,CLEAR_ERRORS } from "../types";
    const supervisorGroupReducerfunc = (state,action)=>{
        switch(action.type){
            case GET_GROUP_SUCCESS:
                state["scholars"]=action.payload;
                // return {...state,scholars:[action.payload]}
                return state;
            case CLEAR_ERRORS:
                return{ ...state,error:null}
            case AUTH_ERROR:
                return{...state,error:action.payload};
    
            default:return state;
        }
    }
    export default supervisorGroupReducerfunc;