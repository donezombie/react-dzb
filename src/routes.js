import LoginPage from './views/Login';
import Homepage from './views/Homepage';


export default [
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/",
    exact: true,
    isPrivate: true,
    component: Homepage
  }
]