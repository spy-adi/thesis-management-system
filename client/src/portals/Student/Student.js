import React from "react";
import { Layout } from "antd";
import { Navbar, Headerr, SideBar, Footerr } from "../../CommonComponents";
import {
  Home,
  Profile,
  Courses,
  CourseWaiver,
  ProgressReport,
  Overview,
  ActivityPlan,
  Forums,
  Final,
  Supervisor,
  Forms,
  Submission,
  Confirmation,
  ForumsDetails,
  Draft,
  Completed,
} from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Student() {
  return (
    <>
      <Navbar menu={menu}/>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/course-waiver" element={<CourseWaiver />} />
            <Route path="/supervisor-selection" element={<Supervisor />} />
            <Route path="/progress-report" element={<ProgressReport />} />
            <Route path="/myprojectOverview" element={<Overview />} />
            <Route path="/myprojectActivityPlan" element={<ActivityPlan />} />
            <Route path="/myprojectForums" element={<Forums />} />
            <Route path="/myprojectForums" element={<Forums />} />
            <Route path="/myprojectForums/:thread_title_id" element={<ForumsDetails />} />
            <Route path="/myprojectFinal" element={<Final />} />
            <Route path="/thesis/submission" element={<Submission />} />
            <Route path="/thesis/confirmation" element={<Confirmation />} />
            <Route path="/thesis/draft" element={<Draft />} />
            <Route path="/thesis/completed" element={<Completed />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}
export default Student;
