import { GET_DSC_DETAILS_SUCCESS,AUTH_ERROR } from "../types";
const dscReducerfunc = (state,action)=>{
    switch(action.type){
        case GET_DSC_DETAILS_SUCCESS:
            if(action.payload!==null){
        const {member1,member2,member3,member4,member5,chairman}=action.payload;
        return {...state,dscDetails:action.payload,chairman:chairman, 
            members:[member1,member2,member3,member4,member5]
        };}
        else return {...state}
        case AUTH_ERROR:
            return{...state,error:action.payload};

        default:return state;
    }
}
export default dscReducerfunc;