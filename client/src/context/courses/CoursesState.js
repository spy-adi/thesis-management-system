import React, { useReducer, useContext } from "react";
import axios from "axios";
import CoursesContext from "./coursesContext";
import AuthContext from "../auth/authContext";
import ProgressReportContext from "../progressReport/progressReportContext";
import coursesReducer from "./coursesReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  ERROR,
  SUBMIT_COURSE_WAIVER,
  COURSE_WAIVER_SUBMITTED,
  COURSES_LOADED,
  CLEAR_ERRORS,
  LOADING,
  CW_DETAILS_LOADED,
} from "../types";

axios.create({
  responseType: "json",
});

const CoursesState = (props) => {
  const initialState = {
    courseWaiverSubmitted: false,
    proposedCourses: [],
    courses: [],
    loading: true,
    error: null,
  };

  const authContext = useContext(AuthContext);
  const progressReportContext = useContext(ProgressReportContext);

  const [state, dispatch] = useReducer(coursesReducer, initialState);

  const loadCourses = async (scholarId, semester, session) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      dispatch({ type: LOADING });
      const res = await axios.get(`/api/coursework/${scholarId}/${session}/${semester}`);
      dispatch({ type: COURSES_LOADED, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR, payload: error.message });
    }
  }

  const loadCourseWaiverDetails = async (scholarId, current_semester, current_session) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      let sem, session;
      if ( current_semester === 'Monsoon') {
        sem = 'Winter';
        session = current_session;
      }
      else {
        sem = 'Monsoon';
        session = `${parseInt(current_session.substr(0, 4)) + 1}-${parseInt(current_session.substr(5, 4)) + 1}`
      }
      const res = await axios.get(
        `/api/cwRequests/check/${scholarId}/${session}/${sem}`
      );
      dispatch({ type: CW_DETAILS_LOADED, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const submitCourseWaiverApplication = async (
    scholarId,
    current_semester,
    current_session,
    file
  ) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      dispatch({ type: SUBMIT_COURSE_WAIVER });
      let sem, session;
      if ( current_semester === 'Monsoon') {
        sem = 'Winter';
        session = current_session;
      }
      else {
        sem = 'Monsoon';
        session = `${parseInt(current_session.substr(0, 4)) + 1}-${parseInt(current_session.substr(5, 4)) + 1}`
      }
      const formData = new FormData();
      formData.append("scholarId", scholarId);
      formData.append("semester", sem);
      formData.append("session", session);
      formData.append("file", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        "http://localhost:3000/api/cwRequests/add",
        formData,
        config
      );
      dispatch({ type: COURSE_WAIVER_SUBMITTED });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <CoursesContext.Provider
      value={{
        ...state,
        submitCourseWaiverApplication,
        loadCourseWaiverDetails,
        loadCourses,
        clearErrors,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesState;
