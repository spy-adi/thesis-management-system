import {AUTH_ERROR,EVAL_POST_SUCCESS,HF_POST_SUCCESS,CLEAR_ERRORS,GET_EVAL_SUCCESS,GET_HF_SUCCESS,TES_UPDATE_SUCCESS, SET_SUBMITTING_TRUE } from "../types";
    const examinerReducerfunc = (state,action)=>{
        switch(action.type){
            case EVAL_POST_SUCCESS:
                return {...state,evaluation:action.payload,checkedEval:true, submitting:false};
            case GET_EVAL_SUCCESS:
                return {...state,evaluation:action.payload,checkedEval:true};
            case SET_SUBMITTING_TRUE:
                return {...state, submitting: true};
            case HF_POST_SUCCESS:
            case GET_HF_SUCCESS:
                return {...state,honorariumForm:action.payload,checkedHf:true}
            case CLEAR_ERRORS:
                return{ ...state,error:null}
            case AUTH_ERROR:
                return{...state,error:action.payload, submitting: null};
            case TES_UPDATE_SUCCESS:
                return{...state,examiner:action.payload}
    
            default:return state;
        }
    }
    export default examinerReducerfunc;