import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { AUTH_ERROR, CLEAR_ERRORS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, USER_LOADED } from "../types";
import setAuthToken from "../../utils/setAuthToken";
axios.create({
    
    responseType: 'json'
})

const AuthState = props =>{
    
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated:null, // obviously it cant be true , suppose if we keep it as false first its gonna redirect me to login page it is ok at the starting but after logging in(where we set its value as true and we also get the token which gets stored in the localstorage) and getting the home page suppose i refresh the page the application starts again and its value will be false and it redirects to login page but we are authenticated and we have the token in the localstorage after every refresh we have to login which is not feasible so its initial value will be null 
        loading:true, 
        user:null,
        notifications: [],
        unreadNotifications: 0,
        error:null
    }

    const [state,dispatch] = useReducer(authReducer,initialState);
    const {token,isAuthenticated, notifications, unreadNotifications ,loading,user,error} = state;

    // Methods
    const loadUser = async () =>{
        // setting token in the global header ie x-auth-token = token 
        if(localStorage.token){
            setAuthToken(localStorage.token);
        }
        
        try {
            const res = await axios.get("/api/auth");
            let photo = await axios.get(`/api/auth/getPhoto/${res.data.dataValues.photo}`, {responseType: 'blob'});
            photo = new Blob([photo.data], {type:photo.data.type});
            dispatch({type:USER_LOADED,payload:{...res.data, dataValues: {...res.data.dataValues, photo: URL.createObjectURL(photo)}}});
        } catch (error) {
            console.log(error);
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
            
        }
    }
    const login = async formData =>{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/api/auth",formData,config);
            dispatch({type:LOGIN_SUCCESS,payload:res.data});
            loadUser();
        } catch (error) {
            console.log(error.response.data);
            dispatch({type:LOGIN_FAIL,payload:error.response.data.msg});
        }
    }
    const clearError = () =>{
        dispatch({type:CLEAR_ERRORS});
    }
    const logout = ()=>{
        dispatch({type:LOGOUT});
    }

    return (
        <AuthContext.Provider
        value={{
            token,
            isAuthenticated,
            notifications,
            unreadNotifications,
            loading,
            user,
            error,
            login,
            loadUser,
            clearError,
            logout
        }} >
            {props.children}
        </AuthContext.Provider>
    )


}
export default AuthState;