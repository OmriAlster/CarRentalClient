import HomePage from "./components/HomePage";
import Order from "./components/Order";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' components={HomePage}/>
          <Route path='/login' component={Login} />
          <Route path='/order' component={Order} />
          <Route path='/aa' component={SignUp} />
        </Routes>
      </BrowserRouter>
    );
}; 

export default Router;