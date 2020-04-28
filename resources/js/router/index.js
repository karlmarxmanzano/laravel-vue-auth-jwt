import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Dashboard from "../views/Dashboard";

import Permission from "../views/Permission";
import PermissionCreate from "../views/PermissionCreate";
import PermissionList from "../views/PermissionList";
import PermissionView from "../views/PermissionView";
import PermissionEdit from "../views/PermissionEdit";

import Role from "../views/Role";
import RoleCreate from "../views/RoleCreate";
import RoleList from "../views/RoleList";
import RoleView from "../views/RoleView";
import RoleEdit from "../views/RoleEdit";

import User from "../views/User";
import UserCreate from "../views/UserCreate";
import UserView from "../views/UserView";
import UserEdit from "../views/UserEdit";

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
    path: "/permissions/create",
    name: "permissions-create",
    component: PermissionCreate
  },
  {
    path: "/roles/list",
    name: "permission-list",
    component: PermissionList
  },
  {
    path: "/permissions/:id",
    name: "permission-view",
    component: PermissionView
  },
  {
    path: "/permissions/:id/edit",
    name: "permission-edit",
    component: PermissionEdit,
    props: true
  },
  {
    path: "/roles",
    name: "roles",
    component: Role
  },
  {
    path: "/roles/create",
    name: "role-create",
    component: RoleCreate
  },
  {
    path: "/roles/list",
    name: "role-list",
    component: RoleList
  },
  {
    path: "/role/:id/details",
    name: "role-view",
    component: RoleView,
    props: true
  },
  {
    path: "/role/:id/edit",
    name: "role-edit",
    component: RoleEdit,
    props: true
  },
  {
    path: "/users",
    name: "users",
    component: User
  },
  {
    path: "/users/create",
    name: "user-create",
    component: UserCreate
  },
  {
    path: "/user/:id/details",
    name: "user-view",
    component: UserView,
    props: true
  },
  {
    path: "/user/:id/edit",
    name: "user-edit",
    component: UserEdit,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
