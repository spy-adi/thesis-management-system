import React, { useState,useEffect,useContext } from "react";
import { Layout } from "antd";
import {Navigate} from "react-router-dom";
import Alert from "../CommonComponents/Alert";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";
import Spinner from "../CommonComponents/Spinner";
export default function Login(props) {
  const [user,setUser] = useState({
    id:"",
    password:""
});
const {id,password} = user;
const alertContext = useContext(AlertContext);
const authContext = useContext(AuthContext);
const {setAlert} = alertContext;
const {login,error,isAuthenticated,clearError,loadUser} = authContext;
useEffect(()=>{
    if(error==="Invalid Credentials"){
        setAlert(error);
        clearError();
    }
    // eslint-disable-next-line
},[error]);
const onChange = e =>{setUser({...user,[e.target.name]:e.target.value})};
const onSubmit = async e =>{
    e.preventDefault();
    if(id===""||password===""){
        setAlert("Please enter all the fields");
    }
    else{
        await login(user);
    }
}
if (isAuthenticated){ 
  if(authContext.user===null){
    <Spinner/>
  }
  else{ 
    const designation = authContext.user.designation;
    if(designation==="scholar")return <Navigate to='/st/' />
    if(designation==="professor")return <Navigate to='/sp/' />
    if(designation==="admin")return <Navigate to='/ad/' />
    if(designation==="examiner")return <Navigate to='/ex/' />
  }
}

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Layout className="site-layout">
          <div className="container-fluid" style={{minHeight:"100vh",backgroundColor:"#001529",display:"flex",alignItems:"center",justifyContent: "center"}}>
            <div
              className="card"
              style={{ margin: "5% 10%", borderRadius: "1rem" }}
            >
              <div className="card-body">
                <div class="row">
                  <div class="col-xs-12 col-md-6 col-lg-6 text-center">
                    <img
                      class="img-fluid"
                      src="https://parent.iitism.ac.in//assets/img/iit.png"
                      alt=""
                      style={{ width: "50%", marginTop: "10%" }}
                    />
                    <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/a15.pdf">
                      <p style={{ color: "red" }}>
                        If you are unable to Login or having any Academic
                        related grievances please click here
                      </p>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-6 col-lg-6 text-center">
                    <div class="card">
                      <div
                        class="card-header h6"
                        style={{ fontWeight: "bold", fontFamily: "Open Sans" }}
                      >
                        Thesis Management System
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="form-group" style={{ margin: "8%" }}>
                            <input
                              name="id"
                              onChange={onChange}
                              class="form-control"
                              placeholder="Enter Admission Number"
                            />
                          </div>
                          <div class="form-group" style={{ margin: "8%" }}>
                            <input
                              type="password"
                              name="password"
                              onChange={onChange}
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div class="form-group" style={{ margin: "8%" }}>
                            <div
                              class="g-recaptcha"
                              data-sitekey="6LfTVI0dAAAAABKWPpH9gvbfMcPhMsnnPPlTlmJK"
                            ></div>
                          </div>
                            <button
                              type="submit"
                              style={{ width: "80%", marginTop: "3%" }}
                              class="btn btn-primary"
                              onClick={onSubmit}
                            >
                              Login
                            </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </Layout>
  );
}
