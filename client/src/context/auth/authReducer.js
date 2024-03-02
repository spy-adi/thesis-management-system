import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED,LOGOUT } from "../types";

const reducerfunc = (state,action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token",action.payload.token)
            return{
                ...state,
                ...action.payload, 
                isAuthenticated:true,
                loading:false

            };
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
            localStorage.removeItem("token")
            return{
                ...state,
                token:null, 
                isAuthenticated:false,
                error:action.payload,
                loading:false,
                user:null 

            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        case USER_LOADED:
            return{
                ...state,
                user:action.payload,
                notifications: action.payload.notifications,
                unreadNotifications: action.payload.unreadNotifications,
                isAuthenticated:true,
                loading:false
            }
        default:
            return state;
    }


}

export default reducerfunc;