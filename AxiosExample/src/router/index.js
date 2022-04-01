import { createRouter, createWebHashHistory} from "vue-router";
import UserList from '../view/UserList'
import NewUser from '../view/NewUser'
import EditUser from '../view/EditUser'
import UserDetails from '../view/UserDetails';

const  routes = [
    {
        path:'/',
        component: UserList
    },
    {
        path:'/newuser',
        component: NewUser
    },
    {
        path:'/user/:id/edit',
        component: EditUser
    },
    {
        path:'/user/:id/details',
        component: UserDetails
    }
];

const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;