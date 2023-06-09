export default [
    {
        path: '/',
        name: 'root',
        component: () => import('../components/layout.vue'),
        redirect: '/root',
        children: [
            {
                path: 'root',
                component: () => import('../App.vue')
            },
            {
                path: 'home',
                name: 'homepage',
                component: () => import('../views/homepage/index.vue')
            },
            {
                name: '3d-case1',
                path: '3d-case1',
                component: () => import('../components/threejs_3D_case1.vue')
            },
            {
                path: 'user',
                name: 'username',
                component: import('../views/user/index.vue'),
                children: [
                    {
                        path: '',
                        component: import('../views/user/user-children.vue')
                    }
                ]
            },
            {
                name: 'case',
                path: 'case/:id',
                component: () => import('../views/caseList/dynamics.vue')
            },
            {
                name: 'css',
                path: 'css',
                component: () => import('../views/css/index.vue'),
                children: [
                    {
                        name: 'action',
                        path: '/css/action',
                        component: () => import('../views/css/action/index.vue')
                    }
                ]
            }
        ]
    }
]