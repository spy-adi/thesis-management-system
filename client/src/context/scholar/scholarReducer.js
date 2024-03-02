import { GET_SCHOLAR_DETAILS_SUCCESS,AUTH_ERROR,CLEAR_ERRORS } from "../types";
const scholarReducerfunc = (state,action)=>{
    switch(action.type){
        case GET_SCHOLAR_DETAILS_SUCCESS:
            const {dscId,supervisorId,co_supervisorId} = action.payload;
            return {...state,scholarDetails:action.payload,dsc:dscId,supervisor:supervisorId,co_supervisor:co_supervisorId};
        case CLEAR_ERRORS:
            return{ ...state,error:null}
        case AUTH_ERROR:
            return{...state,error:action.payload};

        default:return state;
    }
}
export default scholarReducerfunc;