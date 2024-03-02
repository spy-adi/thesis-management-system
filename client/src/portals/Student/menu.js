import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    AppstoreOutlined,
    HomeOutlined,
    UserOutlined
  } from '@ant-design/icons';

const menu =[
    {
        key:"/st/",
        path:"/st/",
        icon:<HomeOutlined />,
        name:"Home",
        children:null,
    },
    {
        key:"/st/profile",
        path:"/st/profile",
        icon:<UserOutlined />,
        name:"My profile",
        children:null,
    },
    // {
    //     key:"/st/courses",
    //     path:"/st/courses",
    //     icon:<DesktopOutlined />,
    //     name:"Courses",
    //     children:null,
    // },
    {
        key:"/st/progress-report",
        path:"/st/progress-report",
        icon:<PieChartOutlined />,
        name:"Progress report",
        children:null,
    },
    {
        key:"/st/myprojectOverview",
        path:"/st/myprojectOverview",
        icon:<DesktopOutlined />,
        name:"My Project",
        children:null,
    },
    // {
    //     key:'/st/myprojectForums',
    //     path:'/st/myprojectForums',
    //     icon:<FileOutlined/>,
    //     name:"Forums",
    //     children:null,
    // },
    {
        key:"sub1",
        icon:<FileOutlined/>,
        name:"Thesis",
        children:[
            {
                key:"/st/thesis/draft",
                path:"/st/thesis/draft",
                name:"Draft",
            },
            {
                key:"/st/thesis/submission",
                path:"/st/thesis/submission",
                name:"Submission",
            },
            {
                key:"/st/thesis/completed",
                path:"/st/thesis/completed",
                name:"Completed",
            }
        ]
    },
    {
        key:"sub2",
        icon:<AppstoreOutlined/>,
        name:"More",
        children:[
            {
                key:"/st/forms",
                path:"/st/forms",
                name:"Forms",
            },
            {
                key:"/st/course-waiver",
                path:"/st/course-waiver",
                name:"Course Waiver",
            },
            {
                key:"/st/supervisor-selection",
                path:"/st/supervisor-selection",
                name:"Supervisor Selection",
            }
        ]
    }
]

export default menu;