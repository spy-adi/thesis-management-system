import React,{useContext, useEffect,useState} from "react";
import ForumContext from '../../../../context/forum/forumContext';
import AuthContext from "../../../../context/auth/authContext";
import Spinner from '../../../../CommonComponents/Spinner';
import Replies from "../../components/Replies";
import { useParams } from 'react-router-dom';
import TextArea from "antd/lib/input/TextArea";
import { Layout, Divider,Button ,Form,Input,Modal} from "antd";
const { Content } = Layout;


function ForumsDetails() {
  const [form] = Form.useForm();
  const { thread_title_id } = useParams();
  console.log(thread_title_id);
  const forumContext = useContext(ForumContext);
  const authContext = useContext(AuthContext);
  const{user} = authContext;
  const{threads,postReply,getThreads} = forumContext;
  const [isModalVisible, setIsModalVisible] = useState(false);
  function showUploadDialog() {
    setIsModalVisible(true);
  }
  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }
  const onFinishReply = (e) => {
    postReply(e)
    form.resetFields()
    setIsModalVisible(false)
  }
  useEffect(()=>{
    getThreads();
  },[]);
  if(threads===null) return <Spinner/>
  const filteredThread = threads[thread_title_id-1];
  console.log(filteredThread);
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background container-fluid"
        style={{ padding: 24, minHeight: 400 }}
      >
      <div className="row">
        <div className='col-2' style={{padding:'10px'}}>
            <Button type="primary"><a href='/st/myprojectForums'>Back</a></Button>
        </div>
        <div className="col-10">
            <h2>{filteredThread.title}</h2>
            <p><b>By: {filteredThread.posted_by_name}</b><br />{filteredThread.posted_by}</p>
        </div>
        </div>
        <Divider />
        <div className="row" style={{borderBottom:'1px solid black'}}>
        <div className='col-2' style={{padding:'10px'}}>
            
        </div>
        <div className="col-10">
            <p>{filteredThread.desc}</p>
        </div>
        </div>
        <h2><u>Comments</u></h2>
        <Button onClick={showUploadDialog}type="link" type='primary'>Add new comment</Button>
        <Modal
          title="Forum Reply"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
              <Button key="back" onClick={handleCancel}>
                  Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={form.submit}>
                  Submit
              </Button>,
          ]}
          >
              <Form form={form} onFinish={onFinishReply} scrollToFirstError
              initialValues={{
               remember: true,
               posted_by: user.designation,
               posted_by_id: user.designation==="scholar"?user.dataValues.admn:user.dataValues.profId,
               posted_by_name: user.dataValues.name,
               forumThreadId:thread_title_id
                }}
              >
                  <Form.Item name="content"
                  rules={[
                  {
                    required: true,
                    message: 'Please enter the reply!'
                  },
                ]}>
                      <TextArea autoSize={{minRows:5}}/>
                  </Form.Item>
                  <Form.Item hidden name="posted_by">
                      <Input type="hidden"  />
                  </Form.Item>
                  <Form.Item hidden name="posted_by_id">
                      <Input type="hidden" />
                  </Form.Item>
                  <Form.Item hidden name="posted_by_name">
                      <Input type="hidden" />
                  </Form.Item>
                    <Form.Item hidden name="forumThreadId">
                      <Input type="hidden" />
                 </Form.Item>
              </Form>
            </Modal>
        <Replies thread_title_id={thread_title_id} />      
      </div>
    </Content>
  );
}

export default ForumsDetails;
