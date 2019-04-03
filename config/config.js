const { NODE_ENV, APP_TYPE, TEST } = process.env;

export default {
    plugins:[
        [
            'umi-plugin-react',{
                antd:true,
                dva:true,
                locale: {
                    enable: true, // default false
                    default: 'zh-CN', // default zh-CN
                    baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
                  }
            }
        ]
    ],
    define: {
        APP_TYPE: APP_TYPE || '',
      },
    ignoreMomentLocale: true,
    routes:[
        {
            path:'/',
            component:'../layouts/BasicLayout',
            routes:[
            { path: '/', redirect: '/list/basic-list' },
                 // list
            {
            path: '/list',
            icon: 'table',
            name: 'list',
            routes: [
                {
                path: '/list/basic-list',
                name: 'basiclist',
                component: './List/BasicList',
                }       
            ],
            }
            ]
        }
    ]
}