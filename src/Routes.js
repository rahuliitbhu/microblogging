import Createpost from "./components/Pages/Createpost";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import Signup from "./components/Pages/Signup";

const routes=[
    {path:'/',element:<Home/>},
    {path:'/profile',element:<Profile/>},
    {path:'/signup',element:<Signup/>},
    {path:'/login',element:<Login/>},
    {path:'/createpost',element:<Createpost/>}
]


export default routes