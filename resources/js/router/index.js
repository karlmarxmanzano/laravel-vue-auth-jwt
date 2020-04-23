import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Dashboard from "../views/Dashboard";

import Role from "../views/Role";
import RoleList from "../views/RoleList";
import RoleForm from "../views/RoleForm";

import Permission from "../views/Permission";
import PermissionList from "../views/PermissionList";
import PermissionForm from "../views/PermissionForm";
import PermissionView from "../views/PermissionView";

import store from "../store/index";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/signin",
        name: "signin",
        component: SignIn
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/permissions",
        name: "permissions",
        component: Permission
    },
    {
        path: "/roles/list",
        name: "permission-list",
        component: PermissionList
    },
    {
        path: "/permissions/create",
        name: "permissions-create",
        component: PermissionForm
    },
    {
        path: "/permissions/:id",
        name: "permission-view",
        component: PermissionView
    },
    {
        path: "/permissions/:id/edit",
        name: "permission-edit",
        component: PermissionForm
    },
    {
        path: "/roles",
        name: "role",
        component: Role
    },
    {
        path: "/roles/list",
        name: "role-list",
        component: RoleList
    },
    {
        path: "/roles/create",
        name: "role-create",
        component: RoleForm
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
