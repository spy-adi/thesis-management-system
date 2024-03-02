/* eslint-disable no-template-curly-in-string */
import React, {useContext, useEffect} from 'react'
import { Layout,} from 'antd';
import { Form, Input, Button } from 'antd';
import MaterialTable from "material-table";
import { MyProjectNav } from '../../components'
import ForumContext from '../../../../context/forum/forumContext';
import AuthContext from '../../../../context/auth/authContext';
import Spinner from '../../../../CommonComponents/Spinner';
const {Content} = Layout;

function Forums() {
  const [form] = Form.useForm()
  const forumContext = useContext(ForumContext);
  const authContext = useContext(AuthContext);
  const{user} = authContext;
  const{error,threads,getThreads,postThread,checked} = forumContext;
  console.log(user);
  useEffect(()=>{
    getThreads();
  },[]);
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  function onFinish(e){
    console.log(e);
    postThread(e);
  }
  if(checked===false) return <Spinner/>
  else{
    const data = (threads===null?[
      {
        sr: "-",
        title: <a href='#'>-</a>,
        desc: "-",
        by: "-",
        designation: "-",
        date: "-",
      },
    ]:threads.map((thread,index)=>{
      return(
        {
          sr: index+1,
          title: <a href={`/st/myprojectForums/${thread.id}`}>{thread.title}</a>,
          desc: thread.desc,
          by: thread.posted_by_name,
          designation: thread.posted_by,
          date: (thread.createdAt).substring(0,10),
        }
      )
    }))
    console.log(user);
    const columns = [
      { title: "Sr. No.", field: "sr" },
      { title: "Thread Title", field: "title" },
      { title: "Description", field: "desc" },
      { title: "Posted By", field: "by" },
      { title: "Scholar/Professor", field: "designation" },
      { title: "Date", field: "date" },
    ];
    return (
      <Content style={{ margin: "25px 25px" }}>
        <div
          className="site-layout-background row"
          style={{ padding: 24, minHeight: 400 }}
        >
          <div
            className="rounded border border-2"
            style={{ marginBottom: "10px" }}
          >
            <h2 className="text-secondary">
              <u>Create New Thread</u>
            </h2>
            <Form
              {...layout}
              name="nest-messages"
              form={form}
              initialValues={{
               remember: true,
               posted_by: user.designation,
               posted_by_id: user.designation==="scholar"?user.dataValues.admn:user.dataValues.profId,
               posted_by_name: user.dataValues.name
                }}
               onFinish={onFinish}
            >
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter the title!'
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="desc"
                label="Description"
                style={{ flex: "0" }}
                rules={[
                  {
                    required: true,
                    message: 'Please enter the description!'
                  },
                ]}
              >
                <Input.TextArea style={{ height: "100px", float: "left" }} />
              </Form.Item>
              <Form.Item hidden name="posted_by" >
                <Input  type="hidden"   />
              </Form.Item>
              <Form.Item hidden name="posted_by_id">
                <Input type="hidden"  />
              </Form.Item>
              <Form.Item hidden name="posted_by_name">
                <Input type="hidden" />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ float: "center" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="rounded border border-2">
            <MaterialTable
              title=""
              columns={columns}
              data={data}
              options={{
                toolbar: false,
                paging: false,
              }}
              style={{ boxShadow: "none" }}
            />
          </div>
        </div>
      </Content>
    );
  }
  
}

export default Forums;
