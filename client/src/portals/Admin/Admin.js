import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, SideBar, Navbar } from "../../CommonComponents";
import {
  AddScholar,
  AddSupervisor,
  AddExaminer,
  Dashboard,
  AddNew,
  Details,
  Scholar,
  Supervisor,
  Examiner,
  Thesis,
  ThesisDetails,
  Events,
  Inbox,
  Email,
  Compose,
  Forms,
  Files,
  ScholarDetails,
  Tasks,
  CE,
  PSS,
  RPS,
  UploadForm,
  RTE,
  RTC,
  DSC
} from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Admin() {
  return (
    <>
      <Navbar menu={menu}/>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/details" element={<Details />} />
            <Route path="/events" element={<Events />} />
            <Route path="/files" element={<Files />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/inbox/email" element={<Email />} />
            <Route path="/inbox/compose" element={<Compose />} />
            <Route path="/details/scholar" element={<Scholar />} />
            <Route path="/details/scholar/Adm_No" element={<ScholarDetails />} />
            <Route path="/details/supervisor" element={<Supervisor />} />
            <Route path="/details/dsc" element={<DSC />} />
            <Route path="/details/examiner" element={<Examiner />} />
            <Route path="/details/thesis" element={<Thesis />} />
            <Route path="/details/forms" element={<Forms />} />
            <Route path="/details/thesis/thesis_id" element={<ThesisDetails />}/>
            <Route path="/add_new" element={<AddNew />} />
            <Route path="/add_new/scholar" element={<AddScholar />} />
            <Route path="/add_new/supervisor" element={<AddSupervisor />} />
            <Route path="/add_new/examiner" element={<AddExaminer />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/ce" element={<CE />} />
            <Route path="/tasks/pss" element={<PSS />} />
            <Route path="/tasks/rps" element={<RPS />} />
            <Route path="/tasks/upload_form" element={<UploadForm />} />
            <Route path="/tasks/request_thesis_consent" element={<RTC />} />
            <Route path="/tasks/request_thesis_evaluation" element={<RTE />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Admin;
