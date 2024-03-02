import {
  ERROR,
  SUBMIT_COURSE_WAIVER,
  COURSE_WAIVER_SUBMITTED,
  CLEAR_ERRORS,
  CW_DETAILS_LOADED,
  LOADING,
  COURSES_LOADED,
} from "../types";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case LOADING:
    case SUBMIT_COURSE_WAIVER:
      return {
        ...state,
        loading: true,
      };
    case COURSE_WAIVER_SUBMITTED:
      return {
        ...state,
        courseWaiverSubmitted: true,
        loading: false,
      };
    case CW_DETAILS_LOADED:
      if (action.payload.proposed) {
        const proposed = action.payload.proposed.map((element, index) => {
          return {
            ...element,
            sno: index + 1,
          };
        });
        return {
          ...state,
          courseWaiverSubmitted: action.payload.result,
          proposedCourses: proposed,
          loading: false,
        };
      }
      else {
        return {
          ...state,
          courseWaiverSubmitted: action.payload.result,
          loading: false,
        }
      }
    case COURSES_LOADED:
      if (action.payload.courses) {
        const courses = action.payload.courses.map((element, index) => {
          return {
            ...element,
            sno: index + 1,
          };
        });
        return {
          ...state,
          courses: courses,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducerFunc;
