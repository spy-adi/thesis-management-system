import { GET_PROF_DETAILS_SUCCESS,AUTH_ERROR,CLEAR_ERRORS, UPLOAD, UPLOAD_SUCCESS } from "../types";
const profReducerfunc = (state,action)=>{
    switch(action.type){
        case UPLOAD:
            return {...state, uploading: true};
        case UPLOAD_SUCCESS:
            return {...state, uploading: false};
        case GET_PROF_DETAILS_SUCCESS:
            if(action.payload.designation==="membersDetails") return {...state,membersDetails:[...state.membersDetails,action.payload.response]};
            return {...state,[action.payload.designation]:action.payload.response};
        case CLEAR_ERRORS:
            return{ ...state,error:null}
        case AUTH_ERROR:
            return{...state,error:action.payload, uploading: false};

        default:return state;
    }
}
export default profReducerfunc;