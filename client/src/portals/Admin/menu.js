import {
    UnorderedListOutlined,
    CalendarOutlined,
    FolderViewOutlined,
    MailOutlined,
    PlusCircleOutlined,
    DashboardOutlined
  } from '@ant-design/icons';

const menu =[
    {
        key:"/ad/",
        path:"/ad/",
        icon:<DashboardOutlined />,
        name:"Dashboard",
        children:null,
    },
    {
        key:"/ad/details",
        path:"/ad/details",
        icon:<DashboardOutlined />,
        name:"Details",
        children:null,
    },
    {
        key:"/ad/events",
        path:"/ad/events",
        icon:<CalendarOutlined />,
        name:"Events",
        children:null,
    },
    {
        key:"/ad/inbox",
        path:"/ad/inbox",
        icon:<MailOutlined />,
        name:"Inbox",
        children:null,
    },
    {
        key:"/ad/tasks",
        path:"/ad/tasks",
        icon:<UnorderedListOutlined />,
        name:"Tasks",
        children:null
    },
    {
        key:"/ad/files",
        path:"/ad/files",
        icon:<FolderViewOutlined />,
        name:"Files",
        children:null
    },
    {
        key:"/ad/add_new",
        path:"/ad/add_new",
        icon:<PlusCircleOutlined />,
        name:"Add New",
        children:null
    }
]

export default menu;
