import React from "react";
import { Layout } from "antd";
import { Navbar, Headerr, SideBar, Footerr } from "../../CommonComponents";
import { Home, Profile, Overview, Thesis, RPS, CE,PSS,VivaReport,Forms, ScholarDetails, ThesisDetails,ThesisResults, MyProject, MyProjectOverview, MyProjectActivityPlan, MyProjectFinal, Forums, ForumsDetails } from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Supervisor() {
  return (
    <>
      <Navbar menu={menu} />
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mygroupoverview" element={<Overview />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/thesis/:Adm_No/:id" element={<ThesisDetails />} />
            <Route path="/thesis/results/:Adm_No/:id" element={<ThesisResults />} />
            <Route path="/rps" element={<RPS />} />
            <Route path="/ce" element={<CE />} />
            <Route path="/pss" element={<PSS />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/vivareport" element={<VivaReport />} />
            <Route path="/myproject" element={<MyProject />} />
            <Route path="/myproject/:scholar/:project_id" element={<MyProjectOverview />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/:thread_title_id" element={<ForumsDetails />} />
            <Route path="/myproject/:scholar/:project_id/activityplan" element={<MyProjectActivityPlan />} />
            <Route path="/myproject/:scholar/:project_id/final" element={<MyProjectFinal />} />
            <Route path="/mygroupoverview/:Adm_No" element={<ScholarDetails />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}
export default Supervisor;
