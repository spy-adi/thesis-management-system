import React,{useContext} from "react";
import Selector from "./Selector";
import { Typography } from "@material-ui/core";
import { Button, Form } from "antd";
import AuthContext from "../context/auth/authContext";

function Session(props) {
  const Session = ["2021-2022", "2020-2021", "2019-2020"];
  const Semester = ["Monsoon", "Winter"];
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {profId} = user.dataValues;

  function onFinish(e) {
    const{current_semester,current_session} = e;
    props.group(profId,current_session.value,current_semester.value);
  }

  function onFinishFailed(errorInfo) {
    if (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  }

  function handleClick(params) {
    props.onClick(params);
  }
  const style = props.style;
  return (
    <div className="container-fluid" style={style}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ current_session:Session[0],current_semester:Semester[0] }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="current_session"
          label={
            <Typography
              style={{
                color: "#001529",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "Open Sans",
              }}
            >
              Session Year
            </Typography>
          }
        >
          <Selector
            id="Session"
            list={Session}
            placeholder={Session[0]}
            style={{
              width: "200px",
              height: "40px",
            }}
          />
        </Form.Item>
        <Form.Item
          name="current_semester"
          label={
            <Typography
              style={{
                color: "#001529",
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: "Open Sans"
              }}
            >
              Session
            </Typography>
          }
        >
          <Selector
            id="Semester"
            list={Semester}
            placeholder={Semester[0]}
            style={{
              width: "200px",
              height: "40px",
            }}
          />
        </Form.Item>
        <Form.Item style={{textAlign:"center"}}>
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Show
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Session;