import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Explore from './pages/Explore/Explore';
import Purchase from './pages/Purchase/Purchase';
import GiftPage from './pages/Home/GiftPage/GiftPage';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './pages/Login/Register/Register';
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AddCycle from './pages/Dashboard/AddCycle/AddCycle';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment/Payment';
import Review from './pages/Dashboard/Review/Review';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact  path="/explore">
          <Explore></Explore>
        </Route>
        <Route exact  path="/giftpage">
          <GiftPage></GiftPage>
        </Route>
        <Route exact  path="/login">
          <Login></Login>
        </Route>
        <Route exact  path="/register">
          <Register></Register>
        </Route>
        <Route exact  path="/makeAdmin">
        <MakeAdmin></MakeAdmin>
        </Route>
        <PrivateRoute exact  path="/AddProduct">
          <AddCycle></AddCycle>
        </PrivateRoute>
        <PrivateRoute path="/purchase/:cycleId">
        <Purchase></Purchase>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path="/payment">
        <Payment></Payment>
        </PrivateRoute>
        <PrivateRoute exact path="/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path="/myorders">
        <MyOrders></MyOrders>
        </PrivateRoute>
        </Switch>
        
        
        </BrowserRouter>
      </AuthProvider>
        
    </div>
  );
}

export default App;
